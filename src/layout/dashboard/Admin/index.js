import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import { styled } from "styled-components";
import AdminNavbar from "./adminNavbar";
import { Helmet } from "react-helmet";

export default function AdminDashboardLayout() {
  return (
    <Wrapper className="d-flex flex-row">
                         <Helmet>
        <title>Admin Dashboard | FGMS</title>
      </Helmet>
      <AdminSidebar />
      <div
        style={{ backgroundColor: "#f5f5f5"}}
        className="outlet"
      >
        <AdminNavbar />
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
    width: 80%;
    height: 100vh;
    
  }
  .div{
    background-color: #f5f5f5 !important;
    margin-top: 60px !important;

  }
  @media screen and (max-width: 1100px) {
    .outlet {
      width: 100% !important;
    }
  }
`;
