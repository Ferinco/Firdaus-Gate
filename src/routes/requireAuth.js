import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAppContext } from "../Context";
import { PATH_AUTH } from "./paths";
const RequireAuth = () => {
  const { currentUser } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  return currentUser?.user ? (<Outlet /> , console.log(currentUser)) : navigate(PATH_AUTH.login);
};


export default RequireAuth;
