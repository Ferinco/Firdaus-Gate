import React, { useEffect } from "react";
import styled from "styled-components";
import { getReports } from "../../redux/slices/reports";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCSV from "../../components/AddCSV";
import { CircularProgress } from "../../components/custom";
import { api, generatePdfApi } from "../../api/axios";
import {
  basicPerformance,
  elementaryPerformance,
  juniorPerformance,
  seniorPerformance,
} from "../../configs/resultPerformance";
import toast from "react-hot-toast";
import { PATH_DASHBOARD } from "../../routes/paths";
import { PaginationBar } from "../../components/PaginationBar";
import { Table } from "react-bootstrap";
import { getNonNullValue } from "../../utils/utils";
import { Link } from "react-router-dom";
import { ReportService } from "../../services/reportService";
import axios from "axios";
import { Icon } from "@iconify/react";

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
  // {
  //   header: "Current Class",
  //   accessor: "currentClass",
  //   isSorted: true,
  //   isSortedDesc: false,
  //   mappingExist: false,
  //   mappings: {},
  // },
  // {
  //   header: "Email",
  //   accessor: "email",
  //   isSorted: false,
  //   isSortedDesc: false,
  //   mappingExist: false,
  //   mappings: {},
  // },

  // {
  //   header: "Gender",
  //   accessor: "gender",
  //   isSorted: false,
  //   isSortedDesc: false,
  // },

  // {
  //   header: "Status",
  //   accessor: "status",
  //   isSorted: false,
  //   isSortedDesc: false,
  //   mappingExist: false,
  //   mappings: {},
  // },

  {
    header: "Action",
    accessor: "",
    device: "large",
  },
];
export default function Results() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [canNextPage, setCanNextPage] = useState(false);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [dataTotal, setDataTotal] = useState(0);
  const [reportData, setReportData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [multiSelect, setMultiSelect] = useState([]);

  async function getData(pageNum, limitNum, filter) {
    try {
      const { data } = await api.get("/reports", {
        params: { teacher: user._id },
      });
      setReportData(data.data);
    } catch (error) {
      throw new Error("Something went wrong, try again later");
    }
  }

  useEffect(() => {
    (async () => await getData(page, pageSize))();
  }, []);
  console.log(reportData);
  // useEffect(() => {
  //   dispatch(getReports({ teacher: user._id }));
  // }, [dispatch, user._id]);

  const { reports, isLoading } = useSelector((state) => state.reports);
  const multiSelectHandle = () => {};
  const onSort = () => {};
  const handleCsvReportUpload = async () => {
    if (csvData.length) {
      let result = csvData.slice(2);
      let classSection;
      setLoading(true);
      console.log(result);

      try {
        setLoading(true);

        for (const item of result) {
          let performance = null;
          if (
            ["FGNSC_001", "FGNSC_002", "FGKGC_002"].includes(user.classHandled)
          ) {
            performance = elementaryPerformance(item);
            classSection = "elementary";
          }
          if (
            [
              "FGBSC_001",
              "FGBSC_002",
              "FGBSC_003",
              "FGBSC_004",
              "FGBSC_005",
              "FGBSC_006",
            ].includes(user.classHandled)
          ) {
            performance = basicPerformance(item);
            classSection = "primary";
          }
          if (
            ["FGJSC_001", "FGJSC_002", "FGJSC_003"].includes(user.classHandled)
          ) {
            performance = juniorPerformance(item);
            classSection = "junior";
          }
          if (
            ["FGSSC_001", "FGSSC_002", "FGSSC_003"].includes(user.classHandled)
          ) {
            performance = seniorPerformance(item);
            classSection = "senior";
          }
          console.log(item);

          await api.post("/reports/create", {
            performance,
            admissionNumber: item[0],
            classSection,
            classTeacherComment: item[item.length - 2],
            principalComment: item[item.length - 1],
            timesAbsent: item[item.length - 6],
            timesPresent: item[item.length - 7],
            timesSchoolOpenedAndActivities: item[item.length - 4],
            timesPunctual: item[item.length - 5],
            schoolReopenDate: item[item.length - 3],
            numberOfStudents: item[item.length - 8],
            position: item[item.length - 9],
          });

          setCSVOpen(false);
        }
        setLoading(false);
        toast.success("Report uploaded successfully");
        getData(page);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setCSVOpen(false);
        toast.error("Error creating reports, please contact developer");
      }

      // getData(page, pageSize);
    }
  };
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

  // Download handler for report card
  async function downloadReport(
    admissionNumber,
    term,
    selectedClass,
    classSection,
    studentId
  ) {
    console.log(admissionNumber, term, selectedClass, classSection, studentId);
    try {
      setLoading(true);
      const data = await ReportService.downloadReport({
        classSection,
        selectedTerm: term,
        selectedClass,
        student: studentId,
      });

      if (data?.success) {
        await axios
          .post(
            generatePdfApi,
            { html: data.data },
            { responseType: "arraybuffer" }
          )
          .then(({ data }) => {
            const blob = new Blob([data]);
            const url = window.URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${admissionNumber}-${term}.pdf`);
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);

            toast.success("Report downloaded successfully");
          })
          .catch((error) => {
            toast.error("Error downloading report");
            console.error(error);
          });
      }

      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Network error, try again later");
      }
    }
  }
  return (
    <div>
      {isLoading ? <CircularProgress /> : ""}
      <Wrapper className="py-5 container">
        {CSVOpen && (
          <AddCSV
            onClose={() => setCSVOpen(false)}
            setData={setCsvData}
            data={csvData}
            handleSubmit={handleCsvReportUpload}
          />
        )}
        <div><h4>Results</h4></div>
        {user.classHandled === "none" ? (
          <div>
            <div>
              <h4>Reports</h4>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <div className="icon-div p-3">
                <Icon
                  icon="ph:barricade-light"
                  className="big-icon"
                  color="grey"
                />
              </div>
              <div className="texts d-flex flex-column  text-center mt-1">
                <p className="m-0 p-1">Permission Denied</p>
                <p className="m-0 p-2">
                  you have to be a class teacher to create reports
                </p>
                <Link to={PATH_DASHBOARD.teacher.index}>Dashboard</Link>
              </div>
            </div>
          </div>
        ) : (
 <>
 {
  reportData.length > 0 ? (
    <div className="table-div">
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
      {reportData.length > 0 &&
        reportData.map((row, i) => (
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
              if (cell.accessor == "admissionNumber") {
                return (
                  <td className="table-body">
                    <td className="table-button">
                      {row.student.admissionNumber}
                    </td>
                  </td>
                );
              }
              if (cell.accessor == "lastName") {
                return (
                  <td className="table-body">
                    <td className="table-button">
                      {row.student.lastName}
                    </td>
                  </td>
                );
              }
              if (cell.accessor == "firstName") {
                return (
                  <td className="table-body">
                    <td className="table-button">
                      {row.student.firstName}
                    </td>
                  </td>
                );
              }
              // if (cell.accessor == "stemail") {
              //   return (
              //     <td className="table-body">
              //       <td className="email table-button">{row.email}</td>
              //     </td>
              //   );
              // }
              if (cell.accessor == "student.admissionNumber") {
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
                      <button
                        className="view-button"
                        type="button"
                        onClick={() =>
                          downloadReport(
                            row.student.admissionNumber,
                            row.reportTerm,
                            row.reportClass,
                            row.classSection,
                            row.student._id
                          )
                        }
                      >
                        Download
                      </button>
                    </td>
                    {/* <td className="table-button">
                      <Link
                        to={`${PATH_DASHBOARD.admin.editStudent}/${row._id}`}
                      >
                        <button className="update-button">edit</button>
                      </Link>
                    </td> */}
                    <td className="table-button">
                      <button
                        onClick={() => {
                          // setOverlay(true);
                          // setDeleteId(row._id);
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
    <PaginationBar
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          currentPage={page}
          nextPage={nextPage}
          previousPage={previousPage}
          pageCount={pageCount}
          pageSize={pageSize}
          updatePageSize={updatePageSize}
          // handleSubmit={createCsvUsers}
        />
  </div>
  
  ) :
  (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
    <p className="text-muted">No reports uploaded yet</p>
    <button onClick={() => setCSVOpen(true)} className="csv-button">
      Import CSV file
    </button>
  </div> 
  )
 }
 </>
        )}
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  .icon-div {
    border: 1px dashed grey;
    border-radius: 50%;
  }
  .big-icon {
    font-size: 200px !important;
  }
  .p-1 {
    font-size: 25px;
  }
`;
