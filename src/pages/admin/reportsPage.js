import { useEffect, useState } from "react";
import styled from "styled-components";
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
  {
    header: "Current Class",
    accessor: "currentClass",
    isSorted: true,
    isSortedDesc: false,
    mappingExist: false,
    mappings: {},
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

export default function Reports() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [canNextPage, setCanNextPage] = useState(false);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [dataTotal, setDataTotal] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [multiSelect, setMultiSelect] = useState([]);


  const multiSelectHandle = () => {};
  const onSort = () => {};
  async function getData() {
    try {
      const { data } = await api.get("/reports", {});
      setReportData(data.data);
      setLoading(false)
    } catch (error) {
      throw new Error("Something went wrong, try again later");
    }
  }
  useEffect(() => {
    (async () => await getData())();
  }, []);

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
    <Container>
        {loading ? <CircularProgress /> : ""}
      {reportData.length > 0 ? (
        <div className="content-wrapper p-3 mt-5">
            <div className="mt-5">
                <h4>Uploaded Reports</h4>
            </div>
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
                  </th>
                ))}
              </tr>
              {reportData.length > 0 &&
                reportData.map((row, i) => (
                  <tr key={i} className={i % 2 !== 0 ? "d-none" : "b"}>
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
                            <td className="table-button id">
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
                            <td className="table-button id">
                              {new Date(row.createdAt).toLocaleDateString()}
                            </td>
                          </td>
                        );
                      }
                      if (cell.accessor == "admissionNumber") {
                        return (
                          <td className="table-body">
                            <td className="table-button id">
                              {row.student?.admissionNumber}
                            </td>
                          </td>
                        );
                      }
                      if (cell.accessor == "lastName") {
                        return (
                          <td className="table-body">
                            <td className="table-button id">
                              {row.student?.lastName}
                            </td>
                          </td>
                        );
                      }
                      if (cell.accessor == "currentClass") {
                        return (
                          <td className="table-body">
                            <td className="id table-button">
                              <p className="mb-0">{row.student?.currentClass}</p>
                            </td>
                          </td>
                        );
                      }
                      if (cell.accessor == "status") {
                        return (
                          <td className="table-body">
                            <td className="id table-button">
                              <p className="mb-0">{row.student?.status}</p>
                            </td>
                          </td>
                        );
                      }
                      if (cell.accessor == "firstName") {
                        return (
                          <td className="table-body">
                            <td className="table-button id">
                              {row.student?.firstName}
                            </td>
                          </td>
                        );
                      }
                      if (cell.accessor == "student.admissionNumber") {
                        return (
                          <td className="table-body">
                            <td className="real-id table-button">
                              <p className="mb-0">{row.admissionNumber}</p>
                            </td>
                          </td>
                        );
                      }
                      if (cell.accessor == "") {
                        return (
                          <td key={index} className="table-body">
                            <button
                              className="view-button"
                              type="button"
                              onClick={() =>
                                downloadReport(
                                  row.student?.admissionNumber,
                                  row.reportTerm,
                                  row.reportClass,
                                  row.classSection,
                                  row.student?._id
                                )
                              }
                            >
                              Download
                            </button>
                            <button
                              onClick={() => {}}
                              className="delete-button"
                            >
                              Delete
                            </button>
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
        </div>
      ) : (
       <div className="d-flex flex-column px-3 py-5">
        <h4>(0) Results Uploaded</h4>
        <p>No reports uploaded yet, reach out to teachers to upload students' reports.</p>
       </div>
      )}
    </Container>
  );
}
const Container = styled.div`
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
  .head {
    background-color: #f1f1f1 !important;
    height: auto !important;
  }
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
  .body {
    padding: 0 !important;
    border: 1px solid #f1f1f1;
    background-color: white;
  }
  .table-body {
    font-size: 13px;
    border: 1px solid #f1f1f1;
    text-align: center;
    padding: 5px !important;
    width: fit-content !important;
  }
  .table-button {
    border: 0 !important;
    
  }

  .table-div {
    overflow-x: auto !important;
    background-color: white !important;


  }
  .content-wrapper {
    background-color: white;
    border-radius: 15px;
  }
  .real-id {
    font-weight: 600 !important;
    display: flex !important;
    justify-content: center !important;
  }
  .id {
    display: flex !important;
    justify-content: center !important;
  }
  .view-button {
  color: blue !important;
  border: 0 !important;
  background: white !important;
  font-size: 13px;
  font-weight: 600;

}`;
