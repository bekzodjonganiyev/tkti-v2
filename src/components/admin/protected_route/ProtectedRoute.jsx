import React from "react";
import { Route, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function ProtectedRoute({ children }) {
  const hasUser = localStorage.getItem("token");

  return hasUser ? <>{children}</> : <Navigate replace to="/login"  />;
}
