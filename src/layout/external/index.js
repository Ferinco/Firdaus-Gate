import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContactUS } from "../../components/landing";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <End> */}
        <ContactUS />
        <Footer />
      {/* </End> */}
    </>
  );
}
const End = styled.div`
    background-image: url("https://res.cloudinary.com/duvwweuhj/image/upload/v1702391861/Firdaus/Screenshot_20221226-182654_1_eu6doz.jpg") !important;
    margin: 0 !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    background-attachment: fixed;

`;
