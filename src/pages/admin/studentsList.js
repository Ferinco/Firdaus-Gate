import React, { useState, useEffect, useCallback } from "react";
import { UserService } from "../../services/userService";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgress } from "../../components/custom";
import { PaginationBar } from "../../components/PaginationBar";
import { Icon } from "@iconify/react";
import { ControlButton } from "../../components/custom/Button";
import { deleteUser, fetchUsers } from "../../redux/slices/users";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import AddCSV from "../../components/AddCSV";
import { useAuth } from "../../hooks/useAuth";
import { PATH_DASHBOARD } from "../../routes/paths";
import { api } from "../../api/axios";
import { useForm } from "react-hook-form";
import { getNonNullValue } from "../../utils/utils";

const columns = [
  { header: "", accessor: "select" },
  {
    header: "First Name",
    accessor: "firstName",
    isSorted: false,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },
  {
    header: "Surname",
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
    header: "Admission No.",
    accessor: "admissionNumber",
    isSorted: true,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
  },
  {
    header: "Class",
    accessor: "currentClass",
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

//the whole component
export default function StudentsList() {
  const { user } = useAuth();
  const [currentTableData, setCurrentTableData] = useState([]);
  const [multiSelect, setMultiSelect] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [canNextPage, setCanNextPage] = useState(false);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [dataTotal, setDataTotal] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);

  //fetching student details
  const getData = async (pageNum, limitNum, filter) => {
    try {
      setIsLoading(true);
      const result = await UserService.findUsers({
        role: "student",
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
  const createCsvUsers = useCallback(async () => {
    if (csvData.length) {
      let newStudents = csvData.slice(1);
      setIsLoading(true);
      console.log(newStudents);
      try {
        setIsLoading(true);
        for (const student of newStudents) {
          const data = {
            firstName: student[0],
            lastName: student[1],
            middleName: student[2],
            currentClass: student[3],
            admissionNumber: student[4],
            parentPhone: student[5],
            email: student[6],
            gender: student[7],
            role: "student",
            password: `${student[1]}${student[4]}`,
          };
          const formData = new FormData();
          formData.append("values", JSON.stringify(data));
          await UserService.createUser(formData);
          setIsLoading(false);
          setCSVOpen(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setCSVOpen(false);
      }

      getData(page, pageSize);
    }
  }, [csvData, getData, page, pageSize, setCSVOpen, setIsLoading]);

  const handleMultiTransfer = () => {
    if (multiSelect.length) {
      Promise.all(
        multiSelect.map(async (studentId) => {
          setIsLoading(true);
          await api.post("/class/transfer", {
            currentClass: user.classHandled,
            studentId,
          });
          setMultiSelect([]);
        })
      )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          getData(page, pageSize);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };
  const handleDeactivate = () => {
    if (multiSelect.length) {
      Promise.all(
        multiSelect.map(async (studentId) => {
          setIsLoading(true);
          const formData = new FormData();
          formData.append("values", JSON.stringify({ status: "inactive" }));
          await UserService.updateUser(studentId, formData);
          setMultiSelect([]);
        })
      )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          getData(page, pageSize);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });

      // toast.success()
    }
  };

  const deleteMultiple = async () => {
    if (multiSelect.length) {
      Promise.all(
        multiSelect.map(async (teacherId) => {
          setIsLoading(true);
          api
            .delete(`/users/delete/${teacherId}`)
            .then((res) => {
              setIsLoading(false);
              setMultiSelect([]);
              getData(page, pageSize);
            })
            .catch((error) => {
              setIsLoading(false);
              console.log(error);
              toast.error("Unable to delete teachers account");
            });
        })
      );
      toast.success(`${multiSelect.length} students deleted successfully`);
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
        <div className="content-wrapper p-3 mt-5">
          <div className="d-flex py-3 justify-content-between align-items-center search-div">
            <form onSubmit={handleSubmit(handleSearch)}>
              <p className="mb-1 search-p">Search students</p>
              <div className="d-flex flex-row gap-2 search-field">
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName")}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName")}
                />
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="search-button"
                >
                  <Icon icon="circum:search" color="gray" className="icon" />
                </button>
              </div>
              <button
                type="button"
                onClick={resetSearch}
                className="reset-button mt-1"
              >
                Reset
              </button>
            </form>

            <button onClick={() => setCSVOpen(true)} className="csv-button">
              Import CSV file
            </button>
          </div>
          {currentTableData.length ? (
            <div className="div mt-3">
              <div className="d-flex justify-content-between bars">
                <div className="navigators d-flex gap-2">
                  <div className="navigator ">All</div>
                  <div className="navigator ">Deactivated</div>
                  <div className="navigator"></div>
                </div>
                <div className="d-flex gap-1 actions">
                  <button onClick={handleMultiTransfer} className="action-bar">
                    Transfer &nbsp;{" "}
                    {multiSelect.length ? `(${multiSelect.length})` : "All"}{" "}
                    &nbsp;
                  </button>
                  <button onClick={handleDeactivate} className="action-bar">
                    Deactivate &nbsp;{" "}
                    {multiSelect.length ? `(${multiSelect.length})` : "All"}{" "}
                    &nbsp;
                  </button>
                  <button onClick={()=>{setConfirmation(true)}} className="action-bar">
                    Delete &nbsp;{" "}
                    {multiSelect.length ? `(${multiSelect.length})` : "All"}{" "}
                    &nbsp;
                  </button>
                </div>
              </div>
              <div className=" table-div">
                <Table className="table table-bordered mt-3">
                  <tr className="head">
                    {columns.map((column, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="table-head p-0 m-0"
                        onClick={() => onSort(i)}
                      >
                        <p
                          className="mb-0 p-0 text-muted"
                          style={{ background: "transparent" }}
                        >
                          {column.header}
                        </p>
                        {/* <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " ▼"
                                : " ▲"
                              : ""}
                          </span> */}
                      </th>
                    ))}
                  </tr>
                  {currentTableData.length > 0 &&
                    currentTableData.map((row, i) => (
                      <tr key={i} className="body">
                        {columns.map((cell, index) => {
                          if (cell.accessor.indexOf("image") > -1) {
                            return (
                              <th key={index} className="table-body">
                                <td className="table-button">
                                  <img src={row[cell.accessor]} />
                                </td>
                              </th>
                            );
                          }

                          if (cell.accessor == "select") {
                            return (
                              <td className="table-body">
                                <td className="table-button">
                                  <input
                                    type="checkbox"
                                    className=" cursor-pointer focus:outline-none focus:ring-0 "
                                    onChange={() => multiSelectHandle(row._id)}
                                    checked={multiSelect.includes(row._id)}
                                  />
                                </td>
                              </td>
                            );
                          }
                          if (cell.accessor == "createdAt") {
                            return (
                              <td className="table-body">
                                <td className="table-button">
                                  {new Date(row.createdAt).toLocaleDateString()}
                                </td>
                              </td>
                            );
                          }
                          if (cell.accessor == "email") {
                            return (
                              <td className="table-body">
                                <td className="email table-button">
                                  {row.email}
                                </td>
                              </td>
                            );
                          }
                          if (cell.accessor == "admissionNumber") {
                            return (
                              <td className="table-body">
                                <td className="id table-button">
                                  <p className="mb-0">{row.admissionNumber}</p>
                                </td>
                              </td>
                            );
                          }
                          if (cell.accessor == "") {
                            return (
                              <td key={index} className="table-body">
                                <td className="table-button">
                                  <Link
                                    to={`${PATH_DASHBOARD.admin.studentInfo}/${row._id}`}
                                  >
                                    <button className="view-button">
                                      view
                                    </button>
                                  </Link>
                                </td>
                                <td className="table-button">
                                  <Link
                                    to={`${PATH_DASHBOARD.admin.editStudent}/${row._id}`}
                                  >
                                    <button className="update-button">
                                      edit
                                    </button>
                                  </Link>
                                </td>
                                <td className="table-button">
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
                                <td className="table-button">
                                  {cell.mappings[row[cell.accessor]]}
                                </td>
                              </td>
                            );
                          }
                          return (
                            <td key={index} className="table-body">
                              <td className="table-button others">
                                {row[cell.accessor]}
                              </td>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                </Table>
              </div>
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
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <div className="pt-5 h-100">
                <p className="text-muted">No student to display...</p>
                <button onClick={() => setCSVOpen(true)} className="csv-button">
                  Import CSV file
                </button>
              </div>
            </div>
          )}
        </div>
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
        {
          confirmation ? (
            <div className="overlay-wrapper d-flex ">
              <div
                className={`d-flex flex-column p-3 overlay-options ${
                  confirmation ? "open" : "close"
                }`}
              >
                <p>Are you sure you want to delete {multiSelect.length} {multiSelect.length > 1 ? "students'" : "student's"} profile?</p>
                <div className=" buttons d-flex gap-3">
                  <button
                    className="left"
                    onClick={() => {
                     deleteMultiple()
                     setConfirmation(false)
                    }}
                  >
                    yes
                  </button>
                  <button
                    className="right"
                    onClick={() => {
                      setConfirmation(false);
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
      background-color: #f5f5f5;
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
  .content-wrapper {
    background-color: white;
    border-radius: 15px;
  }
  .search-p {
    font-weight: 500;
  }
  .search-button {
    border: none;
    background: #f3f3f3;
    padding: 5px;
    border-radius: 10px;
    .icon {
      color: black !important;
      font-size: 30px !important;
    }
  }
  .table-div {
    overflow-x: auto !important;
    background-color: white !important;
  }
  .head {
    background-color: #f1f1f1 !important;
    height: auto !important;
  }
  .table-head {
    color: grey !important;
    font-size: 14px;
    padding: 10px !important;
    text-transform: capitalize;
    text-align: start;
    padding: 5px !important;
    p {
      display: flex;
      justify-content: center !important;
    }
  }
  .bars {
    @media screen and (max-width: 567px) {
      flex-direction: column !important;
      .actions {
        margin-top: 15px;
      }
    }
  }
  .body {
    padding: 0 !important;
    border: 1px solid #f1f1f1;
  }
  .table-body {
    font-size: 13px;
    border: 1px solid #f1f1f1;
    text-align: center;
    padding: 5px !important;
  }

  .email {
    overflow: hidden;
    max-width: 120px;
    text-overflow: ellipsis !important;
  }
  .id {
    font-weight: 600 !important;
    display: flex !important;
    justify-content: center !important;
  }
  .div {
    background-color: white !important;
    overflow-x: hidden !important;
    .navigator {
      padding: 3px 10px;
      font-size: 13px;
      font-weight: 600;
      color: grey;
      border-bottom: 2px solid white;

      cursor: pointer;

      &:first-child {
        border-bottom: 2px solid blue;
        color: blue;
      }
    }
    .action-bar {
      border: 1px solid grey;
      border-radius: 20px;
      padding: 3px 10px;
      font-size: 13px;
      font-weight: 600;
      color: grey;
      text-transform: capitalize;
      background-color: white;
      cursor: pointer;
      height: fit-content !important;
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
  }
  .search-div {
    @media screen and (max-width: 690px) {
      flex-direction: column !important;
    }
  }
  .search-field {
    input {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid grey;
      @media screen and (max-width: 519px) {
        width: 130px !important;
      }
      &::placeholder {
        color: grey !important;
      }
    }
  }
  .reset-button {
    background-color: #f3f3f3;
    color: black;
    border: 1px solid #f5f5f5;
    padding: 5px 10px;
    font-weight: 600;
    height: fit-content !important;
    border-radius: 10px;
  }
  @media screen and (max-width: 1100px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  span {
    background-color: transparent !important;
  }
  .table-button {
    border: 0 !important;
  }
  .others {
    display: flex;
    justify-content: center;
  }
`;
