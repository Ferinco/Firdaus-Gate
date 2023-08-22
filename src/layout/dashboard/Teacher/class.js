import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect} from 'react'
import { Header } from '../../../components/custom/Header';
export default function MyClass(){
    const [StudentData, setStudentData]= useState([])
    useEffect(()=>{
axios.get('https://64e27cacab003735881908fa.mockapi.io/students/studentsData')
.then((response)=>{
    setStudentData(response.data)
    console.log(response.data)
    console.log(response.data.firstname)
})
    }, [])
    const setData = (data) => {
        console.log(data);
     }
    return(
        <Students>

        <div className="container d-flex flex-column p-5">
        <Header left>
            <h3>My Students</h3>
        </Header>
<Table>
<thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admission Number</th>
            {/* <th>email</th>
            <th>password</th> */}
        </tr>
    </thead>
    <tbody>
   {StudentData.map((data)=>(
        <tr key={data.id}>
            <td>{data.id}</td>
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
        <td>{data.admissionNumber}</td>
        <td><Link to="" onClick={() => setData(data)}>update</Link></td>
        <td><Link to="">transfer</Link></td>
        <td><Link to="">delete</Link></td>



        </tr>

))}
</tbody>
   </Table>
        </div>
                </Students>
    )
}
const Students = styled.div`
`