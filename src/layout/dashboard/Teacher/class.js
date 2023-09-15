import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../../../components/custom/Header";
import { Button } from "../../../components/custom/Button";
import { useAppContext } from "../../../contexts/Context";
import { UserService } from "../../../services/userService";
export default function MyClass() {
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
  const [StudentData, setStudentData] = useState([]);
  useEffect(() => {
    const FetchStudents = async (data) => {
      await UserService.getUsers("/users?role=student")
      .then((res) => {
        console.log(res);
        setStudentData(res.data);
      })
      .catch((error)=>{
        console.log(error)

      })
    };
    FetchStudents();
  }, []);
const { register,
  handleSubmit,
  reset,
  formState:{errors} } = useForm()
  return (
    <Students>
      <div className="container-fluid d-flex flex-column p-5">
        <div className="d-flex flex-column left">
          <h4>My Students</h4>
          <p>see full list of your students</p>
        </div>
      </div>
      <div className="container middle-div px-5 d-flex flex-row">
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
            <tbody>
         {StudentData? 
             ( StudentData.map((data) => (
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
              ))) : (
                <div>
                  <h2>No Students....</h2>
                </div>
              )}
            </tbody>
          </Table>
        </div>
        <div
          className={`profile flex-column align-center py-5 px-3 justify-content-between ${
            isProfileOpen ? "open" : "close"
          }`}
        >
          <div className="image">
            <Icon icon="icon-park-solid:necktie" className="icon" />
          </div>
          <div className="name d-flex flex-column">
            <h5>Mr Rasaq Akanni</h5>
            <p>Rasaq500@gmail.com</p>
            <p>Male</p>
            <p>class teacher</p>
            <h6>1908112</h6>
          </div>
          <div className="info d-flex flex-row"></div>
          <div className="number d-flex flex-row">
            <h5>JSS2</h5>
          </div>
        </div>
      </div>
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
    .profile {
      height: 400px;
      width: 270px;
      display: none;
      align-items: center;
      border-radius: 30px;
      background-color: white;
      .image {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        display: flex;
        background-color: #f5f5f5;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 50px;
          color: black;
        }
      }
      .name {
        align-items: center;
        justify-content: center;
        text-align: center;
        p {
          font-size: 17px !important;
        }
        h6 {
          color: grey;
        }
      }
    }
    .open {
      display: flex !important;
      z-index: 999;
      transition: 0.3s;
      position: absolute;
      right: 20px !important;
      top: 100px !important;
    }
    .close {
      margin-right: -1000px !important;
    }
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
