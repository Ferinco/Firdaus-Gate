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
        style={{ backgroundColor: "#f1f1f1"}}
        className="outlet "
      >
        <StudentNavbar />
        <Outlet />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative !important;
  .outlet {
    width: 80%;
    height: 100vh;
  }
  @media screen and (max-width: 1100px) {
    .outlet {
      width: 100% !important;
    }
  }
`;
