import React from 'react';
import styled from 'styled-components'
import { Header } from '../../../components/custom/Header';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { PATH_DASHBOARD } from '../../../routes/paths';
export default function TeacherDashboard(){
    return(
        <Dashboard>

<div className="container d-flex flex-column p-5">
<Header left>
    <h3>My Dashboard</h3>
</Header>
<div className='wrapper d-flex flex-column mt-4'>
    <Link className='tab d-flex flex-row justify-content-between px-2 py-2' to={PATH_DASHBOARD.teacher.create}>
        <div className='d-flex flex-column text-align-left text'>
        <h6>create profle</h6>
        <p>create a new student profile</p>
        </div>
        <div><Icon icon="typcn:user-add" /></div>
    </Link>
    <div className='tab d-flex flex-row justify-content-between px-2 py-2'>
        <div className='d-flex flex-column text-align-left'>
        <h6>create profle</h6>
        <p>create a new student profile</p>
        </div>
    </div>
    <div className='tab d-flex flex-row justify-content-between px-2 py-2'>
        <div className='d-flex flex-column text-align-left'>
        <h6>create profle</h6>
        <p>create a new student profile</p>
        </div>
    </div>
</div>
</div>
        </Dashboard>
    )
}
const Dashboard = styled.div`
.wrapper{
    gap:20px;
}
.tab{
    width:400px;
    border-radius: 10px;
    .text{
        align-items:center;
    }
      &:first-child {
     background:black;
     h6{
     color:white;
    }
   p{
    color:#b3b3b3;
   }
}
   &:nth-child(2) {
    background:black;
   }
&:last-child{
    background-color:black;
}
}
`


