import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { UserService } from "../../../services/userService";

export default function TeachersList() {
  const [teacherDetails, setTeacherDetails] = useState([]);
  useEffect(() => {
    const FetchTeachers = async (data) => {
      await UserService.getTeachers
        .then((res) => {
          console.log(res);
          setTeacherDetails([res]);
          console.log(teacherDetails);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  });
  return (
    <Wrapper className="d-flex flex-column p-5">
      <div className="header pb-3">
        <h4>List of Teachers</h4>
        <p>View and edit details of teachers</p>
      </div>
      {teacherDetails ? (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Admission Number</th>
              <th>email</th>
              <th>gender</th>
              <th colSpan="2">Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div>no details to display atm.</div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div``;
