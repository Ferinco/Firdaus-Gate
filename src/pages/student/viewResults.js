import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { useDispatch } from "react-redux";
import { ReportService } from "../../services/reportService";
import axios from "axios";
import { useAppContext } from "../../contexts/Context";
import { OverlayLoading } from "../../components/OverlayLoading";
import JuniorFirst from "../../utils/results/Junior/juniorFirst";
import JuniorSecond from "../../utils/results/Junior/juniorSecond";
import { UserService } from "../../services/userService";
import SeniorFirst from "../../utils/results/Senior/seniorFirst";
import SeniorSecond from "../../utils/results/Senior/seniorSecond";
import NurseryFirst from "../../utils/results/Nursery/nurseryFirst";

import JuniorThird from "../../utils/results/Junior/juniorThird";
import SeniorThird from "../../utils/results/Senior/seniorThird";
import { KgResult } from "../../utils/results/KG/kgResult";
import BasicFirst from "../../utils/results/Basic/basicFirst";
import BasicSecond from "../../utils/results/Basic/BasicSecond";
import BasicThird from "../../utils/results/Basic/basicThird";

export default function ViewResult() {
  const [studentResult, setStudentResult] = useState("");
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [classTeacher, setClassTeacher] = React.useState([]);

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

  //to get class teacher
  const getClassTeacher = async () => {
    try {
      const result = await UserService.findUsers({
        role: "teacher",
        classHandled: user.currentClass,
      });
      setClassTeacher(result.data.list[0]);
      setLoading(false);
      console.log(result.data.list[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getClassTeacher();
  }, []);
  console.log(classTeacher);

  //fetch results from database
  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await axios.get(
          `https://ferrum-sever.onrender.com/api/studentsresults/${activeSession}/${termName}/${user.currentClass}`
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
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    if (termName !== "") {
      getResults();
      setLoading(false);
    }
  }, [termName]);
  const { user } = useAuth();

  // set student class
  useEffect(() => {
    setStudentClass(user.currentClass);
  }, []);

  console.log(report);

  //get result template
  const getResultsTemplate = (termName, studentClass) => {
    switch (termName) {
      case "FIRST TERM":
        if (studentClass.startsWith("FGJSC")) {
          return (
            <JuniorFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGSSC")) {
          return (
            <SeniorFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGBSC")) {
          return (
            <BasicFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        } else if (studentClass.startsWith("FGKGC")) {
          return (
            <KgResult
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        }
      case "SECOND TERM":
        if (studentClass.startsWith("FGJSC")) {
          return (
            <JuniorSecond
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGSSC")) {
          return (
            <SeniorSecond
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGBSC")) {
          return (
            <BasicSecond
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        } else if (studentClass.startsWith("FGKGC")) {
          return (
            <KgResult
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        }
      case "THIRD TERM":
        if (studentClass.startsWith("FGJSC")) {
          return (
            <JuniorThird
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGSSC")) {
          return (
            <SeniorThird
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGBSC")) {
          return (
            <BasicThird
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (studentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        } else if (studentClass.startsWith("FGKGC")) {
          return (
            <KgResult
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        }
      default:
        return null;
    }
  };

  console.log(studentClass, termName, activeSession);
  return (
    <ViewPage className="">
      {loading ? (
        <OverlayLoading />
      ) : (
        <>
          <div className="d-flex flex-column text-start align-items-start px-5 pt-3">
            <p className="m-0">
              This is your {termName} result, switch to desktop mode for proper
              view. To download, click on the download button below
            </p>
          </div>
          {getResultsTemplate(termName, studentClass)}
        </>
      )}
    </ViewPage>
  );
}
const ViewPage = styled.div``;
