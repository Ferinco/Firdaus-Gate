import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { deleteUser } from "../../redux/slices/users";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "../../components/custom";
import { UserService } from "../../services/userService";
import { PATH_DASHBOARD } from "../../routes/paths";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import AddCSV from "../../components/AddCSV";
import { PaginationBar } from "../../components/PaginationBar";
import { useForm } from "react-hook-form";
import { getNonNullValue } from "../../utils/utils";
import { api } from "../../api/axios";

const columns = [
  { header: "Select", accessor: "select" },
  {
    header: "First Name",
    accessor: "firstName",
    isSorted: false,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },
  {
    header: "Last Name",
    accessor: "lastName",
    isSorted: false,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },
  {
    header: "Date Added",
    accessor: "createdAt",
    isSorted: false,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },
  {
    header: "Admission Number",
    accessor: "admissionNumber",
    isSorted: true,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },
  {
    header: "Email",
    accessor: "email",
    isSorted: false,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },

  {
    header: "Gender",
    accessor: "gender",
    isSorted: false,
    isSortedDesc: false,
  },

  {
    header: "Status",
    accessor: "status",
    isSorted: false,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },

  {
    header: "Action",
    accessor: "",
    device: "large",
  },
];

export default function MyClass() {
  const { user } = useAuth();
  console.log(user);
  const [currentTableData, setCurrentTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [canNextPage, setCanNextPage] = useState(false);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [dataTotal, setDataTotal] = useState(0);

  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(0);
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  //handle checked students
  const [checkLength, setcheckLength] = useState(0);

  const getData = async (pageNum, limitNum, filter) => {
    try {
      setIsLoading(true);
      const result = await UserService.findUsers({
        role: "student",
        classTeacher: user?._id,
        limit: limitNum,
        page: pageNum,
        ...filter,
      });
      console.log(result);
      const { list, totalPages, currentPage, total, limit } = result.data;
      setCanPreviousPage(currentPage > 1);
      setCanNextPage(currentPage + 1 <= totalPages);
      setIsLoading(false);
      setCurrentTableData(list);
      setDataTotal(total);
      setPageSize(limit);
      setPageCount(totalPages);
      setPage(currentPage);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => await getData(page, pageSize))();
  }, []);

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

  function onSort(columnIndex) {
    console.log(columns[columnIndex]);
    if (columns[columnIndex].isSorted) {
      columns[columnIndex].isSortedDesc = !columns[columnIndex].isSortedDesc;
    } else {
      columns.map((i) => (i.isSorted = false));
      columns.map((i) => (i.isSortedDesc = false));
      columns[columnIndex].isSorted = true;
    }

    // (async function () {
    //   await getData(0, pageSize, { user_id, status: 0 });
    // })();
  }
  function updatePageSize(limit) {
    (async function () {
      setPageSize(limit);
      await getData(0, limit);
    })();
  }
  function previousPage() {
    (async function () {
      await getData(page - 1 > 0 ? page - 1 : 0, pageSize);
    })();
  }

  function nextPage() {
    (async function () {
      await getData(page + 1 <= pageCount ? page + 1 : 0, pageSize);
    })();
  }
  const handleSearch = async (value) => {
    const firstName = getNonNullValue(value.firstName);
    const lastName = getNonNullValue(value.lastName);
    await getData(page, pageSize, {
      firstName: firstName,
      lastName: lastName,
    });
  };

  const resetSearch = async () => {
    reset();
    await getData(page, pageSize);
  };
  const { register, handleSubmit, reset } = useForm();
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

  const handleMultiTransfer = () => {
    if (multiSelect.length) {
      Promise.all(
        multiSelect.map(async (studentId) => {
          await api.post("/class/transfer", {
            currentClass: user.classHandled,
            studentId,
          });
        })
      );
    }
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
      {isLoading ? <CircularProgress /> : ""}
      <Wrapper className="d-flex flex-column py-5">
        {/* <div className="header px-3 py-3">
      <h4>List of Students</h4>
      <p>view and edit student(s) details here...</p>
    </div> */}
        {currentTableData.length > 0 ? (
          <div className="">
            <div className="d-flex py-3 justify-content-between">
              <form onSubmit={handleSubmit(handleSearch)}>
                <p>Search students</p>
                <div className="d-flex gap-2 py-2">
                  <input
                    type="text"
                    placeholder="First name"
                    {...register("firstName")}
                  />

                  {/* <Icon icon="circum:search" color="gray" className="icon" /> */}

                  <input
                    type="text"
                    placeholder="Last name"
                    {...register("lastName")}
                  />
                </div>
                <button type="submit" onClick={handleSearch}>
                  Search
                </button>
                <button type="button" onClick={resetSearch}>
                  Reset
                </button>
              </form>

              <button onClick={() => setCSVOpen(true)} className="csv-button">
                Import CSV file
              </button>
            </div>
            <div>
              <button onClick={handleMultiTransfer}>
                Transfer &nbsp;{" "}
                {multiSelect.length ? `(${multiSelect.length})` : "all"} &nbsp;
                students
              </button>
            </div>
            <div className="div mt-3">
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
                <Table className="table table-bordered mt-3">
                  <thead className="">
                    <tr className="head">
                      {columns.map((column, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="table-head"
                          onClick={() => onSort(i)}
                        >
                          {column.header}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " ▼"
                                : " ▲"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {/* <tr className="head">
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
                  </tr> */}
                  {currentTableData.length > 0 &&
                    currentTableData.map((row, i) => (
                      <tr key={i} className="body">
                        {columns.map((cell, index) => {
                          if (cell.accessor.indexOf("image") > -1) {
                            return (
                              <td key={index} className="">
                                <img src={row[cell.accessor]} />
                              </td>
                            );
                          }

                          if (cell.accessor == "select") {
                            return (
                              <td className="table-body">
                                <input
                                  type="checkbox"
                                  className=" cursor-pointer focus:outline-none focus:ring-0 "
                                  onChange={() => multiSelectHandle(row._id)}
                                  checked={multiSelect.includes(row._id)}
                                />
                              </td>
                            );
                          }
                          if (cell.accessor == "createdAt") {
                            return (
                              <td className="table-body">
                                {new Date(row.createdAt).toLocaleDateString()}
                              </td>
                            );
                          }

                          if (cell.accessor == "") {
                            return (
                              <td key={index} className="table-body">
                                <td>
                                  <button className="update-button">
                                    Edit
                                  </button>
                                </td>
                                <td>
                                  <button
                                    onClick={() => {
                                      setOverlay(true);
                                      setDeleteId(row._id);
                                    }}
                                    className="delete-button"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </td>
                            );
                          }

                          if (cell.mappingExist) {
                            return (
                              <td key={index} className="table-body">
                                {cell.mappings[row[cell.accessor]]}
                              </td>
                            );
                          }
                          return (
                            <td key={index} className="table-body">
                              {row[cell.accessor]}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                </Table>
              </div>
              {/* <ReactPaginate
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
              /> */}

              <PaginationBar
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                currentPage={page}
                nextPage={nextPage}
                previousPage={previousPage}
                pageCount={pageCount}
                pageSize={pageSize}
                updatePageSize={updatePageSize}
              />
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
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
              className={`d-flex flex-column overlay-options ${
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
  padding-left: 32px;
  padding-right: 32px;
  background-color: #f5f5f5 !important;
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
    background-color: white !important;
    overflow-x: hidden !important;

    .bars {
      @media screen and (max-width: 630px) {
        flex-direction: column !important;
      }
    }
    .navigators {
    }
    .navigator {
      padding: 3px 10px;
      font-size: 13px;
      font-weight: 600;
      color: grey;
      border-bottom: 2px solid #f5f5f5;

      cursor: pointer;

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
  @media screen and (max-width: 1100px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
