import styled from "styled-components";
import React, {useState} from "react";
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
    title: "My Teachers",
  },
  {
    icon: "la:chalkboard-teacher",
    link: PATH_DASHBOARD.student.results,
    title: "Results",
  },
];

export default function StudentSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("Dashboard")
  const { isSidebarOpen, setIsSidebarOpen ,setIsProfileOpen} =
    useAppContext();
    function handleNavClick(title){
      setActiveTab(title)
      console.log(activeTab)
      setIsSidebarOpen(false)
      setIsProfileOpen(false)
        }
  return (
    <SIDEBAR>
      <div
        className={`container d-flex flex-row ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
<div className="nav-container d-flex flex-column py-5 justify-content-between h-100 px-0">
        <div className="wrapper d-flex flex-column justify-content-between">
          <div className="logo">
            <Link className="react-router-link" to={PATH_PAGE.home}>
              <img src="/images/logo.png" />
            </Link>
          </div>
          <div className="nav-links d-flex flex-column ">
            {sidebarConfig.map(({ icon, link, title }, index) => (
              <Link
                to={link}
                key={index}
                className={`nav-link react-router-link px-5 py-2 ${activeTab === title ? "active-tab" : ""}`}
                onClick={()=> handleNavClick(title)}
              >
                <Icon icon={icon} />
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="log-out d-flex flex-column pl-4">
          <Link to="" className="react-router-link nav-link pl-5 py-1">
            <Icon icon="ic:baseline-settings" />
            Settings
          </Link>
          <div
            className="react-router-link nav-link pl-5 py-1"
            onClick={logout}
          >
            <Icon
              icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
              rotate={2}
            />
            Log out
          </div>
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
  width: 20%;
  position: relative;
  .container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    width: 20%;
    height: 100vh;
    align-items: center;
    position: fixed;
  }
  .nav-container {
    width: 100%;
  }
  .wrapper {
    height: 60% !important;
    width: 100%;
    align-items: center;
  }
  .nav-links {
    gap: 30px !important;
    width: 85%;
  }
  .nav-link {
    color: #737373 !important;
    font-weight: 700 !important;
    display: flex;
    align-items: center;
    gap: 20px;
    &:hover{
      transition: 0.3s;
    }
    @media screen and (max-width:1342px) {
      padding-left: 24px !important;
      padding-right: 24px !important;

    }
  }
  .active-tab{
    color:  #9ea0e7 !important;
    background-color: #e6ffff;
  }
  .logo {
    height: 70px;
    width: 70px;
    display: flex;
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
  .log-out {
    gap: 30px;
    width: 100%;
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
      width: 250px;
      margin-left: 0;
      transition: 0.3s;
      display: flex;
      position: fixed !important;
      z-index: 999;
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

