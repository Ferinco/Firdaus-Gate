import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { useAppContext } from "../../../Context";
export default function TeacherSidebar() {
  const { isSidebarOpen } = useAppContext();
  return (
    <SIDEBAR>
      <div
        className={`container d-flex flex-column py-5 justify-content-between h-100 px-0 ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
        <div className="wrapper d-flex flex-column justify-content-between">
          <div className="logo">
            <img src="/images/logo.png" />
          </div>
          <div className="nav-links d-flex flex-column">
            <Link
              className="nav-link react-router-link"
              to={PATH_DASHBOARD.teacher.index}
            >
              <Icon icon="uil:create-dashboard" />
              Dashboard
            </Link>
            <Link
              className="nav-link react-router-link"
              to={PATH_DASHBOARD.teacher.myStudents}
            >
              <Icon icon="mdi:google-classroom" />
              My Students
            </Link>
            <Link
              className="nav-link react-router-link"
              to={PATH_DASHBOARD.teacher.results}
            >
              <Icon icon="fluent-mdl2:poll-results" />
              Results
            </Link>
          </div>
        </div>
        <div className="log-out">
          <Link className="react-router-link nav-link">
            <Icon
              icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
              rotate={2}
            />
            Log out
          </Link>
        </div>
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
  .wrapper {
    height: 50%;
    width: 100%;
    align-items: center;
  }
  .nav-links {
    gap: 30px;
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
      z-index: 999;
    }
  }
`;
