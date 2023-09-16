import PropTypes from "prop-types";
import React from "react";
import {
  Navigate,
  Outlet,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
// hooks
import { useAuth } from "../hooks/useAuth";
// routes
import { PATH_DASHBOARD } from "../routes/paths";

// ----------------------------------------------------------------------

export default function GuestGuard() {
  const { isAuthenticated, role } = useAuth();

  const [redirect] = useSearchParams();
  const redirectUrl = redirect.get("redirect");
  console.log(redirectUrl);
  if (isAuthenticated) {
    if (redirectUrl) {
      return <Navigate to={redirectUrl} replace />;
    }
    return (
      <>
        {(role === "admin" && <Navigate to={PATH_DASHBOARD.admin.index} />) ||
          (role === "student" && (
            <Navigate to={PATH_DASHBOARD.student.index} />
          )) ||
          (role === "teacher" && (
            <Navigate to={PATH_DASHBOARD.teacher.index} />
          ))}
      </>
    );
  }

  return <Outlet />;
}
