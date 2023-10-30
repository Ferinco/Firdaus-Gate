import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { deleteUser, fetchUsers } from "../../redux/slices/users";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "../../components/custom";
import { UserService } from "../../services/userService";
import { PATH_DASHBOARD } from "../../routes/paths";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import { ControlButton } from "../../components/custom/Button";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import AddCSV from "../../components/AddCSV";
export default function MyClass() {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [overlay, setOverlay] = useState(false);

  //search students' list
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);
  const [deleteId, setDeleteId] = useState("");

  const dispatch = useDispatch();
  //handle input on search form
  let inputHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
  };

  //pagination of student lists
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageData, setPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const FetchStudents = async () => {
      try {
        const res = await UserService.findUsers({
          role: "student",
          classTeacher: user._id,
        });
        console.log(res);
        console.log(res.data);
        setPageData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    FetchStudents();
  }, []);

  useEffect(() => {
    const slice = pageData.slice(offset, offset + perPage);
    setStudents(slice);
    setPageCount(Math.ceil(pageData.length / perPage));
  }, [pageData, offset]);

  useEffect(() => {
    const performSearch = (query) => {
      const filterBySearch = students.filter(
        (student) =>
          student.lastName.toLowerCase().includes(query.toLowerCase()) ||
          student.firstName.toLowerCase().includes(query.toLowerCase())
      );
      setSearched(filterBySearch);
    };
    performSearch(searchQuery);
  }, [searchQuery]);

  // console.log(pageData);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  //delete student
  const handleDeleteUser = async (id) => {
    dispatch(deleteUser({ id: id }))
      .unwrap()
      .then((res) => {
        setOverlay(false);
        toast.success("student account has been deleted successfully");
      })
      .catch((error) => {
        toast.error("unable to delete student account");
      });
  };

  async function createCsvUsers() {
    if (csvData.length) {
      let newStudents = csvData.slice(1);
      setIsLoading(true);
      Promise.all(
        newStudents.map(async (item) => {
          const data = {
            firstName: item[0],
            lastName: item[1],
            middleName: item[2],
            admissionNumber: item[3],
            parentPhone: item[4],
            email: item[5],
            gender: item[6],
            role: "student",
            department: user.department,
            classTeacher: user._id,
            currentClass: user.classHandled,
          };
          const formData = new FormData();
          formData.append("values", JSON.stringify(data));
          await UserService.createUser(formData);
        })
      )
        .then((res) => {
          toast.success("Student account created successfully");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failure creating students from CSV");
        });
      setIsLoading(false);
    }
  }
  return (
    <Students className="d-flex flex-column">
      {CSVOpen && (
        <AddCSV
          onClose={() => setCSVOpen(false)}
          setData={setCsvData}
          data={csvData}
          handleSubmit={createCsvUsers}
        />
      )}
      <div className="d-flex p-5 header flex-column">
        <h4>My Students</h4>
        <p>see full list of your students</p>
      </div>
      {isLoading ? <CircularProgress /> : ""}
      {pageData.length > 0 ? (
        <>
          <div className="d-flex p-5 justify-content-between">
            <div className="search-field d-flex gap-3 align-items-center">
              <Icon icon="circum:search" color="gray" />
              <input
                type="text"
                placeholder="search for student"
                onChange={inputHandler}
                onFocus={() => {
                  setActiveSearch(true);
                }}
              />
            </div>
            <button onClick={() => setCSVOpen(true)}>Import CSV file</button>
          </div>
          {activeSearch ? (
            <>
              {searched.length > 0 ? (
                <>
                  <div
                    className="table-div px-5"
                    onClick={() => {
                      setActiveSearch(false);
                    }}
                  >
                    <Table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Admission Number</th>
                          <th>email</th>
                          <th>gender</th>
                          <th colSpan="3">Operations</th>
                        </tr>
                      </thead>
                      {searched.map((student, index) => (
                        <tbody key={student._id}>
                          <tr>
                            <td>{student.index}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.admissionNumber}</td>
                            <td>{student.email}</td>
                            <td>{student.gender}</td>

                            <td>
                              <Link to="">
                                <button className="update-button">
                                  update
                                </button>
                              </Link>
                            </td>
                            <td>
                              <Link to="">
                                <button className="transfer-button">
                                  transfer
                                </button>
                              </Link>
                            </td>
                            <td>
                              <Link to="">
                                <button
                                  onClick={() => {
                                    setOverlay(true);
                                    setDeleteId(student._id);
                                  }}
                                  className="delete-button"
                                >
                                  delete
                                </button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </div>
                </>
              ) : (
                <div className="not-found">
                  can't find "{searchQuery}" in students' list
                </div>
              )}
              <ReactPaginate
                previousLabel={
                  <ControlButton>
                    <Icon icon="ooui:next-rtl" className="icon" />
                  </ControlButton>
                }
                nextLabel={
                  <ControlButton>
                    <Icon icon="ooui:next-ltr" className="icon" />
                  </ControlButton>
                }
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination pl-5 align-items-center gap-2"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </>
          ) : (
            <>
              <div
                className="table-div px-5"
                onClick={() => {
                  setActiveSearch(false);
                }}
              >
                <Table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Admission Number</th>
                      <th>email</th>
                      <th>gender</th>
                      <th colSpan="3">Operations</th>
                    </tr>
                  </thead>
                  {students.map((student, index) => (
                    <tbody key={student._id}>
                      <tr>
                        <td>{student.index}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.admissionNumber}</td>
                        <td>{student.email}</td>
                        <td>{student.gender}</td>

                        <td>
                          <Link to="">
                            <button className="update-button">update</button>
                          </Link>
                        </td>
                        <td>
                          <Link to="">
                            <button className="transfer-button">
                              transfer
                            </button>
                          </Link>
                        </td>
                        <td>
                          <Link to="">
                            <button
                              onClick={() => {
                                setOverlay(true);
                                setDeleteId(student._id);
                              }}
                              className="delete-button"
                            >
                              delete
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
              <ReactPaginate
                previousLabel={
                  <ControlButton>
                    <Icon icon="ooui:next-rtl" className="icon" />
                  </ControlButton>
                }
                nextLabel={
                  <ControlButton>
                    <Icon icon="ooui:next-ltr" className="icon" />
                  </ControlButton>
                }
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination pl-5 align-items-center gap-2"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </>
          )}
        </>
      ) : (
        <div className="d-flex justify-content-center center align-center px-5">
          <p>
            No list to display... navigate to the{" "}
            <Link to={PATH_DASHBOARD.teacher.create}>
              register student(s) to create a student's profile
            </Link>
            <br />
            <button onClick={() => setCSVOpen(true)}>Import CSV file</button>
          </p>
        </div>
      )}

      {overlay ? (
        <div className="overlay-wrapper d-flex ">
          <div
            className={`d-flex flex-column p-3 overlay-options ${
              overlay ? "open" : "close"
            }`}
          >
            <p>Are you sure you want to delete this student profile?</p>
            <div className=" buttons d-flex gap-3">
              <button
                className="left"
                onClick={() => {
                  handleDeleteUser(deleteId);
                }}
              >
                yes
              </button>
              <button
                className="right"
                onClick={() => {
                  setOverlay(false);
                }}
              >
                no
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Students>
  );
}
const Students = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .buttons {
    justify-content: right;
    width: 100%;
    .left {
      width: 70px;
      border: 0;
      border-radius: 10px;
      padding: 7px;
      color: white;
      background-color: blue;
    }
    .right {
      background-color: #f1f1f1;
      width: 50px;
      border: 0;
      border-radius: 10px;
      padding: 7px;
      color: red;
      &:hover {
        background-color: red;
        transition: 0.3s;
        color: white;
      }
    }
  }
`;
