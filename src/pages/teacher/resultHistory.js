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

export default function ResultHistory() {
  const { user } = useAuth();
  const [currentTableData, setCurrentTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [canNextPage, setCanNextPage] = useState(false);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [dataTotal, setDataTotal] = useState(0);
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const { termName, setTermName, activeSession, setActiveSession } =
    useAppContext();

  useEffect(() => {
    const FetchStudents = async () => {
      try {
        const results = await dispatch(fetchUsers({ role: "student" }));
        const users = unwrapResult(results);
        setStudents(users.data.list);
      } catch (error) {
        console.log(error);
      }
    };
    FetchStudents();
  }, []);

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
    const getResults = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https:ferrum-sever.onrender.com/api/studentsresults/${activeSession}/${termName}/${user?.classHandled}`
        );
        console.log(response.data.results[0].results);
        setResults(response.data.results[0].results);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };
    if (termName !== "") {
      getResults();
      setIsLoading(false);
    }
  }, [termName]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Page className="container py-5">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h4>Uploaded Results</h4>
              <p>List of results uploaded by you for {termName}.</p>
            </div>
            <button className="upload-btn"><Link className="react-router-link" to={PATH_DASHBOARD.teacher.results}>Upload More</Link></button>
          </div>
          <Wrapper className="d-flex flex-column py-5">
            <div className="d-flex flex-row justify-content-start align-items-start text-start">
              <h6 className="m-0">List of Students</h6>
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
                  {results.map((result) => {
                    const student = students.find(
                      (student) => student.admissionNumber === result[0]
                    );
                    return (
                      <tr key={result[0]}>
                        <td>{result[0]}</td>
                        <td>{student ? student.firstName : ""}</td>
                        <td>{student ? student.middleName : ""}</td>
                        <td>{student ? student.lastName : ""}</td>
                        <td>{student ? student.gender : ""}</td>
                        <td>
                          <button className="view-button">View</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Wrapper>
        </Page>
      )}
    </>
  );
}
const Wrapper = styled.div`
  background-color: #f5f5f5 !important;
  .table {
    width: 1005px;
    border: 1px solid grey;
    border-collapse: collapse;
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
`;
const Page = styled.div`
.d-flex{
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
