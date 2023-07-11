import React from "react";
import { Link, useRoutes } from "react-router-dom";
import Layout from "../layout";
import { Home, Login } from "../pages";
import Dashboard from "../pages/dashboard";

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
      element: <Layout />,
      children: [{ path: "/portal", element: <Dashboard /> }],
    },
  ]);
}
