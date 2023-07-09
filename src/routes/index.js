import React from "react";
import { Link, useRoutes } from "react-router-dom";
import Layout from "../layout";
import { Home } from "../pages";
import Dashboard from "../pages/dashboard";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "portal",
      element: <Layout />,
      children: [{ path: "/portal", element: <Dashboard /> }],
    },
  ]);
}
