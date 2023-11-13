import React from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "./sidebar";
import styled from "styled-components";
import StudentNavbar from "./studentNavbar";
import { Helmet } from "react-helmet";

export default function StudentDashboardLayout() {
  return (
    <Wrapper className="d-flex flex-row">
             <Helmet>
        <title>Student Dashboard | FGMS</title>
        <meta name="description" content="welcome back to your dashboard, check results, view assignments and do many more." />

        <meta name="keywords" content="student, pupil, dashboard" />
      </Helmet>
      <StudentSidebar />
      <div
        style={{ backgroundColor: "#f5f5f5"}}
        className="outlet "
      >
        <StudentNavbar />
        <div className="div">

        <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative !important;
  .outlet {
    width: calc(100vw - 280px);
   height: 100vh;
   background-color: #f5f5f5;
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
