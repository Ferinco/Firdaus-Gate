
import React, { useState } from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom"
import { Icon } from '@iconify/react';
import { Button } from '../../../components/custom/Button'
import { Header } from '../../../components/custom/Header';
import { useAppContext } from '../../../Context';
export default function StudentDashboard(){
    const { setIsSidebarOpen } = useAppContext()
    return(
        <Dashboard>

<div className="head container-fluid d-flex flex-row p-5 justify-content-between w-100">
<div>
    <h3>Dashboard</h3>
</div>
<div onClick={()=> setIsSidebarOpen(prevState => !prevState)}><Icon icon="ri:menu-3-fill" /></div>
</div>
<div className='middle-div container d-flex flex-row justify-content-between p-5'>
    <div className='menu d-flex flex-row justify-content-between'>
        <div className='tab'>
            <h5>RESULTS</h5>
<Button blue>view result</Button>
        </div>
        {/* <div className='tab'>
            <h5>ACTIVE SCHOOL TERM</h5>
            1st 
        </div>
        <div className='tab'>
            <h5>CLASS TEACHER</h5>
            1st 
        </div> */}
    </div>
    <div className='profile d-flex flex-column align-center py-5 px-3 justify-content-between'>
        <div className='image'></div>
        <div className='name d-flex flex-column'>
            <h5>Idowu Abdulsamad</h5>
            <p>ss3</p>
        </div>
        <div className='info d-flex flex-row'></div>
        <div className='number'><h3>1255623</h3></div>
    </div>

</div>
<div className='end-div container d-flex flex-column p-5'>
    <div><h5>Help center</h5></div>
    <div className='d-flex flex-row justify-content-between mr-5 pr-5'>
        <Link>Contact School</Link>
        <Link>Mail School</Link>
        <Link>Contact Teacher</Link>
    </div>
</div>
        </Dashboard>
    )
}
const Dashboard = styled.div`
background-color: #f1f1f1;
height:auto;
.middle-div{
    background-color: white;
    align-items: center;
    .menu{
        gap:50px;
      .tab{
        border-radius: 30px;
        height:200px;
        width:200px;
        justify-content:space-evenly;
        display:flex;
        flex-direction: column;
        align-items:center;
        &:first-child{
            background-color: #8080ff;
;
            color:white;
        }
        &:nth-child(2){
            background-color:#ffb366;
        }
        &:last-child{
            background-color:black;
            color:white;
        }

      }  
    }
  .profile{
    height:400px;
    width:270px;
   
    align-items: center;
  border-radius: 30px;
  background-color: #f1f1f1;
    .image{
        height:90px;
        width:90px;
        border-radius: 50%;
       
        background-color:white;
    }
    .name{
        align-items:center;
        justify-content: center;
    }
  }
}
`