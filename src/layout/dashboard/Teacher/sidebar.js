import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { useAppContext } from "../../../contexts/Context";
import { PATH_PAGE } from "../../../routes/paths";
import { useAuth } from "../../../hooks/useAuth";
const sidebarConfig = [
  {
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.teacher.index,
    title: "Dashboard",
  },
  {
    icon: "mdi:google-classroom",
    link: PATH_DASHBOARD.teacher.myStudents,
    title: "My students",
  },
  {
    icon: "fluent-mdl2:poll-results",
    link: PATH_DASHBOARD.teacher.results,
    title: "Report",
  },
  {
    icon: "solar:calendar-bold",
    link: PATH_DASHBOARD.teacher.viewCalendar,
    title: "Term calendar",
  },
];

export default function TeacherSidebar() {
      const { isSidebarOpen, setIsSidebarOpen, setIsProfileOpen } = useAppContext();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("Dashboard")
  function handleNavClick(title){
    setActiveTab(title)
    console.log(activeTab)
    setIsSidebarOpen(false)
    setIsProfileOpen(false)

      }
  return (
   
     <SIDEBAR className="d-flex">
      <div
        className={`container d-flex flex-row ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
 <div className="nav-container d-flex flex-column py-5 justify-content-between h-100 px-0">
 <div className="wrapper d-flex flex-column justify-content-between">
          <div className="logo">
            <Link className="react-router-link" to={PATH_PAGE.home}>
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="nav-links d-flex flex-column pl-5">
            {sidebarConfig.map(({ link, icon, title }, index) => (
              <Link
              className={`nav-link react-router-link ${activeTab === title ? "active-tab" : ""}`}
                to={link}
                key={index}
                onClick={()=> handleNavClick(title)}
              >
                <Icon icon={icon} />
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="log-out">
          <button to="" className="react-router-link nav-link" onClick={logout}>
            <Icon
              icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
              rotate={2}
            />
            Log out
          </button>
        </div>
 </div>
      <Closer className="d-flex" onClick={()=>{
        setIsSidebarOpen(false)
      }}></Closer>
      </div>
    </SIDEBAR>
  );
}

const SIDEBAR = styled.div`
  background-color: black;
  height: 100vh;
  width: 20%;
  position: relative;
  .container {
    width: 20%;
    height: 100vh;
    align-items: center;
    position: fixed;
    background-color: black;
  }
  .nav-container{
    width: 100%;
    
  }
  .wrapper {
    height: 60% !important;
    width: 100%;
    align-items: center;
  }
  .nav-links {
    gap: 30px;
    width: 100%;
  }
  .nav-link {
    font-weight: 700 !important;
    color: #b3b3b3 !important;
    display: flex;
    justify-content: left !important;
    gap: 20px;
    align-items: center;

    &:hover {
      color: white !important;
      transition: 0.3s;
    }
  }
  .active-tab{
    border-right: 5px solid white !important;
color: white !important;
  }
  .logo {
    height: 80px;
    width: 80px;
    display: flex;
    border-radius: 50%;
    background-color: white;
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: contain;
      overflow: hidden;    
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 1100px) {
    width: 0 !important;
    .container {
      background: black;
    }
    .closed {
      margin-left: -1000px;
      transition: 0.3s;
    }
    .opened {
      width: 250px;
      margin-left: 0;
      transition: 0.3s;
      display: flex;
      position: fixed !important;
      z-index: 9999;
    }
  }
  @media screen and (max-width: 550px) {
    .container{
      padding-right: 0 !important;
      padding-left: 0 !important;

      background-color: transparent;
    }
    .opened{
      width: 100%;
    }
    .nav-container{
      width: 250px;
      background-color: black;
    }
  } 
`;
const Closer = styled.div`
display: none;
background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  z-index:9999;
@media screen and (max-width: 500px) {
display: flex;
height: 100%;
width: calc(100vw - 250px);
  } 
`