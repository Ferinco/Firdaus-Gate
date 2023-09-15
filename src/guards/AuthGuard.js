import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";

export default function AuthGuard({ children, loginRoute }) {
  const { isAuthenticated } = useAuth();

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    <Navigate to={loginRoute} />;
  }
  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }
  return <>{children}</>;
}

AuthGuard.prototype = {
  children: PropTypes.node,
  loginRoute: PropTypes.string,
};
