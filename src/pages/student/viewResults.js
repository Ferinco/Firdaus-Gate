import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { useDispatch } from "react-redux";
import { ReportService } from "../../services/reportService";
import axios from "axios";
import { useAppContext } from "../../contexts/Context";
import { OverlayLoading } from "../../components/OverlayLoading";
import juniorFirst from "../../utils/results/Junior/juniorFirst"
import juniorSecond from "../../utils/results/Junior/juniorSecond"
import JuniorSecond from "../../utils/results/Junior/juniorSecond";

export default function ViewResult() {
  const [studentResult, setStudentResult] = useState("");
  const [report, setReport] = useState([])
  const {
    termName,
    setTermName,
    studentClass,
    setStudentClass,
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
  
  useEffect(() => {
    if (termName, studentClass, activeSession) {
      getResults();
    }
  }, [termName, studentClass, activeSession]);
  const { user } = useAuth();
  useEffect(() => {
    setStudentClass(user.currentClass);
  }, []);

  const getResults = async () => {
    try {
      const response = await axios.get(
        `https://ferrum-sever.onrender.com/api/studentsresults/${activeSession}/${termName}/${studentClass}`
      );
      console.log("Response:", response.data.results);
      setStudentResult(response.data.results[0])
      const studentAdmissionNumber = "23002";
      setStudentResult(response?.data.results[0]?.results);
      console.log(studentResult)
      const results = studentResult?.find((row) => row[0] === studentAdmissionNumber);
      setReport(results)
      console.log(results)
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };
  console.log(report)
  const getResultsTemplate = (termName, studentClass) => {
    switch (termName) {
      case "FIRST TERM":
        if (studentClass.startsWith("FGJSC")){
          return <juniorFirst results={report} />;
        } else if(studentClass.startsWith("FGSSC")) {
          return null;
        }
      case "SECOND TERM":
        if (studentClass.startsWith("FGJSC")){
          return <JuniorSecond results={report} />;
        } else if(studentClass.startsWith("FGSSC")) {
          return null;
        }
      // Add more cases for other terms and classes if needed
      default:
        return null;
    }
  };
  
  
  

  

  console.log(studentClass, termName, activeSession);
  return (
    <ViewPage>
      <>
        {termName}
        {activeSession}
        {studentClass}
        {getResultsTemplate(termName, studentClass)}
      </>
    </ViewPage>
  );
}
const ViewPage = styled.div``;
