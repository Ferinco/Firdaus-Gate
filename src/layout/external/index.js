import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    
    </>
  );
}
