import { useLocation, useParams } from "react-router-dom";
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
import { OverlayLoading } from "../../components/OverlayLoading";
export default function CheckResults() {
  const { identity } = useParams();
  const { term } = useParams();
  const { session } = useParams();
  const dispatch = useDispatch();
  const [classTeacher, setClassTeacher] = React.useState([]);
  const [studentResult, setStudentResult] = useState("");
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const { studentClass, setStudentClass } = useAppContext();
  const { user, isLoading } = useSelector((state) => state.users || {});
  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
  }, [identity, dispatch]);

  //fetch current term
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        console.log(res);
        const latestTerm = res[res.length - 1];
        // setterm(latestTerm?.term);
        // setsession(latestTerm?.session);
      });
  }, []);

  //to get class teacher
  const getClassTeacher = async () => {
    try {
      const result = await UserService.findUsers({
        role: "teacher",
        classHandled: user?.currentClass,
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
          `https://ferrum-sever.onrender.com/api/studentsresults/${session}/${term}/${user?.currentClass}`
        );
        setWaiting(true);
        console.log("Response:", response.data.results);
        const studentAdmissionNumber = user?.admissionNumber;
        const results = response?.data.results[0]?.results?.find(
          (row) => row[0] === studentAdmissionNumber
        );
        setReport(results);
        console.log(results);
        setWaiting(false);
      } catch (error) {
        // setReport([]);
        setWaiting(false);
        console.error("Error fetching results:", error);
      }
    };


      getResults();
      setLoading(false);
    
  }, [term, user, term]);
  console.log(user);

  // set student class
  useEffect(() => {
    setStudentClass(user?.currentClass);
  }, []);

  //get result template
  const getResultsTemplate = (term, user) => {
    switch (term) {
      case "FIRST TERM":
        if (user?.currentClass.startsWith("FGJSC")) {
          return (
            <JuniorFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGSSC")) {
          return (
            <SeniorFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        } else if (user?.currentClass.startsWith("FGKGC")) {
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
        if (user?.currentClass.startsWith("FGJSC")) {
          return (
            <JuniorSecond
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGSSC")) {
          return (
            <SeniorSecond
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        } else if (user?.currentClass.startsWith("FGKGC")) {
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
        if (user?.currentClass.startsWith("FGJSC")) {
          return (
            <JuniorThird
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGSSC")) {
          return (
            <SeniorThird
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
            />
          );
        } else if (user?.currentClass.startsWith("FGNSC")) {
          return (
            <NurseryFirst
              results={report}
              owner={user}
              session={session}
              teacher={classTeacher}
              term={term}
            />
          );
        } else if (user?.currentClass.startsWith("FGKGC")) {
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

  console.log(term, session);
  return (
    <ViewPage className="">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <div className="d-flex flex-column text-start align-items-start px-5 pt-3">
            <p className="m-0">
              This is your {user?.firstName}'s result for {term}, session:{" "}
              {session}... kindly switch to desktop mode for proper view. To
              download, click on the download button below.
            </p>
          </div>
          {waiting ? <p>...loading</p> : getResultsTemplate(term, user)}
        </>
      )}
    </ViewPage>
  );
}
const ViewPage = styled.div``;
