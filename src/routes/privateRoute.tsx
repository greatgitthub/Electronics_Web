import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getValidToken } from "../lib/auth";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const storedToken = localStorage.getItem("token");
  const validToken = getValidToken();

  if (!storedToken) {
    return (
      <Navigate
        to="/"
        replace
        state={{
          from: location.pathname,
          reason: "Please log in to continue.",
        }}
      />
    );
  }

  if (!validToken) {
    return (
      <Navigate
        to="/"
        replace
        state={{
          from: location.pathname,
          reason: "Your session expired. Please log in again.",
        }}
      />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
