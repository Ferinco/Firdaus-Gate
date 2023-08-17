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
  ]);
}
