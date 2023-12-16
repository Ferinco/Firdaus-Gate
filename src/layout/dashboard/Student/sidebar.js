import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../contexts/Context";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { PATH_PAGE } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const sidebarConfig = [
  {
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.student.index,
    title: "Dashboard",
  },
  {
    icon: "material-symbols:library-books-outline",
    link: PATH_DASHBOARD.student.mySubjects,
    title: "Subjects",
  },
  {
    icon: "la:chalkboard-teacher",
    link: PATH_DASHBOARD.student.myTeachers,
    title: "Teachers",
  },
  {
    icon: "fluent-mdl2:poll-results",
    link: PATH_DASHBOARD.student.results,
    title: "Results",
  },
  {
    icon: "la:chalkboard-teacher",
    link: PATH_DASHBOARD.student.assignments,
    title: "Assignments",
  },
];

export default function TeacherSidebar() {
  const { isSidebarOpen, setIsSidebarOpen, setIsProfileOpen } = useAppContext();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("Dashboard");
  function handleNavClick(title) {
    setActiveTab(title);
    console.log(activeTab);
    setIsSidebarOpen(false);
    setIsProfileOpen(false);
  }
  return (
    <SIDEBAR className="d-flex ">
      <div
        className={`container d-flex flex-row px-0 ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
        <div className="nav-container d-flex flex-column py-2 justify-content-between h-100 px-0 pb-3">
          <div className="wrapper d-flex flex-column justify-content-between w-100">
            <div className="logo">
              <Link className="react-router-link" to={PATH_PAGE.home}>
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="nav-links d-flex flex-column pl-0 mt-5">
              {sidebarConfig.map(({ link, icon, title, rotate }, index) => (
                <Link
                  className={`nav-link react-router-link px-5 py-3 ${
                    activeTab === title ? "active-tab" : ""
                  }`}
                  to={link}
                  key={index}
                  onClick={() => handleNavClick(title)}
                >
                  <Icon icon={icon} rotate={rotate} />
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="log-out nav-links d-flex flex-column ">
          <Link
              className={`nav-link react-router-link px-5 py-3 ${
                activeTab === "Settings" ? "active-tab" : ""
              }`}
              to={PATH_DASHBOARD.student.accountSettings}
              onClick={() => handleNavClick("Settings")}
            > <Icon icon="ic:baseline-settings" /> Settings</Link>
            <button
              to=""
              className="react-router-link nav-link px-5 py-3"
              onClick={logout}
            >
              <Icon
                icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
                rotate={2}
              />
              Log out
            </button>

          </div>
        </div>
        <Closer
          className="d-flex"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        ></Closer>
      </div>
    </SIDEBAR>
  );
}

const SIDEBAR = styled.div`
  background-color: white;
  height: 100vh;
  width: 280px;
  position: relative;
  z-index: 9999 !important;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px !important;
  .container {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px !important;
    width: 280px;
    height: 100vh;
    align-items: center;
    position: fixed;
    background-color: white;
  }
  .nav-container {
    width: 100% ;
  }
  .wrapper {
    height: 70% !important;
    width: 100%;
    align-items: center;
    margin-left: 0 !important;
  }
  .nav-links {
width: 100% !important;

  }
  .nav-link {
    color: grey !important;
    display: flex;
    justify-content: left !important;
    gap: 20px;
    align-items: center;
    transition: ease-in-out 0.3s all;
    font-weight: 500 !important;


    &:hover {
    font-weight: 700 !important;
  }
  }
  .active-tab {
    border-right: 5px solid blue !important;
    background-color:#f3f3f3;
    font-weight: 700 !important; 

    /* color: black !important; */
  }
  .logo {
    height: 100px;
    width: 100px;
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
      background: white;
    }
    .closed {
      margin-left: -1000px;
      transition: 0.3s;
    }
    .opened {
      width: 280px;
      margin-left: 0;
      transition: 0.3s;
      display: flex;
      position: fixed !important;
      z-index: 9999;
    }
  }
  @media screen and (max-width: 550px) {
    .container {
      padding-right: 0 !important;
      padding-left: 0 !important;

      background-color: transparent;
    }
    .opened {
      width: 100%;
    }
    .nav-container {
      width: 250px;
      background-color: white;
    }
  }
`;
const Closer = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  z-index: 9999;
  @media screen and (max-width: 500px) {
    display: flex;
    height: 100%;
    width: calc(100vw - 250px);
  }
`;

