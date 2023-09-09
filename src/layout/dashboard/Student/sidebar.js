import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../Context";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { PATH_PAGE } from "../../../routes/paths";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const handleLogOut= ()=>{
    localStorage.removeItem('user')
    navigate(PATH_PAGE.home)
    }
  const { isSidebarOpen, isDashboardClicked, setIsDashboardClicked } =
    useAppContext();
  return (
    <SIDEBAR>
      <div
        className={`container d-flex flex-column py-5 justify-content-between h-100 px-0 ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
        <div className="wrapper d-flex flex-column">
          <div className="logo">
            <Link react-router-link to={PATH_PAGE.home}>
              <img src="/images/logo.png" />
            </Link>
          </div>
          <div className="nav-links d-flex flex-column pl-4">
            {sidebarConfig.map(({ icon, link, title }, index) => (
              <Link
                to={link}
                key={index}
                className="nav-link react-router-link pl-5 py-1"
              >
                <Icon icon={icon} />
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="log-out d-flex flex-column pl-4">
          <Link className="react-router-link nav-link pl-5 py-1">
            <Icon icon="ic:baseline-settings" />
            Settings
          </Link>
          <Link className="react-router-link nav-link pl-5 py-1">
            <Icon
              icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
              rotate={2}
              onClick={handleLogOut}
            />
            Log out
          </Link>
        </div>
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
    height: 1000px;
    align-items: center;
    position: fixed;
  }
  .wrapper {
    height: 500px;
    width: 100%;
    gap: 70px;
    align-items: center;
  }
  .nav-links {
    gap: 30px !important;
    width: 100%;
  }
  .nav-link {
    color: #737373 !important;
    font-weight: 700 !important;
    display: flex;
    align-items: center;
    gap: 20px;
    &:hover,
    &:active {
      color: black !important;
      transition: 0.3s;
      border-right: 5px solid black;
    }
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
`;
