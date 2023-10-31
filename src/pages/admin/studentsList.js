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
//the whole component
export default function StudentsList() {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    dispatch(fetchUsers({ role: "student" , classTeacher: user._id}));
    setIsLoading(false)
  }, []);

  const { users } = useSelector((state) => state.users);
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
    <Wrapper className="d-flex flex-column">
            {CSVOpen && (
        <AddCSV
          onClose={() => setCSVOpen(false)}
          setData={setCsvData}
          data={csvData}
          handleSubmit={createCsvUsers}
        />
      )}
      <div className="header p-5">
        <h4>List of Students</h4>
        <p>view and edit student(s) details here...</p>
      </div>
      {isLoading ? <CircularProgress /> : ""}
      {students.length > 0 ? (
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
      {activeSearch? (
        <>
        {searched.length > 0 ? (
          <>
            <div className="px-5 table-div" onClick={()=>{setActiveSearch(false)}}>
            <Table className="table table-bordered">
              <thead className="">
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
              {searched.map((student) => (
                <tbody>
                  <tr key={student.id}>
                    <td>{student.id}</td>
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
                        <button className="transfer-button">transfer</button>
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
        ): (
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
      ): (
       <>
         <div className="px-5 table-div" onClick={()=>{setActiveSearch(false)}}>
            <Table className="table table-bordered">
              <thead className="">
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
              {students.map((student) => (
                <tbody>
                  <tr key={student.id}>
                    <td>{student.id}</td>
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
                        <button className="transfer-button">transfer</button>
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
      )
    }
        </>
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
  );
}

const Wrapper = styled.div`
background-color: #f1f1f1 !important;
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
