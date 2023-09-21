import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { UserService } from "../../services/userService";
import toast from "react-hot-toast";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [teacherDetails, setTeacherDetails] = useState([]);
  const [overlay, setOverlay] = useState(false);
  useEffect(() => {
    const FetchTeachers = async (data) => {
      await UserService.getTeachers()
        .then((res) => {
          console.log(res);
          setTeachers(res.data);
          console.log(teachers);
          console.log(overlay);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    FetchTeachers();
  }, []);
  const DeleteTeachers = async (data) => {
    await UserService.deleteUser()
      .then((res) => {
        console.log(res);
        console.log(data);
        setOverlay(false);
        toast.success("teacher profile has been deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const EditTeachers = async () => {
    await UserService.updateUser().then((res) => {
      console.log(res);
      setTeacherDetails(res.data);
    });
  };
  return (
    <Wrapper className="d-flex flex-column">
      <div className="header p-5">
        <h4>List of Teachers</h4>
        <p>View and edit details of teachers</p>
      </div>
      {teachers.length > 0 ? (
        <div className=" px-5">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Teacher ID</th>
                <th>email</th>
                <th>telephone</th>
                <th colSpan="2">Operations</th>
              </tr>
            </thead>
            <tbody className="bg-transparent table-body">
              {teachers.map((teacher) => (
                <tr key={teacher._id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.teacherId}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.tel}</td>

                  <td>
                    {" "}
                    <button onClick={EditTeachers}>Edit</button>{" "}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        //  DeleteTeachers();
                        setOverlay(true);
                      }}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div>no details to display atm.</div>
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
              <button className="left" blue onClick={DeleteTeachers}>
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
  }
  .table-body {
    background: transparent !important;
  }
  .overlay-wrapper {
    width: 80%;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    position: absolute;
  }
  .overlay-options {
    max-width: 500px;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  .close {
  }
  .open {
  }
  .buttons {
    justify-content: right;
    width: 100%;
    .left {
      width: 70px;
      border: 0;
      border-radius: 10px;
      padding: 10px;
      color: white;
      background-color: blue;
    }
    .right {
      background-color: #f1f1f1;
      width: 50px;
      border: 0;
      border-radius: 10px;
      padding: 10px;
      color: red;
      &:hover {
        background-color: red;
        transition: 0.3s;
        color: white;
      }
    }
  }
`;
