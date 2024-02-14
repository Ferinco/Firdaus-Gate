import React, { useEffect } from "react";
import styled from "styled-components";
import { getReports } from "../../redux/slices/reports";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCSV from "../../components/AddCSV";
import { Button, CircularProgress } from "../../components/custom";
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
  const [file, setFile] = React.useState("");





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
    const incomingFile = event.target.files[0];
    setFile(incomingFile);
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
    <Page>
<div className="d-flex justify-content-between align-items-center text-center px-3 py-5">
  <p>Upload students reports for {termName}</p>
  <Link to="uploaded-results">View Result History</Link>
</div>
    <Wrapper className="d-flex flex-column justify-content-between p-4">
      <div>
        <div className="d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap">
          <p className="m-0 intro">Don't have the template? Click Here* </p>
          <button className="download-btn">Download Template</button>
        </div>
        <div>
        </div>
      </div>
      <div className="upload-area position-relative d-flex flex-column justify-content-center align-items-center gap-2">
        <input
     type="file"
     name="file"
     accept=".csv"
     onChange={handleCsvReportUpload}
     
          style={{ cursor: "pointer", left: 0, right: 0 }}
        />
        <Icon className="icon" icon="fa6-solid:cloud-arrow-up" />
        <p className="text-muted"> Drag file here or browse for file.</p>
        <small>{file.name}</small>
        <Button blue onClick={handleSubmit}>Submit</Button>
      </div>
    </Wrapper>
    </Page>
  );
}
const Page = styled.div`
`
const Wrapper = styled.div`
  height: 100%;
  margin: auto !important;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: fit-content;
  border-radius: 20px;
  border: 1px solid grey;
  .upload-area {
    height: 270px;
  }
  .icon {
    font-size: 60px !important;
  }
  .intro {
    font-size: 20px;
  }
  .download-btn {
    padding: 10px;
    border-radius: 5px;
    color: white;
    background-color: grey;
    border: 1px solid grey;
  }
`;

