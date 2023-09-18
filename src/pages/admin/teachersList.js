import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { UserService } from "../../services/userService";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const FetchTeachers = async (data) => {
      await UserService.getTeachers()
        // console.log(UserService.getTeachers)
        .then((res) => {
          console.log(res);
          setTeachers(res.data);
          console.log(teachers);
          console.log(teachers.firstName);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    FetchTeachers();
  }, []);
  return (
    <Wrapper className="d-flex flex-column p-5">
      <div className="header pb-3">
        <h4>List of Teachers</h4>
        <p>View and edit details of teachers</p>
      </div>
      {teachers.length > 0 ? (
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
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.teacherId}</td>
                <td>{teacher.email}</td>
                <td>{teacher.tel}</td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>no details to display atm.</div>
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
`;
