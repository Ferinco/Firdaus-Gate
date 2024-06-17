import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { useAppContext } from "../../../contexts/Context";
import { PATH_PAGE } from "../../../routes/paths";
import { useAuth } from "../../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
const sidebarConfig = [
  {
    id: 1,
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.admin.index,
    title: "Dashboard",
  },
  {
    id: 2,
    icon: "mdi:google-classroom",
    link: PATH_DASHBOARD.admin.teachersList,
    title: "Teachers",
  },
  {
    id: 3,
    icon: "fluent:people-team-16-filled",
    link: PATH_DASHBOARD.admin.studentsList,
    title: "Students",
  },
  {
    id: 4,
    icon: "fluent-mdl2:poll-results",
    link: PATH_DASHBOARD.admin.reports,
    title: "Results",
  },
  // {
  //   id: 6,
  //   icon: "uil:create-dashboard",
  //   link: PATH_DASHBOARD.admin.news,
  //   title: "News",
  // },
  {
    id: 5,
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.admin.applications,
    title: "Applications",
  },
  {
    id: 6,
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.admin.createTerm,
    title: "Term",
  },
  {
    id: 7,
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.admin.applications,
    title: "General",
  },
  {
    id: 8,
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.admin.applications,
    title: "Classes and Subjects",
  },
  {
    id: 9,
    icon: "uil:create-dashboard",
    link: PATH_DASHBOARD.admin.applications,
    title: "News",
  },
];

export default function AdminSidebar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { isSidebarOpen, setIsSidebarOpen, setIsProfileOpen } = useAppContext();
  const { logout } = useAuth();
  const dispatch = useDispatch();

  function handleNavClick(title) {
    setActiveTab(title);
    setIsSidebarOpen(false);
    setIsProfileOpen(false);
  }

  return (
    <SIDEBAR>
      <div
        className={`container d-flex flex-row ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
        <div className="nav-container d-flex flex-column py-3 justify-content-between h-100 px-0">
          <div className="wrapper d-flex flex-column justify-content-between gap-3">
            <div className="bar-header w-100 d-flex justify-content-start">
              <p>Admin Console</p>
            </div>
            <div className="nav-links d-flex flex-column">
              {sidebarConfig.map(({ link, icon, title }, index) => (
                <Link
                  className={`nav-link react-router-link ${
                    activeTab === title ? "active-tab" : ""
                  }`}
                  to={link}
                  key={index}
                  onClick={() => handleNavClick(title)}
                >
                  <div className="child-link">
                    <Icon icon={icon} className="icon" />
                    {title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="log-out nav-links d-flex flex-column">
            <Link
              className={`nav-link react-router-link ${
                activeTab === "Settings" ? "active-tab" : ""
              }`}
              to={PATH_DASHBOARD.admin.accountSettings}
              onClick={() => handleNavClick("Settings")}
            >
              {" "}
              <div className="child-link">
                <Icon icon="fluent:settings-20-regular" className="icon" />{" "}
                Settings
              </div>
            </Link>
            <button
              to=""
              className="react-router-link nav-link"
              onClick={logout}
            >
              <div className="child-link">
                <Icon
                  icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
                  rotate={2}
                  className="icon"
                />
                Log out
              </div>
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
  background-color: black;
  height: 100vh;
  width: 20%;
  position: relative;
  z-index: 9999;
  .container {
    width: 20%;
    height: 100vh;
    align-items: center;
    position: fixed;
    background-color: black;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .nav-container {
    width: 100%;
  }
  .wrapper {
    height: fit-content !important;
    width: 100%;
    align-items: center;
    padding-right: 0 !important;
  }
  .nav-links {
    width: 100% !important;
  }
  .nav-link {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 15px;
    border-left: 2px solid black;

    .child-link {
      display: flex;
      font-weight: 300 !important;
      color: white !important;
      justify-content: left !important;
      align-items: center;
      padding-left: 15px;
      gap: 20px;
    }
    &:hover {
      color: white !important;
      transition: 0.3s;
      border-left: 2px solid white;
    }
    .icon {
      /* font-size: 22px !important; */
      height: 30px !important;
      width: 18px !important;
    }
  }
  .bar-header {
    color: white;
    padding-left: 15px;
  }
  .active-tab {
    border-left: 2px solid white;
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
  .log-out {
    .nav-link {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 15px;
      border-left: 2px solid black;
      .child-link {
        display: flex;
        font-weight: 300 !important;
        color: white !important;
        justify-content: left !important;
        align-items: center;
        padding-left: 15px;
        gap: 20px;
      }
      &:hover {
        color: white !important;
        transition: 0.3s;
        border-left: 2px solid white;
      }
      .icon {
        /* font-size: 22px !important; */
        height: 30px !important;
        width: 18px !important;
      }
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
      z-index: 2;
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
      background-color: black;
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
