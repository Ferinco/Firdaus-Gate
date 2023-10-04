import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAppContext } from "../../contexts/Context";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTerm } from "../../redux/slices/term";


export default function StudentDashboard() {
  const { user } = useAuth();
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();

  //fetch current term
  const {currentTerm} = useSelector(state => state.term)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchCurrentTerm())
}, [])
  return (
    <Dashboard>
      <div className="middle-div d-flex flex-row justify-content-between align-items-start p-5">
        <div className="wrapper-div  justify-content-between gap-3">
          <div className="big-tab d-flex flex-row justify-content-between p-3">
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
          <div className="details-wrapper mt-5">
          <div className="mobile-details d-flex d-lg-none flex-row py-2 gap-2 px-4 justify-content-between">
          <div className="info"><p>current term</p></div>
          <div className="info">session start</div>
          <div className="info">session end</div>
          </div>
          </div>
          <div className="tabs row w-100 pt-5 pt-lg-0">
            <div className="d-none mobile-tabs row">
              <div className="tab col-4">gdg</div>
              <div className="tab col-4">gdg</div>
              <div className="tab col-4">gdg</div>
            </div>
            <div className="sub-tabs d-flex flex-column gap-2 justify-content-center">
              <div className="sub-tab px-3 d-flex justify-content-between align-items-center">
                <div>
                  <p>number of subjects offered</p>
                  <h6>15</h6>
                </div>
                <div className="icon-div">
                <Icon  icon="mdi:bookshelf"  className="icon"/>
                </div>
              </div>
              <div className="sub-tab px-3 d-flex justify-content-between align-items-center">
              <div>
                  <p>current department</p>
                  <h6>Chemistry</h6>
                </div>
                <div className="icon-div">
                <Icon icon="material-symbols:label-rounded" rotate={1} className="icon" />
                </div>
              </div>
            </div>
            <a
              href={"report"}
              download="Adekoya Ilgail"
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
        <div className="details d-none d-lg-flex flex-lg-column p-2 gap-2">
          <div className="info">current term {currentTerm.name}</div>
          <div className="info">current week</div>
          <div className="info"></div>
          </div>
      </div>
    </Dashboard>
  );
}
const Dashboard = styled.div`
  height: 100vh;
  background: #f1f1f1 !important;
  overflow-x: hidden !important;
  .middle-div {
    background-color: #f1f1f1;
    align-items: center;
    height: auto;
    gap: 50px;
    overflow: hidden !important;
    .big-tab {
      border-radius: 30px;
      z-index: 99;
      background-color: rgba(158, 160, 231, 0.7);
      border: 1px solid #9ea0e7;
      backdrop-filter: blur(10px); 
      box-shadow: 0 0 10px rgba(158, 160, 231, 0.5); 
      height: 180px;
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
    .details{
      width: fit-content;
      border-radius: 30px;
      background-color: white;
      box-shadow: 0 0 10px rgba(158, 160, 231, 0.5); 
      .info{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        
        &:first-child{
          background-color: #65655d;
        }
        &:nth-child(2){
          background-color: blue;
        }
        &:nth-child(3){
          background-color: black;
        }
      }
    }
    .details-wrapper{
      width: 100% !important;
      overflow: hidden !important;
    
    
    }
    .mobile-details{
      width: fit-content;
      border-radius: 30px;
      background-color: white;
      width: 100% !important;
      overflow: hidden !important;
      box-shadow: 0 0 10px rgba(158, 160, 231, 0.5); 
      .info{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        
        &:first-child{
          background-color: #65655d;
        }
        &:nth-child(2){
          background-color: blue;
        }
        &:nth-child(3){
          background-color: black;
        }
      } 
    }
    .sub-tabs{
      height: 200px;
    }
    .sub-tab{
      width: 250px;
      height: auto;
      border-radius: 10px;
      padding-top: 5px;
      &:first-child{
        background-color: #b3b3b3;
        .icon-div{
          background-color: #9ea0e7;
          .icon{
            color: black;
          }
        }
      }
      &:nth-child(2){
        background-color: #d9a26b;
        .icon-div{
          background-color: #e98f35;
        }
      }
      p{
        font-size: 13px;
      }
      .icon{
        font-size: 30px;
      }
      .icon-div{
        padding: 7px;
        border-radius: 50%;
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
        &:nth-child(4) {
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
        &:nth-child(3) {
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
  @media screen and (max-width: 600px) {
.details-wrapper{
  display: none !important;
}
.sub-tabs{
  width: 100% !important;
  /* background-color: white; */
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.mobile-tabs{
  margin-top: 50px;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: nowrap;
  .tab{
    height: 100px !important;
    &:first-child{ 
    background-color: #9ea0e7;
    }
    &:nth-child(2){
      background-color: #9ea0e7;
    }
  }
}
      }
`;
