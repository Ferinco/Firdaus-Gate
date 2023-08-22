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

export default function MyClass() {
  const { register, handleSubmit } = useForm();

  const [StudentData, setStudentData] = useState([]);
  useEffect(() => {
    axios
      .get("https://64e27cacab003735881908fa.mockapi.io/students/studentsData")
      .then((response) => {
        setStudentData(response.data);
        console.log(response.data);
        console.log(response.data.firstname);
      });
  }, []);
  const setData = (data) => {
    console.log(data);
  };
  return (
    <Students>
      <div className="container d-flex flex-column p-5">
        <Header left>
          <h3>My Students</h3>
        </Header>
        <Table className="table table-bordered tabble-stripped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Admission Number</th>
              <th colSpan="3">Operations</th>

              {/* <th>email</th>
            <th>password</th> */}
            </tr>
          </thead>
          <tbody>
            {StudentData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.admissionNumber}</td>
                <td>
                  <Link to="" onClick={() => setData(data)}>
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
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex flex-column p-5 right-wrapper">
        <div className="form-wrapper">
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
                <Icon className="icon" icon="ion:search" color="black" />
              </button>
            </div>
          </form>
        </div>
        <div className="info-wrapper d-flex flex-column">
          <div className="tab d-flex flex-row">
            <h6>Your Students</h6>
          </div>
          <div className="top-div">
          <div className="long"></div>
            <div className="small"></div>
            <div className="small"></div>
          </div>
        </div>
      </div>
    </Students>
  );
}
const Students = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid red;
  .container {
    gap: 70px;
    button {
      padding: 0 5px;
    }
  }
  .right-wrapper {
    background-color: #f5f5f5;
    gap:70px;
    .form-wrapper {
      width: 300px;
      background-color: white;
      border-radius: 20px;
      .form {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
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
    .info-wrapper{
        height: 350px;
        background-color: black;
        border-radius:30px;
        padding: 10px 25px;
        width:400px;
    }
  }
`;
