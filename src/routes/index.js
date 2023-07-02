import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import { Home } from "../pages";
import LoginForm from "../pages/loginpage";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }, { path: "/portal", element: <LoginForm /> }],
    },
  ]);
}
