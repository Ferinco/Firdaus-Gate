import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../Context";
import { PATH_DASHBOARD } from "../../../routes/paths";
// import { PATH_DASHBOARD } from "../../../routes/paths";
export default function StudentSidebar() {
  const { isSidebarOpen } = useAppContext();
  return (
    <SIDEBAR>
      <div className={`container d-flex flex-column py-5 justify-content-between h-100 px-0 ${isSidebarOpen ? 'opened' : 'closed'}`}>
      <div className="wrapper d-flex flex-column">
      <div className="logo">
          <img src="/images/logo.png" />
        </div>
        <div className="nav-links d-flex flex-column pl-4">
          <Link className="nav-link react-router-link pl-5 py-1" to={PATH_DASHBOARD.student.index}><Icon icon="uil:create-dashboard"/>Dashboard</Link>
          <Link className="nav-link react-router-link pl-5 py-1" to={PATH_DASHBOARD.student.mySubjects}><Icon icon="material-symbols:library-books-outline" />Subjects</Link>
          <Link className="nav-link react-router-link pl-5 py-1" to={PATH_DASHBOARD.student.myTeachers}><Icon icon="la:chalkboard-teacher" />My Teachers</Link>

        </div>
      </div>
        {/* <div className="log-out">
          <Link className="react-router-link nav-link">Profile</Link>
          <Link className="react-router-link nav-link">Log out</Link>
        </div> */}
      </div>
    </SIDEBAR>
  );
}
const SIDEBAR = styled.div`
  background-color: white;
  height:100vh;
  width:20%;
  position: relative;
  .container{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    width:20%;
    height:1000px;
    align-items: center;
    position:fixed;
  }
.wrapper{
  height: 500px;
  width:100%;
  gap: 70px;
  align-items: center;
}
.nav-links{
  gap:30px !important;
  width:100%;
}
.nav-link{
  color:#737373 !important;
  font-weight:700 !important;
  display:flex;
  align-items:center;
  gap:20px;
  &:hover, &:active{
    color:blue !important;
    transition:0.3s;
    border-right: 5px solid blue;
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
@media screen and (max-width: 1100px){
  width:0 !important;
  .container{
    background:white;
  }
  .closed{
  margin-left: -1000px;
  transition: 0.3s;

 }
 .opened{
  width:250px;
  margin-left: 0;
  transition:0.3s;
  display: flex;
  position:fixed !important;z-index:999;
 }
}

`;