import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { PATH_AUTH } from "./paths";
const RequireAuth = ({ allowedRoles }) => {
  const { currentUser } = useAppContext();
  const location = useLocation();
  const role = localStorage.getItem("user")
  return currentUser?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to={role === "student" ?  PATH_AUTH.login : role === "teacher" ? PATH_AUTH.teacher : PATH_AUTH.teacher} state={{ from: location }} 
      replace />
  );
};

export default RequireAuth;
