import React, { useEffect } from "react";
import styled from "styled-components";
import { getReports } from "../../redux/slices/reports";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCSV from "../../components/AddCSV";
import { CircularProgress } from "../../components/custom";
import { api, generatePdfApi } from "../../api/axios";
import Papa from "papaparse";

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
import { useAppContext } from "../../contexts/Context";

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
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [canNextPage, setCanNextPage] = useState(false);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [dataTotal, setDataTotal] = useState(0);
  const [reportData, setReportData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [multiSelect, setMultiSelect] = useState([]);
  const [data, setData] = useState([])
const {resultsData, setResultsData} = useAppContext()
  
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const [tester, setTester] = useState([]);

  async function getData(pageNum, limitNum, filter) {
    try {
      const { data } = await api.get("/reports", {
        params: { teacher: user._id },
      });
      setReportData(data.data);
      setLoading(false);
    } catch (error) {
      throw new Error("Something went wrong, try again later");
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => await getData(page, pageSize))();
  }, []);
  console.log(data);

  const { reports, isLoading } = useSelector((state) => state.reports);
  const multiSelectHandle = () => {};
  const onSort = () => {};
  const handleCsvReportUpload = async (event) => {
    Papa.parse(event.target.files[0], {
      header: false,
      skipEmptyLines: true,
      complete: function (result) {
        const headerRow = result.data[0];

        if (headerRow) {
          const columnArray = Object.values(headerRow);
          const valuesArray = result.data
            .slice(1)
            .map((row) => Object.values(row));

          setColumn(columnArray);
          setValues(valuesArray);
          setTester(result.data);
          setData(result.data.slice(2));
        }
      },
    });
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
  const handleSubmit = () => {
console.log(data)
setResultsData(data)

  };
  console.log(resultsData)

  return (
    <div>
      {loading ? <CircularProgress /> : ""}
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleCsvReportUpload}
      ></input>
            {/* <table className="">
        <thead>
          <tr>
            {columnArray.map((head, i) => (
              <th key={1}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((body, i) => (
            <tr key={i}>
              {body.map((value, i) => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
        {
        data.length > 0 ? (
      <div className="d-flex flex-row gap-2 justify-content-center mt-5">

      <button onClick={handleSubmit}>submit werey</button>
      <Link to="/result">
      <Link to="/teacher/junior-first" >show</Link>
      </Link>
      </div>

        ): (
<></>
        )
      }
    </div>
  );
}
const Wrapper = styled.div`
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
  }
`;
