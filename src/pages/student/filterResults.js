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
import { useLocation } from "react-router-dom";

export default function Filter() {
  const [studentResult, setStudentResult] = useState("");
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [classTeacher, setClassTeacher] = React.useState([]);
  const location = useLocation();
  const { clas } = location.state;
  const { session } = location.state;
  const { term } = location.state;


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
          `https://ferrum-sever.onrender.com/api/studentsresults/${session}/${term}/${clas}`
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

    if (term !== "") {
      getResults();
      setLoading(false);
    }
  }, [term]);
  const { user } = useAuth();

  // set student class


  console.log(report);

  //get result template
  const getResultsTemplate = (term, clas) => {
    switch (term) {
      case "FIRST TERM":
        if (clas.startsWith("FGJSC")) {
          return (
            <JuniorFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (clas.startsWith("FGSSC")) {
          return (
            <SeniorFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (clas.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        }
        else if (clas.startsWith("FGKGC")) {
          return (
            <KgResult
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        }
      case "SECOND TERM":
        if (clas.startsWith("FGJSC")) {
          return (
            <JuniorSecond
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (clas.startsWith("FGSSC")) {
          return (
            <SeniorSecond
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (clas.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        }
        else if (clas.startsWith("FGKGC")) {
          return (
            <KgResult
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        }
      case "THIRD TERM":
        if (clas.startsWith("FGJSC")) {
          return (
            <JuniorThird
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (clas.startsWith("FGSSC")) {
          return (
            <SeniorThird
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (clas.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        }
        else if (clas.startsWith("FGKGC")) {
          return (
            <KgResult
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        }
      default:
        return null;
    }
  };

  console.log(clas, term, session);
  return (
    <ViewPage className="">
      {loading ? (
        <OverlayLoading />
      ) : (
        <>
          <div className="d-flex flex-column text-start align-items-start px-5 pt-3">
            <p className="m-0">
              This is your {term} result, switch to desktop mode for proper
              view. To download, click on the download button below
            </p>
          </div>
          {getResultsTemplate(term, clas)}
        </>
      )}
    </ViewPage>
  );
}
const ViewPage = styled.div``;
