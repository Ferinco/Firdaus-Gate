import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import { CLASS } from "../../constants/class";
import { ReportService } from "../../services/reportService";
import { toast } from "react-hot-toast";
import { OverlayLoading } from "../../components/OverlayLoading";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../redux/slices/reports";
import { useTerm } from "../../hooks/useTerm";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { generatePdfApi } from "../../api/axios";
import axios from "axios";
import { useAppContext } from "../../contexts/Context";
import { AllClasses } from "../../configs/allClasses";
import { AllSessions } from "../../constants/AllSessions";
import { AllTerms } from "../../configs/AllTerms";
import { UserService } from "../../services/userService";
import { CircularProgress } from "../../components/custom";

export default function ResultsPage() {
  const { user } = useAuth();
  const {
    studentClass,
    setStudentClass,
    termName,
    setTermName,
    activeSession,
    setActiveSession,
  } = useAppContext();

  //fetch current term
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        console.log(res);
        const latestTerm = res[res.length - 1];
        setTermName(latestTerm?.term);
        setActiveSession(latestTerm?.session);
      });
  }, []);

  const [selectedClass, setSelectedClass] = React.useState(studentClass);
  const [selectedSession, setSelectedSession] = React.useState(activeSession);
  const [selectedTerm, setSelectedTerm] = React.useState(termName);
  const [classTeacher, setClassTeacher] = React.useState([]);
  const [studentResult, setStudentResult] = useState("");
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [after, setAfter] = useState(false);




  // set student class
  useEffect(() => {
    setStudentClass(user.currentClass);
  }, []);
  console.log(user.currentClass);
  //to get class teacher
  const getClassTeacher = async () => {
    try {
      const result = await UserService.findUsers({
        role: "teacher",
        classHandled: user.currentClass,
      });
      setClassTeacher(result.data.list[0]);
      console.log(result.data.list[0]);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  //fetch current term
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        console.log(res);
        const latestTerm = res[res.length - 1];
        setTermName(latestTerm?.term);
        setActiveSession(latestTerm?.session);
        setLoading(false)
      });
  }, []);

  React.useEffect(() => {
    getClassTeacher();
  }, []);
  console.log(classTeacher);

  //fetch results from database
  useEffect(() => {
    if (termName !== "") {
      getResults();
    }
  }, [termName]);

  const getResults = async () => {
    setChecking(true)
    try {
      const response = await axios.get(
        `https://ferrum-sever.onrender.com/api/studentsresults/${selectedSession}/${selectedTerm}/${selectedClass}`
      );
      console.log("Response:", response.data.results);
      setStudentResult(response.data.results[0]);
      const studentAdmissionNumber = user?.admissionNumber;
      setStudentResult(response?.data.results[0]?.results);
      console.log(studentResult);
      const results = response?.data.results[0]?.results?.find(
        (row) => row[0] === studentAdmissionNumber
      );
      setReport(results);
      console.log(results);
      setChecking(false)
      setAfter(true)
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  function changedClass(e) {
    setSelectedClass(e.target.value);
    toast.success(`class has been changed to ${e.target.value}`);
  }

  function changedSession(e) {
    setSelectedSession(e.target.value);
    toast.success(`session has been changed to ${e.target.value}`);
  }

  function changedTerm(e) {
    setSelectedTerm(e.target.value);
    toast.success(`term has been changed to ${e.target.value}`);
  }
  const getClass = (selectedClass) => {
    switch (selectedClass) {
      case "FGJSC_001":
        return ("JSS 1");
      case "FGJSC_002":
        return ("JSS 2");
      case "FGJSC_003":
        return ("JSS 3");
      case "FGSSC_001":
        return ("SSS 1");
      case "FGSSC_002":
        return ("SSS 2");
      case "FGSSC_003":
        return ("SSS 3");
      case "FGBSC_001":
        return ("Basic 1");
      case "FGBSC_002":
        return ("Basic 2");
      case "FGBSC_003":
        return ("Basic 3");
      case "FGBSC_004":
        return ("Basic 4");
      case "FGBSC_005":
        return ("Basic 5");
      case "FGKGC_001":
        return ("K.G 1");
      case "FGKGC_003":
        return ("K.G 2");
      case "FGNSC_001":
        return ("Nursery 1");
      case "FGNSC_002":
        return ("Nursery 2");
      default:
        return ("None");
    }
  }

  return (
    <>
      {loading && <CircularProgress />}
    <Wrapper className="p-5">
      <div className="">
        <h4>Reports</h4>
        <p>View your current and past results here by selecting the term, class and session of the results you wish to check for.</p>
        <div className="select-wrapper d-flex flex-row p-3 justify-content-between center container px-4 mt-5">
          <div className="d-flex flex-column gap-1">
            <div><h6>select Class</h6></div>
            {/* selection of class */}
            <select onChange={changedClass}>
              {AllClasses?.map((opt, index) => (
                <option key={index} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>{" "}
          <div className="d-flex flex-column gap-1">
          <div><h6>select Session</h6></div>
            {/* selection of session */}
            <select onChange={changedSession}>
              {AllSessions?.map((opt, index) => (
                <option key={index} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-column gap-1">
          <div><h6>select Term</h6></div>
            {/* selection of TERM */}
            <select onChange={changedTerm}>
              {AllTerms?.map((opt, index) => (
                <option key={index} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="tabs-wrapper py-5 mt-5 d-flex flex-row justify-content-between align-items-center px-3">
        <button
          onClick={() => {
            getResults();
          }}
          className="check-btn"
        >
          Check Result
        </button>
        {checking ? (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
        {
          after?  
          <>
          {
            report ? (
              <p>Result for {selectedTerm}, {selectedClass} of {selectedSession} is <span className="good-span">available.</span> </p>
            ): 
            <p>Result for {selectedTerm}, {selectedClass} of {selectedSession} is <span className="bad-span">not available.</span> </p>
  
          }
          </>   : ""
        }
     
      </div>
     <div className="mt-3 py-5 px-3">
     {
        report ? (
          <button className="view-btn w-100">View Result</button>
        ) :
        ("")
      }
     </div>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: #f1f1f1 !important;
  height: fit-content !important;
  .tabs-wrapper {
    background-color: white;
    border-radius: 30px;
  }
  .view-btn{
    border: 1px solid #5ca95c;
    color: white;
    border-radius: 20px;
    padding: 10px 15px;
    background-color: #5ca95c;
    font-weight: 600;
  }
  .check-btn{
    border: 1px solid grey;
    color: white;
    border-radius: 20px;
    padding: 10px 15px;
    background-color: grey;
    font-weight: 300;
  }
  .good-span{
    color: green;
    background-color: #d3d9d3;
    padding: 5px;
    border-radius: 10px;
  }
  .bad-span{
    color: red;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
  }

  .select-wrapper {
    width: 100%;
    background-color: white;
    align-items: center;
    border-radius: 30px;
    span {
      align-items: flex-end;
      justify-content: right;
      color: grey;
    }
    select {
      width: 200px !important;
      padding: 10px;
      border: 1px solid grey;
      color: grey;
      border-radius: 10px;
      background: transparent;
    }
  }
  .tabs {
    gap: 30px;
    margin-left: 3px !important;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .tab {
      border-radius: 30px;
      cursor: pointer;
      height: 200px;
      width: 250px;
      overflow: hidden;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      align-items: center !important;
      padding: 15px;
      text-decoration: none !important;
      transition: 0.4s all cubic-bezier(0.215, 0.61, 0.355, 1);
      .tab-right {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 20px;
      }
      .tab-left {
        margin-right: -30% !important;
      }
      .icon-div {
        padding: 10px;
        background-color: white;
        border-radius: 30px;
        width: 50px;
      }
      .icon {
        font-size: 30px;
      }
      &:first-child {
        background-color: #9ea0e7;
        color: white;
        .big-icon {
          font-size: 150px !important;
          color: #d2d3e9;
        }
        .icon {
          color: #9ea0e7;
        }
      }
      &:hover {
        transform: scale(1.05);
      }
      &:nth-child(2) {
        background-color: #65655d;
        color: white;

        .big-icon {
          font-size: 150px !important;
          color: grey;
        }
        .icon {
          color: #65655d;
        }
      }
      &:last-child {
        background-color: #9ea0e7;
        color: white;
        .big-icon {
          font-size: 150px !important;
          color: #d2d3e9;
        }
        .icon {
          color: #9ea0e7;
        }
      }
    }
  }
  @media (max-width: 600px) {
    padding: 24px !important;
  }
`;
