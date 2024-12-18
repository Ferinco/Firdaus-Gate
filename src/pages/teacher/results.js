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
  const [waiting, setWaiting] = useState(false);
  const [reportData, setReportData] = useState([]);
  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const [tester, setTester] = useState([]);
  const {
    termName,
    setTermName,
    teacherClass,
    setTeacherClass,
    activeSession,
    setActiveSession,
  } = useAppContext();
  const [file, setFile] = React.useState("");
  const allowedExtension = ["csv"];

  useEffect(() => {
    setTeacherClass(user.classHandled);
  }, []);
  console.log(data);

  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        setTermName(res[res.length - 1]?.term);
        setActiveSession(res[res.length - 1].session);
        setLoading(false);
      });
  }, []);

  //to upload students results
  const handleCsvReportUpload = async (event) => {
    const incomingFile = event.target.files[0];
    const fileExtension = incomingFile.name.split('.').pop();
  
    setFile(incomingFile);
  
    if (!allowedExtension.includes(fileExtension)) {
      toast.error("Please upload a CSV file");
    } else {
      Papa.parse(incomingFile, {
        header: false,
        skipEmptyLines: true,
        complete: function (result) {
          const headerRow = result.data[0];
  
          if (headerRow) {
            const columnArray = Object.values(headerRow);
            let valuesArray = result.data.slice(1).map((row) => 
              Object.values(row)
            );
  
            // Remove rows where the first cell is empty
            valuesArray = valuesArray.filter(row => row[0] !== '');
  
            setColumn(columnArray);
            setValues(valuesArray);
            setTester(result.data);
            setData(valuesArray.slice(1)); // Adjusted to slice the first element
          }
        }
      });
    }
  };
  
  

  //handle reports submission
  const handleSubmit = async () => {
    setWaiting(true)
    try {
      const response = await axios.post(
        `https://ferrum-sever.onrender.com/api/saveResults`,
        {
          results: values,
          // selectedClass: user?.classHandled,
          selectedClass: "FGBSC_005",
          term: termName,
          currentSession: activeSession,
        }
      );
      setWaiting(false)
      toast.success("Results upload was successful.")
     setFile("")
      console.log(response);
    } catch (error) {
      console.log(error);
      setWaiting(false)
      toast.error("Unable to upload results.")

    }
  };
  // console.log(values.slice(1));
  return (
    <Page>
      <div className="d-flex flex-column align-items-center text-center px-3 py-5">
        <h4 className="m-0">Upload Results</h4>
        <p>Upload students reports for {termName}</p>
        <Link to="uploaded-results">View Result History</Link>
      </div>
      {user.classHandled === "none" ? (
        <div>
          <div></div>
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
        <Wrapper className="d-flex flex-column justify-content-center align-items-center p-4">
            <div className="d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap">
              <p className="m-0 intro">
                Make sure you use the right template for {teacherClass}{" "}
              </p>
            </div>

          <div className="upload-area position-relative d-flex flex-column justify-content-center align-items-center gap-2 px-3 mt-5">
            <Icon className="icon" icon="fa6-solid:cloud-arrow-up" />
            {file ? (
              ""
            ) : (
              <>
                <p className="text-muted">
                  {" "}
                  Drag file here or browse for file.
                </p>
                <input
                  type="file"
                  name="file"
                  accept=".csv"
                  onChange={handleCsvReportUpload}
                  placeholder="Browse File"
                  style={{
                    cursor: "pointer",
                    left: 0,
                    right: 0,
                    width: "fit-content",
                  }}
                />
              </>
            )}
            <p>{file.name}</p>
            {file ? <button className="submit d-flex justify-content-center align-items-center" onClick={handleSubmit} disabled={waiting ? true : false}>
            {waiting ? (
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      "Upload Results"
                    )}
            </button> : ""}
          </div>
        </Wrapper>
      )}
    </Page>
  );
}
const Page = styled.div``;
const Wrapper = styled.div`
.spinner-border{
  height: 25px !important;
  width: 25px !important;
}
  input {
    width: 220px !important;
    cursor: pointer;
  }
  .submit{
    padding: 5px 30px;
    border: 1px solid blue;
    border-radius: 15px;
    font-size: 15px;
    color: blue;
    background: transparent;
    width: 174px !important;
    height: 34.5px !important;
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
  height: 100%;
  margin: auto !important;
  width: 100%;
  border-radius: 20px;
  background-color: white;
  .upload-area {
    min-height: 270px;
    min-width: 250px;
    border: 1px dashed grey;
    border-radius: 50%;
  }
  .icon {
    font-size: 60px !important;
  }
  .intro {
    font-size: 15px;
    font-weight: 400;
  }
  .download-btn {
    padding: 10px;
    border-radius: 5px;
    color: white;
    background-color: grey;
    border: 1px solid grey;
  }
`;
