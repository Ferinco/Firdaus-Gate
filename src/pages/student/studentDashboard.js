import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAppContext } from "../../contexts/Context";
import { useAuth } from "../../hooks/useAuth";

export default function StudentDashboard() {
  const {
    setIsSidebarOpen,
    setIsProfileOpen,
    isProfileOpen,
    currentUser,
    setCurrentUser,
  } = useAppContext();

  const { user } = useAuth();
  console.log(user);
  return (
    <Dashboard>
      <div className="middle-div container d-flex flex-row justify-content-between p-5">
        <div className="wrapper d-flex flex-column justify-content-between row">
          <div className="big-tab d-flex flex-row justify-content-between p-3 col-12">
            <div className="text">
              <h5>Hi, welcome</h5>
              <p>
                This is your personal dashboard which only you have access to.
                Navigate through diferrent paths to complete any desired action.
              </p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon="streamline-emojis:graduation-cap" />
            </div>
          </div>
          <div className="tabs row w-100 p-0">
            <div className="tab ">
              <div className="tab-right">
                <div className="icon-div">
                  <Icon icon="ic:round-book" className="icon" />
                </div>
                <div className="text d-flex flex-column">
                  <h6>17</h6>
                  <p>subjects offered</p>
                </div>
              </div>
              <div className="tab-left">
                <Icon icon="ic:round-book" className="big-icon" />
              </div>
            </div>

            <a
              href={"report"}
              download="Adekoya Ismail"
              className=" tab d-flex flex-row"
            >
              <div className="tab-right ">
                <div className="icon-div">
                  <Icon
                    icon="icon-park-twotone:table-report"
                    className="icon"
                  />
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
            </a>

            <div className="tab ">
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
        </div>
        <div
          className={`profile flex-column align-center py-5 px-3 justify-content-between ${
            isProfileOpen ? "open" : "close"
          }`}
        >
          <div className="image">
            <Icon icon="fa-solid:graduation-cap" className="icon" />
          </div>
          {currentUser ? (
            <div>
              <div className="name d-flex flex-column">
                <h5>
                  {currentUser?.firstName} {currentUser?.lastName}
                </h5>
                <p>{currentUser?.email}</p>
                <p>Male</p>
                <h6>{currentUser?.admissionNumber}</h6>
              </div>
              <div className="info d-flex flex-row"></div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Dashboard>
  );
}
const Dashboard = styled.div`
  height: 100vh;
  background: #f1f1f1 !important;

  .middle-div {
    background-color: #f1f1f1;
    align-items: center;
    height: auto;
    gap: 50px;
    .wrapper {
      gap: 50px;

      width: 80%;
    }
    .big-tab {
      height: 150px;
      border-radius: 30px;
      z-index: 999;
      background-color: #9ea0e7;
      .text {
        color: white;
        margin-top: 20px;
      }
      .icon-div {
        .icon {
          font-size: 200px;
        }
      }
    }
    .tabs {
      gap: 30px;
      margin-left: 3px !important;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

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
        text-decoration: none !important;
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
        &:first-child {
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
        &:nth-child(2) {
          background-color: #65655d;
          color: white;
          &:hover {
            transform: scale(1.05);
          }
          .big-icon {
            font-size: 150px !important;
            color: grey;
          }
          .icon {
            color: #65655d;
          }
        }
        &:last-child {
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
        display: flex;
        background-color: #f5f5f5;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 50px;
          color: black;
        }
      }
      .name {
        align-items: center;
        justify-content: center;
        text-align: center;
        p {
          font-size: 17px !important;
        }
        h6 {
          color: grey;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .btns {
      display: flex !important;
      flex-direction: row;
      align-items: center;
      flex-direction: row;
      gap: 40px;
      .profile-btn,
      .nav-btn {
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
    .middle-div {
      .wrapper {
        width: 100%;
      }
      .big-tab {
        z-index: 0;
      }
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
  @media screen and (max-width: 767px) {
    .middle-div {
      .big-tab {
        height: auto;
        .text {
          color: white;
          margin-top: 10px;
        }
        .icon-div {
          margin-right: -50px;
          .icon {
            font-size: 70px;
          }
        }
      }
      .tabs {
        grid-template-columns: repeat(1, 1fr);
        .tab {
          .tab-left {
            margin-right: -20% !important;
          }
        }
      }
    }
  }
`;
