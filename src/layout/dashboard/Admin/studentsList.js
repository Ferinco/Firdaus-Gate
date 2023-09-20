import { useState, useEffect } from "react";
import React from "react";
import { UserService } from "../../../services/userService";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CircularProgress from "../../../components/custom/CircularProgress";
export default function StudentsList() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);
  useEffect(() => {
    const FetchStudents = async () => {
      await UserService.getStudents()
        .then((res) => {
          console.log(res);
          console.log("hey there");
          setIsLoading(false);
          setStudents(res.data);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    FetchStudents();
  }, []);

  return (
    <Wrapper className="d-flex flex-column">
     <div className="header p-5">
        <h4>List of Students</h4>
        <p>view and edit student(S) details here...</p>
      </div>
      {isLoading ? <CircularProgress /> : ""}
      {students > 0 ? (
        students.map((student) => (
          <div className="p-5">
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
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.admissionNumber}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>

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
                    <button
                      onClick={() => {
                        //  DeleteTeachers();
                        setOverlay(true);
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
          </div>
        ))
      ) : (
        <div className="p-5">no details to display atm.</div>
      )}
      {overlay ? (
        <div className="overlay-wrapper d-flex ">
          <div
            className={`d-flex flex-column p-3 overlay-options ${
              overlay ? "open" : "close"
            }`}
          >
            <p>Are you sure you want to delete this teacher profile?</p>
            <div className=" buttons d-flex gap-3">
              <button className="left">
                yes
              </button>
              <button
                className="right"
                onClick={() => {
                  setOverlay(false);
                }}
              >
                no
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
  }
`;
