import React from 'react';
import styled from 'styled-components'
import { Header } from '../../../components/custom/Header';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { PATH_DASHBOARD } from '../../../routes/paths';
export default function TeacherDashboard(){
    return(
        <Dashboard>

<div className="dashboard-container container d-flex flex-column p-5">
<div>
    <h3>My Dashboard</h3>
</div>
<div className='menu-wrapper d-flex flex-row'>
<div className='nav-wrapper d-flex flex-column mt-4'>
    <Link className='react-router-link tab d-flex flex-row justify-content-between px-3 py-2' to={PATH_DASHBOARD.teacher.create}>
        <div className='d-flex flex-column mt-3 text'>
        <h6>Create Profile</h6>
        <p>create a new student profile</p>
        </div>
        <div><Icon className='icon' icon="typcn:user-add" color="white" /></div>
    </Link>
    <div className='tab d-flex flex-row justify-content-between px-3 py-2'>
        <div className='d-flex flex-column  mt-3 textt'>
        <h6>Create Profile</h6>
        <p>create a new student profile</p>
        </div>
    </div>
    <div className='tab d-flex flex-row justify-content-between px-3 py-2'>
        <div className='d-flex flex-column  mt-3 text'>
        <h6>Create Profile</h6>
        <p>create a new student profile</p>
        </div>
    </div>
    <div className='tab d-flex flex-row justify-content-between px-3 py-2'>
        <div className='d-flex flex-column  mt-3 text'>
        <h6>create profile</h6>
        <p>create a new student profile</p>
        </div>
    </div>
</div>
<div className='info-wrapper'>
</div>
</div>
</div>
        </Dashboard>
    )
}
const Dashboard = styled.div`
.nav-wrapper{
    gap:20px;
}
.info-wrapper{
    border-radius: 10px;
    
}
.tab{
    width:400px;
    height: 80px;
    border-radius: 10px;
    align-items: center;
    .text{
       text-align:left;
    }
      &:first-child {
     background:black;
     .icon{
        font-size:40px;
    }
     h6{
     color:white;
    }
   p{
    color:#b3b3b3;
   }
}
   &:nth-child(2) {
    background:  #ffff66;
   }
   &:nth-child(3) {
    background: #ffb366;
   }
&:last-child{
    background-color:  #8080ff;
}
}
`


