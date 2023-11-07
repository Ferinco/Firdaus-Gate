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
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);


  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch();

  //pagination of student lists
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageData, setPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  //handle checked students
  const [checkLength, setcheckLength] = useState(0);


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

    const performSearch = (event) => {
      const query = event.target.value
      console.log(query)
      let updatedList = students.filter((student) => {
        return (
          student.lastName.toLowerCase().includes(query.toLowerCase()) ||
          student.firstName.toLowerCase().includes(query.toLowerCase())
        );
      });
      console.log(updatedList)
     setStudents(updatedList)
    };


  // console.log(pageData);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const multiSelectHandle = (id) => {
    if (multiSelect.includes(id)) {
      const newList = multiSelect.filter((item) => item !== id);
      setMultiSelect(newList);
      console.log(multiSelect);
    } else {
      setMultiSelect([...multiSelect, id]);
    }
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
            password: `${item[0].toLowerCase()}${item[3]}`,
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
console.log(students)

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
      {/* <div className="header px-3 py-3">
      <h4>List of Students</h4>
      <p>view and edit student(s) details here...</p>
    </div> */}
      {isLoading ? <CircularProgress /> : ""}
      {students.length > 0 ? (
        <div className="p-3">
          <div className="d-flex py-3 justify-content-between">
            <div className="search-field d-flex gap-3 align-items-center">
              <Icon icon="circum:search" color="gray" className="icon" />
              <input
                type="text"
                placeholder="search for student"
                onChange={performSearch}
              />
            </div>
            <button onClick={() => setCSVOpen(true)} className="csv-button">
              Import CSV file
            </button>
          </div>
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
                  {students.length > 0 &&
                    students.map((student) => (
                      <tr key={student._id} className="body">
                        <td className="table-body">
                          <input
                            type="checkbox"
                            className=" cursor-pointer focus:outline-none focus:ring-0 "
                            onChange={() => multiSelectHandle(student._id)}
                            checked={multiSelect.includes(student._id)}
                          />
                        </td>
                        <td className="table-body">{student.firstName}</td>
                        <td className="table-body">{student.lastName}</td>
                        <td className="table-body table-id">
                          {student.admissionNumber}
                        </td>
                        <td className="table-body email">{student.email}</td>
                        <td className="table-body">{student.parentPhone}</td>
                        <td className="table-body">{student.gender}</td>

                        <td>
                          <Link to="">
                            <button className="update-button">edit</button>
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
        </div>
      ) : (
        <div className="px-3 d-flex justify-content-center align-items-center">
          <div className="pt-5 h-100">
            <p className="text-muted">No student to display...</p>
            <div className="d-flex py-1 justify-content-between">
              <button onClick={() => setCSVOpen(true)} className="csv-button">
                Import CSV file
              </button>
            </div>
          </div>
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
`;