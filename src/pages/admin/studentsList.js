import { useState, useEffect } from "react";
import React from "react";
import { UserService } from "../../services/userService";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgress } from "../../components/custom";
import ReactPaginate from "react-paginate";
import { Icon } from "@iconify/react";
import { ControlButton } from "../../components/custom/Button";
import { deleteUser, fetchUsers } from "../../redux/slices/users";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import AddCSV from "../../components/AddCSV";
import { useAuth } from "../../hooks/useAuth";
import { PATH_DASHBOARD } from "../../routes/paths";
//the whole component
export default function StudentsList() {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const dispatch = useDispatch();

  //states to manage pagination of studentlist
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(5);
  const [deleteId, setDeleteId] = useState("");

  //serach teachers' list
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);

  //handle checked students
  const [checkLength, setcheckLength] = useState(0);

  function checkStudent() {
    setcheckLength(checkLength + 1);
  }

  console.log(checkLength);
  //handle input on search form
  let inputHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
  };

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

  console.log(activeSearch);

  //fetching student details
  useEffect(() => {
    dispatch(fetchUsers({ role: "student" }));
  }, []);

  const { users, isLoading } = useSelector((state) => state.users);
  useEffect(() => {
    const slice = users.slice(offset, offset + perPage);
    setStudents(slice);
    setPageCount(Math.ceil(users.length / perPage));
  }, [users, offset]);

  //handle navigation of pages to next || previous
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const handleDeleteUser = async (id) => {
    dispatch(deleteUser({ id: id }))
      .unwrap()
      .then((res) => {
        console.log(res);
        setOverlay(false);
        toast.success("student account has been deleted successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("unable to delete student account");
      });
  };
  async function createCsvUsers() {
    if (csvData.length) {
      let newStudents = csvData.slice(1);
      isLoading(true);
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
      isLoading(false);
    }
  }
  return (
    <>
      {CSVOpen && (
        <AddCSV
          onClose={() => setCSVOpen(false)}
          setData={setCsvData}
          data={csvData}
          handleSubmit={createCsvUsers}
        />
      )}
      {isLoading ? <CircularProgress /> : ""}
    <Wrapper className="d-flex flex-column py-5">
      {students.length > 0 ? (
        <div className="">
          <div className="d-flex py-3 justify-content-between">
            <div className="search-field d-flex gap-3 align-items-center">
              <Icon icon="circum:search" color="gray" className="icon" />
              <input
                type="text"
                placeholder="search for student"
                onChange={inputHandler}
                onFocus={() => {
                  setActiveSearch(true);
                }}
              />
            </div>
            <button onClick={() => setCSVOpen(true)} className="csv-button">Import CSV file</button>
          </div>
          {activeSearch ? (
            <>
              {searched.length > 0 ? (
                <div
                  className="div p-3 mt-4"
                >
                  <div className="d-flex justify-content-between bars">
                    <div className="navigators d-flex gap-2">
                      <div className="navigator ">All</div>
                      <div className="navigator ">Deactivated</div>
                      <div className="navigator"></div>
                    </div>

                    <div
                      className={`actions d-flex gap-2 ${
                        checkLength > 0 ? "open-action" : "closed-action"
                      }`}
                    >
                      <div className="action ">transfer all</div>
                      <div className="action ">deactivate all</div>
                      <div className="action">delete all</div>
                    </div>
                  </div>
                  <div className="table-div">
                    <Table className="table table-bordered mt-5">
                      <tr className="head">
                        <th className="table-head">
                          <input type="checkbox" className="check " />
                        </th>

                        <th className="table-head">First Name</th>
                        <th className="table-head">Last Name</th>
                        <th className="table-head">Admission Number</th>
                        <th className="table-head">email</th>
                        <th className="table-head">gender</th>
                        <th colSpan="3" className="table-head">
                          Operations
                        </th>
                      </tr>
                      {searched.map((student) => (
                        <tr key={student.id} className="body">
                          <td className="table-body">
                            {" "}
                            <input
                              type="checkbox"
                              className="check"
                              checked="false"
                              key={student._id}
                              onChange={(e) => {
                                checkStudent();
                              }}
                            />
                          </td>
                          <td className="table-body">{student.firstName}</td>
                          <td className="table-body">{student.lastName}</td>
                          <td className="table-body table-id">
                            {student.admissionNumber}
                          </td>
                          <td className="table-body email">{student.email}</td>
                          <td className="table-body">
                        {student.gender === "male" ? "M" : "F"}
                      </td>
                          <td className="table-button">
                          <Link to={`${PATH_DASHBOARD.admin.studentInfo}/${student._id}`}>
                              <button className="view-button">view</button>
                            </Link>
                          </td>
                          <td className="table-button">
                          <Link to={`${PATH_DASHBOARD.admin.editStudent}/${student._id}`}>
                              <button className="update-button">edit</button>
                            </Link>
                          </td>
                          <td className="table-button">
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
                      ))}
                    </Table>
                  </div>
                </div>
              ) : (
                <div className="not-found">not found shii</div>
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
            <div className="div p-3 mt-4">
              <div className="d-flex justify-content-between bars">
                <div className="navigators d-flex gap-2">
                  <div className="navigator ">All</div>
                  <div className="navigator ">Deactivated</div>
                  <div className="navigator"></div>
                </div>

                <div
                  className={`actions d-flex gap-2 ${
                    checkLength > 0 ? "open-action" : "closed-action"
                  }`}
                >
                  <div className="action ">transfer all</div>
                  <div className="action ">deactivate all</div>
                  <div className="action">delete all</div>
                </div>
              </div>
              <div className=" table-div">
                <Table className="table table-bordered mt-5">
                  <tr className="head">
                    <th className="table-head">
                      <input type="checkbox" className="check " />
                    </th>
                    <th className="table-head">First Name</th>
                    <th className="table-head">Last Name</th>
                    <th className="table-head">Admission Number</th>
                    <th className="table-head">email</th>
                    <th className="table-head">parent phone</th>
                    <th className="table-head">gender</th>
                    <th className="table-head" colSpan="3">
                      Operations
                    </th>
                  </tr>
                  {students.map((student) => (
                    <tr key={student.id} className="body">
                      <td className="table-body">
                        <input
                          type="checkbox"
                          className="check"
                          checked="false"
                          key={student._id}
                          onChange={(e) => {
                            checkStudent();
                          }}
                        />
                      </td>
                      <td className="table-body">{student.firstName}</td>
                          <td className="table-body">{student.lastName}</td>
                          <td className="table-body table-id">
                            {student.admissionNumber}
                          </td>
                          <td className="table-body email">{student.email}</td>
                          <td className="table-body">
                        {student.gender === "male" ? "M" : "F"}
                      </td>
                      <td className="table-button">
                            <Link to={`${PATH_DASHBOARD.admin.studentInfo}/${student._id}`}>
                              <button className="view-button">view</button>
                            </Link>
                          </td>
                      <td className="table-button">
                      <Link to={`${PATH_DASHBOARD.admin.editStudent}/${student._id}`}>
                          <button className="update-button">edit</button>
                        </Link>
                      </td>
                      <td className="table-button">
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
            </div>
          )}
        </div>
      ) : (
        <div className="p-5">no details to display...</div>
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
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #f1f1f1 !important;
  padding-right: 32px !important;
  padding-left: 32px !important;
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
  .table-div {
    overflow-x: scroll !important;
  }
  .pagination {
    justify-content: flex-end;
    margin-top: 10px;
  }
  .head {
    background-color: #f1f1f1 !important;
  }
  .table-head {
    color: grey !important;
    font-size: 14px;
    padding: 10px !important;
    text-transform: capitalize;
    text-align: center;
  }
  .body {
    padding: 0 !important;
    border: 1px solid #f1f1f1;
  }
  .table-body {
    font-size: 13px;
    border: 1px solid #f1f1f1;
    text-align: center;
  }
  .table-id {
    color: blue;
  }
  .email {
    overflow: hidden;
    max-width: 120px;
    text-overflow: ellipsis !important;
  }
  .check {
    cursor: pointer;
  }
  .div {
    border-radius: 10px;
    background-color: white;
    overflow-x: hidden !important;

    .bars {
      @media screen and (max-width: 630px) {
        flex-direction: column !important;
      }
    }
    .navigators {
      @media screen and (max-width: 630px) {
        border-radius: 10px;
        padding: 10px;
        justify-content: space-between;
      }
    }
    .navigator {
      padding: 3px 10px;
      font-size: 13px;
      font-weight: 600;
      color: grey;
      border-bottom: 2px solid white;

      cursor: pointer;
      @media screen and (max-width: 630px) {
        background-color: white !important;
      }

      &:first-child {
        border-bottom: 2px solid blue;
        color: blue;
      }
    }
    .action {
      border: 1px solid grey;
      border-radius: 20px;
      padding: 3px 10px;
      font-size: 13px;
      font-weight: 600;
      color: grey;
      text-transform: capitalize;
      background-color: #f1f1f1;
      cursor: pointer;
      &:first-child {
        border: 1px solid #8080ff;
        color: #8080ff;
        &:hover {
          border: 1px solid #8080ff;
          color: white;
          background-color: #8080ff;
          transition: 0.3s;
        }
      }
      &:nth-child(2) {
        border: 1px solid black;
        color: black;
        &:hover {
          color: white;
          background-color: black;
          transition: 0.3s;
        }
      }
      &:nth-child(3) {
        color: red;
        border: 1px solid red;
        &:hover {
          color: white;
          background-color: red;
          transition: 0.3s;
        }
      }
    }
    .closed-action {
      /* margin-right: -100px !important; */
      display: none !important;
    }
    .open-action {
      /* margin-left: -100px !important; */
      display: flex !important;
      transition: 0.3s !important;
      @media screen and (max-width: 630px) {
        justify-content: flex-end;
        background-color: #f1f1f1;
        border-radius: 10px;
        padding: 7px;
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 1100px){
    padding-right: 24px !important;
  padding-left: 24px !important;
  }
`;
