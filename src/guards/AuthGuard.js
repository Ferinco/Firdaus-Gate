import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
// hooks
import { useAuth } from "../hooks/useAuth";
import { TeacherLogin } from "../pages/teacher";
import { AdminLogin } from "../pages/admin/";
import { StudentLogin } from "../pages/student/";
// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    if (pathname.includes("admin")) {
      return <AdminLogin />;
    }
    if (pathname.includes("teacher")) {
      return <TeacherLogin />;
    }
    if (pathname.includes("student")) {
      return <StudentLogin />;
    }
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};
