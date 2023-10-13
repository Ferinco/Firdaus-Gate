import { Outlet } from "react-router-dom";
import React from "react";
import TeacherSidebar from "./sidebar";
import styled from "styled-components";
import TeacherNavbar from "./teacherNavbar";

export default function TeacherDashboardLayout() {
  return (
    <Wrapper className="d-flex flex-row">
      <TeacherSidebar />
      <div
        style={{ backgroundColor: "#f1f1f1", height: "100%" }}
        className="outlet"
      >
        <TeacherNavbar />
        <Outlet />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  .outlet {
    width: 80%;
    height: 100% !important;
  }
  @media screen and (max-width: 1100px) {
    .outlet {
      width: 100% !important;
    }
  }
`;
