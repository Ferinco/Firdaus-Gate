import { useState, useEffect } from "react";
import React from "react";
import { UserService } from "../../../services/userService";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function StudentsList() {
  const [StudentData, setStudentData] = useState([]);
  useEffect(() => {
    const FetchStudents = async () => {
      await UserService.getStudents()
        .then((res) => {
          console.log(res);
          console.log("hey there");

          setStudentData([res.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    FetchStudents()
  }, []);

  return (
    <Wrapper className="d-flex flex-column p-5">
      <div className="header pb-3">
        <h4>
          List of Students
        </h4>
        <p>
        view and edit student(S) details here...
        </p>
      </div>
      <Table className="table table-bordered">
        <thead className="">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admission Number</th>
            <th>email</th>
            <th>gender</th>
            <th colSpan="3">Operations</th>
          </tr>
        </thead>
        <tbody>
          {StudentData ? (
            StudentData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.admissionNumber}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>

                <td>
                  <Link to="">
                    <button>update</button>
                  </Link>
                </td>
                <td>
                  <Link to="">
                    <button>transfer</button>
                  </Link>
                </td>
                <td>
                  <Link to="">
                    <button>delete</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <div>
              <h2>No Students....</h2>
            </div>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
      .table {
        button {
          color: black;
          border: 1px solid black;

          padding: 5px;
          border-radius: 10px;
          background: transparent;
          &:hover {
            border: 1px solid grey;
            color: grey;
          }
        }
      }`;
