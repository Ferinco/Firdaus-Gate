import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {  CircularProgress } from "../../components/custom";
import { useAppContext } from "../../contexts/Context";
import { UserService } from "../../services/userService";
import { PATH_DASHBOARD } from "../../routes/paths";

export default function MyClass() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const FetchStudents = async (data) => {
      await UserService.getStudents()
        .then((res) => {
          console.log(res);
          setStudents(res.data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false)
        });
    };
    FetchStudents();
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <Students>
      <div className="container-fluid d-flex flex-column p-5">
        <div className="d-flex flex-column left">
          <h4>My Students</h4>
          <p>see full list of your students</p>
        </div>
      </div>
      <div className="middle-div d-flex flex-row p-5">
        <div className="wrapper d-flex flex-column p-3">
          <div className="d-flex flex-row justify-content-between actions-div">
            <div className="form-wrapper mt-5">
              <form className="d-flex flex-row form">
                <div>
                  <input
                    placeholder="search for student"
                    name="searched"
                    {...register("searched", { required: true })}
                  />
                </div>
                <div>
                  <button type="submit">
                    <Icon className="icon" icon="ion:search" color="grey" />
                  </button>
                </div>
              </form>
            </div>
            <div>
              <Icon icon="system-uicons:filter" color="grey" className="icon" />
            </div>
          </div>
    
          {students.length > 0 ? (
              <Table className="table table-bordered ">
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
           {students.map((student, index) => (
                <tbody>
                  <tr key={student._id}>
                    <td>{student.index}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
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
                        <button>delete</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
            ))}
              </Table>
          ) : (
            <div className="d-flex justify-content-center center align-center">
              <h4>
                No list to display... navigate to the{" "}
                <Link to={PATH_DASHBOARD.teacher.create}>
                  register student(s) to create a student's profile
                </Link>
              </h4>
            </div>
          )}
        </div>
      </div>
      {
            isLoading? (
              <CircularProgress/>
            ) : (
              ""
            )
          }
    </Students>
  );
}
const Students = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .container-fluid {
    gap: 30px;
  }

  .middle-div {
    overflow-x: scroll !important;
    .wrapper {
      gap: 40px;
      background-color: white;
      border-radius: 30px;

      .actions-div {
        align-items: center;
        .icon {
          font-size: 30px;
        }
      }
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
    }
    .form-wrapper {
      width: 300px;
      background-color: transparent;
      border-radius: 20px;
      border: 1px solid #f1f1f1;
      .form {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        button {
          border: 0;
          background: transparent;
        }
        .icon {
          font-size: 20px;
        }
        input {
          border-radius: 20px;
          padding: 14px 16px;
          background-color: transparent;
          border: 0 !important;
          outline: none !important;
        }
      }
    }
  }
`;
