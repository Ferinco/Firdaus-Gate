import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import toast from "react-hot-toast";
import { CircularProgress } from "../../components/custom";
import ReactPaginate from "react-paginate";
import { deleteUser, fetchUsers, editUser } from "../../redux/slices/users";
import { Icon } from "@iconify/react";
import { ControlButton } from "../../components/custom/Button";
import AddCSV from "../../components/AddCSV";
import { UserService } from "../../services/userService";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Link } from "react-router-dom";
export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const dispatch = useDispatch();

  //serach teachers' list
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);

  //handle input on search form
  let inputHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    const performSearch = (query) => {
      const filterBySearch = teachers.filter(
        (teacher) =>
          teacher.lastName.toLowerCase().includes(query.toLowerCase()) ||
          teacher.firstName.toLowerCase().includes(query.toLowerCase())
      );
      setSearched(filterBySearch);
    };
    performSearch(searchQuery);
  }, [searchQuery]);

  console.log(activeSearch);
  //states to manage pagination of teacherlist
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(5);
  const [deleteId, setDeleteId] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  //to manage csv file uplaod
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);

  //handle checked students
  const [checkLength, setcheckLength] = useState(0);

  function checkTeacher() {
    setcheckLength(checkLength + 1);
  }
  useEffect(() => {
    dispatch(fetchUsers({ role: "teacher" }));
  }, []);
  const { users, isLoading } = useSelector((state) => state.users);

  //handle navigation of pages to next || previous
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    const slice = users.slice(offset, offset + perPage);
    setTeachers(slice);
    setPageCount(Math.ceil(users.length / perPage));
  }, [users, offset]);

  //delete teacher
  const handleDeleteUser = async (id) => {
    dispatch(deleteUser({ id: id }))
      .unwrap()
      .then((res) => {
        console.log(res);
        setOverlay(false);
        toast.success("teacher profile has been deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(csvData);
  const newData = csvData.map((item) => {
    const data = {
      firstName: item[0],
      middleName: item[1],
      lastName: item[2],
      teacherId: item[3],
      classHandled: item[4],
      tel: item[5],
      email: item[6],
      gender: item[7],
      subjectTaught: item[8],
      password: `${item[0].toLowerCase()}${item[3]}`,
      role: "teacher",
    };
    return data;
  });

  console.log(newData);
  async function createCsvUsers() {
    if (csvData.length) {
      let newTeachers = csvData.slice(1);
      setLoading(true);
      Promise.all(
        newTeachers.map(async (item) => {
          const data = {
            firstName: item[0],
            middleName: item[1],
            lastName: item[2],
            teacherId: item[3],
            classHandled: item[4] === "none" ? "none" : item[4],
            tel: item[5],
            email: item[6],
            gender: item[7],
            subjectTaught: item[8],
            password: `${item[0].toLowerCase()}${item[3]}`,
            role: "teacher",
            teacherType:
              item[4] === "none" ? "subject_teacher" : "class_teacher",
          };
          const formData = new FormData();
          formData.append("values", JSON.stringify(data));
          await UserService.createUser(formData)
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
          setLoading(false);
        })
      )
        .then((res) => {
          toast.success("Teacher accounts created successfully");
          console.log(res);
          setLoading(false);
          setCSVOpen(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failure creating teachers from CSV");
          setCSVOpen(false);
        });
      setLoading(false);
    }
  }

  const handleEditUser = async (id) => {
    dispatch(editUser({ id: id }))
      .unwrap()
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
    <Wrapper className="d-flex flex-column py-5">
      {isLoading ? <CircularProgress /> : ""}
      {loading ? <CircularProgress /> : ""}
      {users.length > 0 ? (
        <div className="">
          <div className="d-flex py-3 justify-content-between">
            <div className="search-field d-flex gap-3 align-items-center">
              <Icon icon="circum:search" color="gray" />
              <input
                type="text"
                placeholder="search for teacher"
                onChange={inputHandler}
                onFocus={() => {
                  setActiveSearch(true);
                }}
              />
            </div>
            <button onClick={() => setCSVOpen(true)} className="csv-button">
              Import CSV file
            </button>
          </div>
          {activeSearch ? (
            <>
              {searched.length > 0 ? (
                <div className="div p-3 mt-3">
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
                    <Table className="table table-bordered">
                      <tr className="head">
                        <th className="table-head">
                          <input type="checkbox" className="check " />
                        </th>
                        <th className="table-head">First Name</th>
                        <th className="table-head">Last Name</th>
                        <th className="table-head">Teacher ID</th>
                        <th className="table-head">gender</th>
                        <th className="table-head">email</th>
                        <th className="table-head">telephone</th>
                        <th colSpan="2" className="table-head">
                          Operations
                        </th>
                      </tr>

                      {searched.map((teacher) => (
                        <tr key={teacher._id} className="body">
                          <td className="table-body">
                            <input
                              type="checkbox"
                              className="check"
                              checked="false"
                              key={teacher._id}
                              onChange={(e) => {
                                checkTeacher();
                              }}
                            />
                          </td>
                          <td className="table-body">{teacher.firstName}</td>
                          <td className="table-body">{teacher.lastName}</td>
                          <td className="table-body table-id">
                            {teacher.teacherId}
                          </td>
                          <td className="table-body">
                            {teacher.gender === "male" ? "M" : "F"}
                          </td>
                          <td className="table-body email" email>
                            {teacher.email}
                          </td>
                          <td className="table-body">{teacher.tel}</td>

                          <td className="table-button">
                            <Link
                              to={`${PATH_DASHBOARD.admin.teacherInfo}/${teacher._id}`}
                            >
                              <button className="view-button">view</button>
                            </Link>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                handleEditUser(teacher._id);
                              }}
                              className="update-button"
                            >
                              Edit
                            </button>{" "}
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                setOverlay(true);
                                setDeleteId(teacher._id);
                              }}
                              className="delete-button"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </Table>
                  </div>
                </div>
              ) : (
                <div className="not-found">
                  can't find "{searchQuery}" in teachers' list
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
              <div className="table-div ">
                <Table className="table table-bordered mt-5">
                  <tr className="head">
                    <th className="table-head">
                      <input type="checkbox" className="check " />
                    </th>
                    <th className="table-head">First Name</th>
                    <th className="table-head">Last Name</th>
                    <th className="table-head">Teacher ID</th>
                    <th className="table-head">email</th>
                    <th className="table-head">telephone</th>
                    <th className="table-head">gender</th>

                    <th colSpan="2" className="table-head">
                      Operations
                    </th>
                  </tr>
                  {teachers.map((teacher) => (
                    <tr key={teacher._id} className="body">
                      <td className="table-body">
                        <input
                          type="checkbox"
                          className="check"
                          checked="false"
                          key={teacher._id}
                          onChange={(e) => {
                            checkTeacher();
                          }}
                        />
                      </td>
                      <td className="table-body">{teacher.firstName}</td>
                      <td className="table-body">{teacher.lastName}</td>
                      <td className="table-body table-id">
                        {teacher.teacherId}
                      </td>
                      <td className="table-body email">{teacher.email}</td>
                      <td className="table-body">{teacher.tel}</td>
                      <td className="table-body">
                        {teacher.gender === "male" ? "M" : "F"}
                      </td>
                      <td className="table-button">
                        <Link
                          to={`${PATH_DASHBOARD.admin.teacherInfo}/${teacher._id}`}
                        >
                          <button className="view-button">view</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            handleEditUser(teacher._id);
                          }}
                          className="update-button"
                        >
                          Edit
                        </button>{" "}
                      </td>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            setOverlay(true);
                            setDeleteId(teacher._id);
                          }}
                          className="delete-button"
                        >
                          Delete
                        </button>
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
            <p>Are you sure you want to delete this teacher profile?</p>
            <div className=" buttons d-flex gap-3">
              <button
                className="left"
                onClick={() => handleDeleteUser(deleteId)}
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
  background-color: #f5f5f5 !important;
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
      border-bottom: 2px solid #f5f5f5;

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
