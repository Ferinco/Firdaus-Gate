import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { PATH_AUTH } from "./paths";
import { useAuth } from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { currentUser } = useAppContext();
  const auth = useAuth();
  const currentRole = auth.role;

  const location = useLocation();
  // const isAccessable = currentUser.includes(currentRole);

  // if (isAccessable) {
    return <Outlet />;
  // }
  // return <Navigate to={PATH_AUTH.login} state={{ from: location }} replace />;
};

export default RequireAuth;
