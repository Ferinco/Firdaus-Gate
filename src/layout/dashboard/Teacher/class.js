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
      <div className="container-fluid d-flex flex-column p-5">
        <div className="d-flex flex-row justify-content-between">
          <h3>My Students</h3>
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
                <Icon className="icon" icon="ion:search" color="black" />
              </button>
            </div>
          </form>
        </div>
        </div>
        <Table className="table table-bordered tabble-stripped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Admission Number</th>
              <th>email</th>
              <th>gender</th>
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
                <td>{data.email}</td>
                <td>{data.gender}</td>

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
      <div className="d-none flex-column p-5 right-wrapper">
     
        <div className="info-wrapper d-flex flex-column px-4 py-4">
          <div className="tab d-flex flex-row">
            <h6>Your Students</h6>
          </div>
          <div className="top-div">
            <div className="long"></div>
            <div className="small"></div>
            <div className="small"></div>
          </div>
          <div className="bottom-div">
            <div className="tab d-flex flex-column"></div>
            <div className="tab d-flex flex-column"></div>
            <div className="tab d-flex flex-column"></div>
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
  .container-fluid {
    gap: 30px;
    .form-wrapper {
      width: 300px;
      background-color: #f5f5f5;
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
    button {
      padding: 0 5px;
    }
  }
  .right-wrapper {
    background-color: #f5f5f5;
    gap: 70px;
  
    .info-wrapper {
      height: 350px;
      background-color: black;
      border-radius: 30px;
      width: 400px;
      justify-content: space-between;
      .top-div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 120px;
        gap: 10px;
        overflow: hidden;
        .long {
          border-radius: 10px;
          grid-row-end: span 2;
          width: 250px;
          height: 100%;
          border: 1px solid white;
        }
        .small {
          border-radius: 10px;

          width: 90px;
          /* grid-column-end: span 2; */
          height: 100%;
          border: 1px solid white;
        }
      }
      .bottom-div {
        display: flex;
        flex-direction: row;
        height: 120px;
        width:100%;
        justify-content:space-between;
        .tab {
          border: 1px solid white;
          height: 100%;
          width:100px;
          border-radius: 10px;
        }
      }
    }
  }
`;
