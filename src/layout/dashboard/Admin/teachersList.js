import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { UserService } from "../../../services/userService";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [teacherDetails, setTeacherDetails] = useState([])
  const [overlay, setOverlay] = useState(false)
  useEffect(() => {
    const FetchTeachers = async (data) => {
      await UserService.getTeachers()
        .then((res) => {
          console.log(res);
          setTeachers(res.data);
          console.log(teachers);      
          console.log(overlay)
        })
        .catch((error) => {
          console.log(error);
        });
    };

    FetchTeachers()
  }, []);
  const DeleteTeachers = async (data) => {
    await UserService.deleteUser()
    .then((res)=>{
      console.log(res)
      console.log(data)
      setOverlay(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const EditTeachers = async()=>{
    await UserService.updateUser()
    .then((res)=>{
      console.log(res)
      setTeacherDetails(res.data)
    })
  }
  return (
    <Wrapper className="d-flex flex-column">
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
          <tbody className="bg-transparent table-body" >
            {teachers.map((teacher)=> (
            <tr key={teacher._id} >
              <td>{teacher.id}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.teacherId}</td>
              <td>{teacher.email}</td>
              <td>{teacher.tel}</td>

              <td> <button onClick={EditTeachers}>Edit</button> </td>
              <td> <button onClick={()=>{
                    //  DeleteTeachers();
                     setOverlay(true);
              }
           
              }>Delete</button> </td>

            </tr>

            ))}
          </tbody>
        </Table>
      ) : (
        <div>no details to display atm.</div>
      )}
{
  overlay? (
<div className="overlay-wrapper d-flex ">
<div className="d-flex flex-column p-3 overlay-options">
      <p>
        Are you sure you want to delete this teacher profile?
      </p>
      <div className="d-flex flex-row gap-4 buttons">

      <button>yes</button>
      <button>no</button>
      </div>
    </div>
</div>
  ): ""
}
    </Wrapper>
  );
}
const Wrapper = styled.div`
.table{

}
.table-body{
  background: transparent !important;
}
.overlay-wrapper{
  width: 80%;
  justify-content: center;
align-items: center;
height: 100%;
z-index:999;
background-color: gray;
position: absolute;
}
.overlay-options{
max-width: 500px;
height: 400px;
border: 1px solid red;
/* z-index: 9999; */

}
`;
