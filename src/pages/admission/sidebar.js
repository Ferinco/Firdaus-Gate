import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATH_PAGE } from "../../routes/paths";

export default function AdmissionSidebar() {
  return (
    <SIDEBAR>
      <div className="container d-flex flex-column gap-2 justify-content-center align-items-center">
        <div className="logo">
          <Link className="react-router-link" to={PATH_PAGE.home}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <p>Welcome to <b>FIRDAUS-GATE MODEL SCHOOLS</b></p>
      </div>
    </SIDEBAR>
  );
}
const SIDEBAR = styled.div`
  background-color: black;
  height: 100vh;
  width: 25%;
  position: relative;
  z-index:999;
  .container {
    width: 25%;
    height: 100vh;
    align-items: center;
    position: fixed;
    background-color: black;
    padding-right: 0 !important;
    color: white;
    text-align: center;
  }
  .logo {
    height: 90px;
    width: 90px;
    display: flex;
    border-radius: 50%;
    background-color: white;
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: contain;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  @media screen and (max-width:1100px) {
    width: 100%;
    height:200px !important;
      position: fixed;
    .container {
    width: 100%;
    height: 200px !important;
  }
  }
`;
const Closer = styled.div``;
