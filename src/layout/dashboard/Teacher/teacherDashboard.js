import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../../components/custom/Header";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { useAppContext } from "../../../Context";
export default function TeacherDashboard() {
  //get current time
  let currentTime = new Date().getHours()
  const [greeting, setGreeting] = useState(getGreeting(currentTime))
  //greeting teacher with regards to current time
function getGreeting (currentTime){
switch(true){
  case currentTime >= 0 && currentTime < 12:
    return "Good Morning,"
    case currentTime >= 12 && currentTime < 18:
      return 'Good afternoon,';
      default:
        return 'Good evening,';
}
};
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
  return (
    <Dashboard>
 <div className="head d-flex flex-column left container py-3 pt-5 px-lg-5">
  <h4><span>{greeting}</span> <span>Mr Rasaq</span></h4>
  <p>Welcome to your dashboard.</p>
 </div>
      <div className="middle-div container d-flex px-lg-5 py-3">
        <div className="tabs  d-flex flex-column ">
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
            to={PATH_DASHBOARD.teacher.create}
          >
            <div className="d-flex flex-column mt-3 text">
              <h6>Create Profile</h6>
              <p>create a new student profile</p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon="typcn:user-add" color="white" />
            </div>
          </Link>
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
            to={PATH_DASHBOARD.teacher.create}
          >
           <div className="d-flex flex-column  mt-3 text">
              <h6>
                Add Subject Scheme
              </h6>
              <p>upload the term's scheme of work</p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon="pepicons-pencil:list" color="black" />
            </div>
          </Link>
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
            to={PATH_DASHBOARD.teacher.create}
          >
           <div className="d-flex flex-column  mt-3 text">
              <h6>Term Calender</h6>
              <p>post the timeline for the current term</p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon="solar:calendar-bold" color="black" />
            </div>
          </Link>
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
            to={PATH_DASHBOARD.teacher.create}
          >
            <div className="d-flex flex-column  mt-3 text">
              <h6>Post a Project</h6>
              <p>Give your student(s) a project to work on</p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon="ph:potted-plant-fill" color="black" />
            </div>
          </Link>
        </div>
      <div className="info-wrapper d-flex flex-column p-3">
          <div className="div d-flex flex-row">
            <h6 style={{color:"white"}}>Catalog</h6>
          </div>
          <div className="top-div">
            <div className="long"></div>
            <div className="small"></div>
            <div className="small"></div>
          </div>
          <div className="bottom-div">
            <div className="div d-flex flex-column"></div>
            <div className="div d-flex flex-column"></div>
            <div className="div d-flex flex-column"></div>
          </div>
        </div>
        <div
          className={`profile flex-column align-center py-5 px-3 justify-content-between ${
            isProfileOpen ? "open" : "close"
          }`}
        >
          <div className="image">
          <Icon icon="icon-park-solid:necktie" className="icon" />
          </div>
          <div className="name d-flex flex-column">
            <h5>Mr Rasaq Akanni</h5>
            <p>Rasaq500@gmail.com</p>
            <p>Male</p>
            <p>class teacher</p>
            <h6>1908112</h6>
          </div>
          <div className="info d-flex flex-row"></div>
          <div className="number d-flex flex-row">
            <h5>JSS2</h5>
          </div>
        </div>
      </div>
      <div className="end-div  d-flex flex-row p-5 justify-content-between">
       
      </div>
    </Dashboard>
  );
}
const Dashboard = styled.div`
  height: 100vh;
  background: #f1f1f1 !important;
  margin: 0 !important;
  /* .head {
    align-items: center;
    background-color: white;
    height: 80px;
    .btns {
      display: flex !important;
      flex-direction: row;
      align-items:center;
      flex-direction: row;
      gap: 40px;
      .profile-div{
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: black;
        cursor: pointer;
      }
      .profile-btn{
        display: flex !important;
      }
      .profile-btn, .nav-btn{
        font-size: 25px;
        font-weight: 600 !important;
      }
       .nav-btn{
     display:none;
      }
    }
  } */
  .middle-div {
    background-color: #f1f1f1;
    align-items: center;
    height: auto;
    justify-content: space-between !important;
    margin: 0 !important;
    .tabs {
      gap: 20px;
      .tab {
    max-width: 400px;
    min-width:320px;
    height: 80px;
    border-radius: 10px;
    align-items: center;
    .icon-div{
      padding: 10px ;
      border-radius: 50%;
      /* border:1px solid black; */
    }
    .text {
      text-align: left;
    }
    &:first-child {
      background: black;
      .icon-div{
        background-color:  #1c1c1c;
    }
      .icon {
        font-size: 30px;
      }
      h6 {
        color: white;
      }
      p {
        color: #b3b3b3;
      }
    }
    &:nth-child(2) {
      background: #ffff66;
      .icon-div{
        background-color:  #fbfb87;
    }
      .icon {
        font-size: 30px;
      }
    }
    &:nth-child(3) {
      background: #ffb366;
      .icon-div{
        background-color: #d9a26b;
    }
      .icon {
        font-size: 30px;
      }
    }
    &:last-child {
      background-color: #8080ff;
      .icon-div{
        background-color:  #8c8ce1;
    }
      .icon {
        font-size: 30px;
      }
    }
  }
    }
    .profile {
      height: 400px;
      width: 270px;
      display: none;
      align-items: center;
      border-radius: 30px;
      background-color: white;
      .image {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        display:flex;
        background-color: #f5f5f5;
        justify-content: center;
        align-items:center;
        .icon{
          font-size: 50px;
          color:black;
        }
      }
      .name {
        align-items: center;
        justify-content: center;
        text-align: center;
        p{
          font-size: 17px !important;
        }
        h6{
          color:grey;
        }
      }
    }
    .open {
      display: flex !important;
      z-index: 999;
      transition: 0.3s;
      position: absolute;
      right: 20px !important;
      top: 100px !important;
    }
    .close {
      margin-right: -1000px !important;
    }
    .info-wrapper {
      height: 350px;
      background-color: black;
      border-radius: 30px;
      min-width: 320px;
      justify-content: space-between;
      margin: 0 !important;
      margin: 0 !important;
      .top-div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 120px;
        gap: 10px;
        overflow: hidden;
        .long {
          border-radius: 10px;
          grid-row-end: span 2;
          width: calc(90% * 400px);
          height: 100%;
          border: 1px solid white;
        }
        .small {
          border-radius: 10px;
  
          width: calc(10% * 400px);
          /* grid-column-end: span 2; */
          height: 100%;
          border: 1px solid white;
        }
      }
      .bottom-div {
        display: grid;
       grid-template-columns: repeat(3, 1fr);
        height: 120px;
        width: 100%;
        justify-content: space-between;
        gap:20px;
        .div {
          border: 1px solid white;
          height: 100%;
          border-radius: 10px;
          /* width:100px; */
        }
      }
    }
  }
  .end-div{
  }


`;
