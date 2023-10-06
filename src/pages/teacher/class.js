import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "../../components/custom";
import { UserService } from "../../services/userService";
import { PATH_DASHBOARD } from "../../routes/paths";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import { ControlButton } from "../../components/custom/Button";

export default function MyClass() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);

  //search students' list
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);

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

  useEffect(() => {
    const FetchStudents = async () => {
      try {
        const res = await UserService.findUsers({ role: "student" });
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

  console.log(pageData);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  //delete student
  const DeleteStudents = async (data) => {
    await UserService.deleteUser(students.id)
      .then((res) => {
        console.log(res);
        console.log(data);
        setOverlay(false);
        toast.success("teacher profile has been deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { register } = useForm();
  return (
    <Students className="d-flex flex-column">
      <div className="d-flex p-5 header flex-column">
        <h4>My Students</h4>
        <p>see full list of your students</p>
      </div>
      {isLoading ? <CircularProgress /> : ""}
      {pageData.length > 0 ? (
        <>
          <div className="d-flex p-5 justify-content-end">
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
                                  className="delete-button"
                                  onClick={() => {
                                    setOverlay(true);
                                  }}
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
                              className="delete-button"
                              onClick={() => {
                                setOverlay(true);
                              }}
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
        <div className="d-flex justify-content-center center align-center">
          <h4>
            No list to display... navigate to the{" "}
            <Link to={PATH_DASHBOARD.teacher.create}>
              register student(s) to create a student's profile
            </Link>
          </h4>
        </div>
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
              <button className="left" onClick={() => DeleteStudents()}>
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
  .container-fluid {
    gap: 30px;
  }

  .middle-div {
    width: 100% !important;
    .table-div {
      overflow-x: scroll !important;
      width: 100% !important;
    }
    .wrapper {
      gap: 40px;
      background-color: white;
      border-radius: 30px;

      .actions-div {
        align-items: center;
        .icon {
          font-size: 30px;
        }
      }
      .table {
      }
    }
    .form-wrapper {
      width: 300px;
      background-color: transparent;
      border-radius: 20px;
      border: 1px solid #f1f1f1;
      .form {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        button {
          border: 0;
          background: transparent;
        }
        .icon {
          font-size: 20px;
        }
        input {
          border-radius: 20px;
          padding: 14px 16px;
          background-color: transparent;
          border: 0 !important;
          outline: none !important;
        }
      }
    }
  }
`;
