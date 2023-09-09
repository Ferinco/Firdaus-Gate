import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { PATH_AUTH } from "./paths";
const RequireAuth = () => {
  const { currentUser } = useAppContext();
  const location = useLocation();
  return currentUser?.user ? (<Outlet /> , console.log(currentUser)) : <Navigate to={PATH_AUTH.login} state ={{from : location}} replace/>;
};


export default RequireAuth;
