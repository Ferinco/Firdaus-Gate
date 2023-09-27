import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PATH_DASHBOARD } from "../routes/paths";

// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array,
  children: PropTypes.node,
};

export default function RoleBasedGuard({ children, accessibleRoles }) {
  const { role } = useAuth();
  const currentRole = role;
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!pathname.includes("student")) {
      if (currentRole === "student") {
        return navigate(PATH_DASHBOARD.student.index, { replace: true });
      }
    }
    if (!pathname.includes("teacher")) {
      if (currentRole === "teacher") {
        return navigate(PATH_DASHBOARD.teacher.index, { replace: true });
      }
    }
    if (!pathname.includes("admin")) {
      if (currentRole === "admin") {
        return navigate(PATH_DASHBOARD.admin.index, { replace: true });
      }
    }
    return;
  }, [pathname, currentRole, navigate]);

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <div className="container">
        <div className="alert">
          <div className="alert-title">Permission Denied</div>
          <p>You do not have permission to access this page</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
