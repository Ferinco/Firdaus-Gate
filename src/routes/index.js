import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import { Home } from "../pages";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}
