import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { Home } from "../pages";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}
