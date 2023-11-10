import React from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "./sidebar";
import styled from "styled-components";
import StudentNavbar from "./studentNavbar";

export default function StudentDashboardLayout() {
  return (
    <Wrapper className="d-flex flex-row">
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
