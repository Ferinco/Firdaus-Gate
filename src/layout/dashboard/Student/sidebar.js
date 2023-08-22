import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../routes/paths";
// import { PATH_DASHBOARD } from "../../../routes/paths";
export default function StudentSidebar() {
  return (
    <SIDEBAR>
      <div className="container d-flex flex-column py-5 justify-content-between h-100">
      <div className="wrapper d-flex flex-column justify-content-between">
      <div className="logo">
          <img src="/images/logo.png" />
        </div>
        <div className="nav-links d-flex flex-column">
          <Link className="nav-link react-router-link" to={PATH_DASHBOARD.student.index}>Dashboard</Link>
          <Link className="nav-link react-router-link" to={PATH_DASHBOARD.student.mySubjects}>Subjects</Link>
          <Link className="nav-link react-router-link" to={PATH_DASHBOARD.student.myTeachers}>My Teachers</Link>

        </div>
      </div>
        <div className="log-out">
          <Link className="react-router-link nav-link">Profile</Link>
          <Link className="react-router-link nav-link">Log out</Link>
        </div>
      </div>
    </SIDEBAR>
  );
}
const SIDEBAR = styled.div`
  background-color: black;
  height:100vh;
  width:260px;
  .container{
    border:1px solid white;
    width:100%;
    align-items: center;
  }
.wrapper{
  height: 40%;
  width:100%;
  align-items: center;
}
.nav-links{
  gap:30px;
  width:100%;
}
.nav-link{
  color:#b3b3b3 !important;
  &:hover{
    color:white !important;
    transition:0.3s;
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
`;