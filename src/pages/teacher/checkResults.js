import { useParams } from "react-router-dom"
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
export default function CheckResults(){
    const identity = useParams()
    const dispatch = useDispatch()
  const [classTeacher, setClassTeacher] = React.useState([]);
  const [studentResult, setStudentResult] = useState("");
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
    const {
        termName,
        setTermName,
        studentClass,
        setStudentClass,
        activeSession,
        setActiveSession,
      } = useAppContext();

      const { user } = useSelector((state) => state.users || {});
      useEffect(() => {
        dispatch(fetchUser({ id: identity }));
      }, [identity, dispatch]);
console.log(user)

  //fetch current term
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
      console.log(report);
  
        // set student class
  useEffect(() => {
    setStudentClass(user.currentClass);
  }, []);

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
            }
            else if (studentClass.startsWith("FGKGC")) {
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
            }
            else if (studentClass.startsWith("FGKGC")) {
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
            }
            else if (studentClass.startsWith("FGKGC")) {
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
