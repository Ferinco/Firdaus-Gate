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
import { fetchCurrentTerm } from "../../redux/slices/term";
import { setSession } from "../../utils/jwt";

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
  const [reportData, setReportData] = useState([]);
  const [data, setData] = useState([])  
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const [tester, setTester] = useState([]);
  const {termName, setTermName, teacherClass, setTeacherClass, activeSession, setActiveSession} = useAppContext()




  // async function getData(pageNum, limitNum, filter) {
  //   try {
  //     const { data } = await api.get("/reports", {
  //       params: { teacher: user._id },
  //     });
  //     setReportData(data.data);
  //     setLoading(false);
  //   } catch (error) {
  //     throw new Error("Something went wrong, try again later");
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    setTeacherClass(user.classHandled)
  }, []);
  console.log(data);

  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        setTermName(res[res.length-1]?.term);
        setActiveSession(res[res.length-1].session)
        setLoading(false)
      });
    
  }, []);

  //to upload students results
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

//handle reports submission
console.log(termName, activeSession, teacherClass)
const handleSubmit = async() => {
  try{
    const response = await axios.post(`https://ferrum-sever.onrender.com/api/saveResults`, { results: data, selectedClass: "FGJSC_002", term: "SECOND TERM", currentSession: "2023" })
    console.log(response)
  }
  catch(error){
    console.log(error)
  }
};
console.log(data)
  return (
    <div>
      {loading ? <CircularProgress /> : ""}
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleCsvReportUpload}
      ></input>
        {
        data.length > 0 ? (
      <div className="d-flex flex-row gap-2 justify-content-center mt-5">

      <button onClick={handleSubmit}>submit werey</button>
      <Link to="/result">
      <Link to="/teacher/junior-first" >show</Link>
      <Link to="/teacher/senior-first" >sss</Link>
      <Link to="/teacher/basic-first" >basic</Link>


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
