import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import { styled } from "styled-components";
import AdminNavbar from "./adminNavbar";

export default function AdminDashboardLayout() {
  return (
    <Wrapper className="d-flex flex-row">
      <AdminSidebar />
      <div
        style={{ backgroundColor: "#f1f1f1", height: "100%" }}
        className="outlet"
      >
        <AdminNavbar />
        <Outlet />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  .outlet {
    width: 80%;
    min-height: 100vh !important;
    
  }
  @media screen and (max-width: 1100px) {
    .outlet {
      width: 100% !important;
    }
  }
`;
