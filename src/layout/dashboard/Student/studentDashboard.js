import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Button } from "../../../components/custom/Button";
import { Header } from "../../../components/custom/Header";
import { useAppContext } from "../../../Context";
export default function StudentDashboard() {
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
      <div className="middle-div container d-flex flex-row justify-content-between p-5">
        <div className="tabs row">
          <div className="big-tab col-xs-12 col-md-9 d-flex flex-row justify-content-between">
            <div>jgsjdgsd</div>
            <div className="icon-div">
            <Icon className="icon" icon="streamline-emojis:graduation-cap" />
            </div>
          </div>
          <div className="tab col-md-3">
            <div className="tab-right">
              <div className="icon-div">
                <Icon icon="ion:calendar" className="icon" />
              </div>
              <div className="text d-flex flex-column">
                <h6>SCHEME</h6>
                <p>class scheme</p>
              </div>
            </div>
            <div className="tab-left">
              <Icon icon="ion:calendar" className="big-icon" />
            </div>
          </div>
          <div className="tab col-md-3">
            <div className="tab-right ">
              <div className="icon-div">
                <Icon icon="icon-park-twotone:table-report" className="icon" />
              </div>
              <div className="text d-flex flex-column">
                <h6>RESULTS</h6>
                <p>view results</p>
              </div>
            </div>
            <div className="tab-left">
              <Icon
                icon="icon-park-twotone:table-report"
                className="big-icon"
              />
            </div>
          </div>
          <div className="tab col-md-3">
            <div className="tab-right">
              <div className="icon-div">
                <Icon icon="ion:calendar" className="icon" />
              </div>
              <div className="text d-flex flex-column">
                <h6>SCHEME</h6>
                <p>class scheme</p>
              </div>
            </div>
            <div className="tab-left">
              <Icon icon="ion:calendar" className="big-icon" />
            </div>
          </div>
        </div>
        <div
          className={`profile flex-column align-center py-5 px-3 justify-content-between ${
            isProfileOpen ? "open" : "close"
          }`}
        >
          <div className="image"></div>
          <div className="name d-flex flex-column">
            <h5>Idowu Abdulsamad</h5>
            <p>ss3</p>
          </div>
          <div className="info d-flex flex-row"></div>
          <div className="number">
            <h3>1255623</h3>
          </div>
        </div>
      </div>
      <div className="end-div container d-flex flex-column">
        <div>
          <h5>Help center</h5>l
        </div>
        <div className="d-flex flex-row justify-content-between mr-5 pr-5">
          <Link>Contact School</Link>
          <Link>Mail School</Link>
          <Link>Contact Teacher</Link>
        </div>
      </div>
    </Dashboard>
  );
}
const Dashboard = styled.div`
  height: auto;
  background: #f1f1f1 !important;
  .head {
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
    .tabs {
   gap:50px;
    .big-tab {
      border: 1px solid red;
      height: 150px;
      border-radius: 30px;
      .icon-div{
.icon{
  font-size: 200px;
}
      }
    } 
      .tab {
        border-radius: 30px;
        height: 200px;
        /* width: 200px; */
        overflow: hidden;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        align-items: center !important;
        padding: 15px;
        .tab-right {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          gap: 20px;
        }
        .tab-left {
          margin-right: -50% !important;
        }
        .icon-div {
          padding: 10px;
          background-color: white;
          border-radius: 30px;
          width: 50px;
        }
        .icon {
          font-size: 30px;
        }
        &:nth-child(2){
          background-color: #9ea0e7;
          color: white;
          .big-icon {
            font-size: 150px !important;
            color: #d2d3e9;
          }
          .icon {
            color: #9ea0e7;
          }
        }
        &:nth-child(3) {
          background-color: #65655d;
          color: white;
          .big-icon {
            font-size: 150px !important;
            color: grey;
          }
          .icon {
            color: #65655d;
          }
        }
        &:last-child{
          background-color: #9ea0e7;
          color: white;
          .big-icon {
            font-size: 150px !important;
            color: #d2d3e9;
          }
          .icon {
            color: #9ea0e7;
          }
        }
  
      }

    }

    .profile {
      height: 400px;
      width: 270px;
      display: flex;
      align-items: center;
      border-radius: 30px;
      background-color: white;
      .image {
        height: 90px;
        width: 90px;
        border-radius: 50%;

        background-color: #f5f5f5;
      }
      .name {
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .btns {
      display: flex !important;
      flex-direction: row;
      gap: 40px;
    }

    .profile {
      display: none !important;
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
  }
`;
