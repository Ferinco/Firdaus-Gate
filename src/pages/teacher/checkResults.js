import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "../../contexts/Context";
import JuniorFirst from "../../utils/results/Junior/juniorFirst";
import SeniorFirst from "../../utils/results/Senior/seniorFirst";
import NurseryFirst from "../../utils/results/Nursery/nurseryFirst";
import { KgResult } from "../../utils/results/KG/kgResult";
import JuniorSecond from "../../utils/results/Junior/juniorSecond";
import SeniorSecond from "../../utils/results/Senior/seniorSecond";
import JuniorThird from "../../utils/results/Junior/juniorThird";
import SeniorThird from "../../utils/results/Senior/seniorThird";
import React, { useEffect, useState } from "react";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { fetchUser } from "../../redux/slices/users";
import axios from "axios";
import { CircularProgress } from "../../components/custom";
import { UserService } from "../../services/userService";
import { GetStudentClass } from "../../components/custom/teacherClass";
export default function CheckResults() {
  const { identity } = useParams();
  const [classTeacher, setClassTeacher] = React.useState([]);
  const [studentResult, setStudentResult] = useState("");
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const { termName, setTermName, activeSession, setActiveSession } =
    useAppContext();


  const { user, isLoading } = useSelector((state) => state.users || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
  }, [dispatch, identity]);

  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        const latestTerm = res[res.length - 1];
        setTermName(latestTerm?.term);
        setActiveSession(latestTerm?.session);
      });
  }, []);

  useEffect(() => {
    const getClassTeacher = async () => {
      try {
        const result = await UserService.findUsers({
          role: "teacher",
          classHandled: user.currentClass,
        });
        setClassTeacher(result.data.list[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getClassTeacher();
  }, [user]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await axios.get(
          `https:ferrum-sever.onrender.com/api/studentsresults/${activeSession}/${termName}/${user?.currentClass}`
        );
        setStudentResult(response.data.results[0]);
        const studentAdmissionNumber = user?.admissionNumber;
        const results = response?.data.results[0]?.results?.find(
          (row) => row[0] === studentAdmissionNumber
        );
        setReport(results);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };
    if (isLoading) {
      setLoading(true);
    }
    else{
      getResults()
      setLoading(false)
    }
  }, [isLoading]);
  //get result template
  const getResultsTemplate = (termName, user) => {
    switch (termName) {
      case "FIRST TERM":
        if (user?.currentClass.startsWith("FGJSC")) {
          return (
            <JuniorFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGSSC")) {
          return (
            <SeniorFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        } else if (user?.currentClass.startsWith("FGKGC")) {
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
        if (user?.currentClass.startsWith("FGJSC")) {
          return (
            <JuniorSecond
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGSSC")) {
          return (
            <SeniorSecond
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        } else if (user?.currentClass.startsWith("FGKGC")) {
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
        if (user?.currentClass.startsWith("FGJSC")) {
          return (
            <JuniorThird
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGSSC")) {
          return (
            <SeniorThird
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={activeSession}
              teacher={classTeacher}
              term={termName}
            />
          );
        } else if (user?.currentClass.startsWith("FGKGC")) {
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

  return (
    <ViewPage className="">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {report ? (
            <>
              <div className="d-flex flex-column text-start align-items-start px-4 pt-3">
                <p className="m-0">
                  This is {user?.firstName}'s {termName} result. If you are on
                  phone, switch to desktop mode for proper view. To download,
                  click on the download button below
                </p>
              </div>
              {getResultsTemplate(termName, user)}
            </>
          ) : (
            <div className="d-flex flex-column text-center align-items-center px-4 pt-3 justify-content-center m-auto">
              <h4 className="m-0">No results found.</h4>
              <p className="m-0">
                This student does not have a result for {termName}, session:{" "}
                {activeSession}, class: {user?.currentClass}.
              </p>
            </div>
          )}
        </>
      )}
    </ViewPage>
  );
}
const ViewPage = styled.div``;
