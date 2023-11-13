import { Outlet } from "react-router-dom";
import React from "react";
import TeacherSidebar from "./sidebar";
import styled from "styled-components";
import TeacherNavbar from "./teacherNavbar";
import { Helmet } from "react-helmet";

export default function TeacherDashboardLayout() {
  return (
    <Wrapper className="d-flex flex-row">
             <Helmet>
        <title>Teacher Dashboard | FGMS</title>
      </Helmet>
      <TeacherSidebar />
      <div
        style={{ backgroundColor: "#f5f5f5"}}
        className="outlet"
      >
        <TeacherNavbar />
        <div className="div">
        <Outlet/>
        </div>

      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  .outlet {
    width: calc(100vw - 280px);
   height: 100vh;
  }
  .div{
    background-color: #f5f5f5 !important;
    margin-top: 80px !important;
  }
  @media screen and (max-width: 1100px) {
    .outlet {
      width: 100% !important;
      
    }
  }
`;
