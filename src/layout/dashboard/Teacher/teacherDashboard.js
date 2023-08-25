import React from "react";
import styled from "styled-components";
import { Header } from "../../../components/custom/Header";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { useAppContext } from "../../../Context";
export default function TeacherDashboard() {
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
  return (
    <Dashboard>
      <div className="head container-fluid d-flex flex-row p-5 justify-content-between w-100">
        <div>
          <h3>Dashboard</h3>
        </div>
        <div className="btns">
          <div
            className="profile-btn"
            onClick={() => {
              setIsSidebarOpen
                ? setIsSidebarOpen(false)
                : setIsSidebarOpen(false);
              setIsProfileOpen((prevState) => !prevState);
            }}
          >
            <Icon icon="ph:student" />
          </div>
          <div
            onClick={() => {
              setIsSidebarOpen((prevState) => !prevState);
              setIsProfileOpen(false);
            }}
          >
            <Icon icon="ri:menu-3-fill" className="nav-btn" />
          </div>
        </div>
      </div>
      <div className="middle-div container d-flex flex-column p-5">
        <div className="tabs container d-flex flex-column">
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
            to={PATH_DASHBOARD.teacher.create}
          >
            <div className="d-flex flex-column mt-3 text">
              <h6>Create Profile</h6>
              <p>create a new student profile</p>
            </div>
            <div>
              <Icon className="icon" icon="typcn:user-add" color="white" />
            </div>
          </Link>
          <div className="tab d-flex flex-row justify-content-between px-3 py-2">
            <div className="d-flex flex-column  mt-3 textt">
              <h6>Create Profile</h6>
              <p>create a new student profile</p>
            </div>
          </div>
          <div className="tab d-flex flex-row justify-content-between px-3 py-2">
            <div className="d-flex flex-column  mt-3 text">
              <h6>Create Profile</h6>
              <p>create a new student profile</p>
            </div>
          </div>
          <div className="tab d-flex flex-row justify-content-between px-3 py-2">
            <div className="d-flex flex-column  mt-3 text">
              <h6>create profile</h6>
              <p>create a new student profile</p>
            </div>
          </div>
        </div>
        {/* <div className="info-wrapper d-flex flex-column">
          <div className="div d-flex flex-row">
            <h6>Your Students</h6>
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
        </div> */}
      </div>
    </Dashboard>
  );
}
const Dashboard = styled.div`
  height: 100vh;
  background: #f1f1f1 !important;
  .head {
    align-items: center;
    background-color: white;
    height: 80px;
    .btns {
      display: none;
    }
  }
  .middle-div {
    background-color: #f1f1f1;
    align-items: center;
    height: auto;
    gap: 50px;
    .tabs {
      gap: 20px;
      .tab {
    width: 400px;
    height: 80px;
    border-radius: 10px;
    align-items: center;
    .text {
      text-align: left;
    }
    &:first-child {
      background: black;
      .icon {
        font-size: 40px;
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
    }
    &:nth-child(3) {
      background: #ffb366;
    }
    &:last-child {
      background-color: #8080ff;
    }
  }
    }
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
        width: 100%;
        justify-content: space-between;
        .div {
          border: 1px solid white;
          height: 100%;
          width: 100px;
          border-radius: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .btns {
      display: flex !important;
      flex-direction: row;
      align-items:center;
      flex-direction: row;
      gap: 40px;
      .profile-btn, .nav-btn{
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
  }

`;
