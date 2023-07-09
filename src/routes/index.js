import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import { Home, Login, StartAdmission } from "../pages";

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
      path: "admission",
      element: <Layout />,
      children: [{ path: "", element: <StartAdmission /> }],
    },
  ]);
}
