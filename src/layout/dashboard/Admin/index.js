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
        style={{ backgroundColor: "#f5f5f5"}}
        className="outlet"
      >
        <AdminNavbar />
        <div className="div py-5">
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
    margin-top: 80px !important;
    padding-left:32px;
    padding-left:32px;

  }
  @media screen and (max-width: 1100px) {
    .div{
      padding-left:24px;
      padding-left:24px;
    }
    .outlet {
      width: 100% !important;
    }
  }
`;
