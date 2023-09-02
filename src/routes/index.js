import React from "react";
import { Link, useRoutes } from "react-router-dom";
import Layout from "../layout/external";
import { Home } from "../pages";
import Dashboard from "../pages/dashboard";
import DashboardLayout from "../layout/dashboard";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "auth",

      children: [{ path: "login", element: <Login /> }],
    },
    {
      path: "portal",
      element: <DashboardLayout />,
      children: [{ path: "/portal", element: <Dashboard /> }],
    },
  ]);
}
