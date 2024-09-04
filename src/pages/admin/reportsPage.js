import React, { useState } from "react";
import { Row, Table } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "../../components/custom";
import { UserService } from "../../services/userService";
import { PATH_DASHBOARD } from "../../routes/paths";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { PaginationBar } from "../../components/PaginationBar";
import { getNonNullValue } from "../../utils/utils";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppContext } from "../../contexts/Context";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchUsers } from "../../redux/slices/users";
import { AllTerms } from "../../configs/AllTerms";
import { AllSessions } from "../../constants/AllSessions";
import { AllClasses } from "../../configs/allClasses";
import { useSelector } from "react-redux";

export default function Reports() {
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const [termName, setTermName] = useState("");
  const [realName, setRealName] = useState("");
  const [user, setUser] = useState("");
  const [session, setSession] = useState("");
  const [selectedClass, setClass] = useState("");
  const [searched, setSearched] = useState(false);
const {isLoading} = useSelector((state) => state.users)

  //get students
  useEffect(() => {
    FetchStudents();
  }, []);

  //current term
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        //console\.log\(.*\);?
        setRealName(res[res.length - 1]?.term);
      })
      .catch((error) => {
              });
  }, []);

  //get teacher
  useEffect(() => {
    const getClassTeacher = async () => {
      try {
        const result = await UserService.findUsers({
          role: "teacher",
          classHandled: selectedClass,
        });
        setUser(result.data.list[0]);
        setIsLoading(false);
                setResults([])
      } catch (error) {
              }
    };
    getClassTeacher();
  }, []);

  const FetchStudents = async () => {
    try {
      const results = await dispatch(
        fetchUsers({ role: "student", currentClass: selectedClass, limit: 500 })
      );
      const users = unwrapResult(results);
            setStudents(users?.data?.list);
    } catch (error) {
          }
  };

  const getResults = async () => {
    if (students) {
      try {
        FetchStudents();
        setIsLoading(true);
        const response = await axios.get(
          `https://ferrum-sever.onrender.com/api/studentsresults/${session}/${termName}/${selectedClass}`
        );
               if(response.data.results.length > 0){
         setResults(response?.data?.results[0]?.results);
       }
       else{
        setResults([]);
       }
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setIsLoading(false);
        setSearched(true);
      }
    }
  };
        return (
    <>
      <Page className="py-5">
        <div className="d-flex flex-row justify-content-between container">
          <div>
            <h4>Uploaded Results</h4>
            <p>
              Select term and session to see list of available results for{" "}
              {termName}, of any class chosen.
            </p>
          </div>
          {/* {results.length > 0 ? (
            // <button className="upload-btn">
            //   <Link
            //     className="react-router-link"
            //     to={PATH_DASHBOARD.teacher.results}
            //   >
            //     Upload More
            //   </Link>
            // </button>
          ) : (
            ""
          )} */}
        </div>
        <div className="select-wrapper d-flex flex-row flex-wrap p-3 px-4 mt-5 justify-content-start gap-3 align-items-end">
          <div className="d-flex flex-column gap-1">
            <div>
              <h6>Term</h6>
            </div>
            <select
              onChange={(e) => {
                setTermName(e.target.value);
              }}
              
            >
              <option value="" disabled selected>
                Select Term
              </option>
              {AllTerms?.map((opt, index) => (
                <option key={index} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>{" "}
          <div className="d-flex flex-column gap-1">
            <div>
              <h6>Session</h6>
            </div>
            <select
              onChange={(e) => {
                setSession(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Select Session
              </option>
              {AllSessions?.map((opt, index) => (
                <option key={index} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-column gap-1">
            <div>
              <h6>Class</h6>
            </div>
            <select
              onChange={(e) => {
                setClass(e.target.value);
              }}
              className="select-class"
            >
              <option value="" disabled selected>
                Select Class
              </option>
              {AllClasses?.map((opt, index) => (
                <option key={index} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => {
              getResults();
            }}
            className="check-btn"
          >
            check
          </button>
        </div>
        {students?.length > 0 && results?.length > 0 ? (
          <Wrapper className="d-flex flex-column py-5">
            {results?.length > 0 ? (
              <div className="table-wrapper container py-5">
                <div className="d-flex flex-row justify-content-start align-items-start text-start">
                  <h6 className="m-0">
                    List of Uploaded Resullts for {termName}, {session}.
                  </h6>
                </div>
                <div className="table-div p-0 mt-3">
                  <table className="table  p-0">
                    <thead>
                      <tr>
                        <th>Admission No.</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Surname</th>
                        <th>Gender</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => {
                        const student = students?.find(
                          (student) => student?.admissionNumber === result[0]
                        );
                        return (
                          <tr key={index}>
                            <td>{result[0]}</td>
                            <td>{student ? student?.firstName : ""}</td>
                            <td>{student ? student?.middleName : ""}</td>
                            <td>{student ? student?.lastName : ""}</td>
                            <td>{student ? student?.gender : ""}</td>
                            <td>
                              <button className="view-button">
                                <Link
                                  className="react-router-link"
                                  to={{
                                    pathname: `${PATH_DASHBOARD.admin.view}/${student?._id}/${termName}/${session}`,
                                    state: {
                                      termName: termName,
                                      activeSession: session,
                                    },
                                  }}
                                >
                                  View
                                </Link>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center d-flex flex-column mt-4">
                <p className="m-0">
                  List of Uploaded Results Will Display Here
                </p>
              </div>
            )}
          </Wrapper>
        ) : (
          <div className="text-center d-flex flex-column mt-4">
            <h4 className="m-0">No Results Found</h4>
            <p>
              Make sure the results you are looking for have been uploaded by
              the class teacher.
            </p>
          </div>
        )}
      </Page>
      {isLoading || loading ? <CircularProgress /> : ""}
    </>
  );
}
const Wrapper = styled.div`
  background-color: #f5f5f5 !important;
  .table {
    width: 100%;
    border: 1px solid grey;
    border-collapse: collapse;
  }
  .select-class {
    height: 100% !important;
  }
  .table-div {
    width: 100%;
    overflow-x: auto !important;
  }
  td,
  th {
    border: 1px solid grey;
  }
  thead {
    border-bottom: 1px solid grey !important;
  }
  th {
    font-size: 500 !important;
  }
  td {
    font-weight: 300 !important;
  }
  .table-wrapper {
    background-color: white !important;
  }
`;
const Page = styled.div`
  .select-wrapper {
    width: 100%;
    align-items: center;
    width: fit-content;
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
    h6 {
      font-weight: 500 !important;
      font-size: 17px;
      margin: 0 !important;
    }
  }

  .check-btn {
    padding: 5px 20px;
    border: 1px solid blue;
    color: white;
    background-color: blue;
    border-radius: 10px;
  }
  .d-flex {
    flex-wrap: wrap;
  }
  h4,
  p {
    margin: 0;
  }
  p {
    font-weight: 300;
  }
  .upload-btn {
    font-size: 15px;
    border: 1px solid green;
    background-color: green;
    padding: 5px 15px;
    height: fit-content;
    color: white;
  }
`;
