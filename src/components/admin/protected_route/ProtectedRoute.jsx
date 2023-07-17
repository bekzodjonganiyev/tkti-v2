import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Fetchers } from "../../../services/fetchRequests";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    Fetchers.getData("kafedra_hodim/all", true).then((res) => {
      if (res.error) {
        alert(res.message);
      } else if (res.status === 498) {
        navigate("/login");
      }
    });
  }, [token]);

  return token ? <>{children}</> : <Navigate replace to="/login" />;
}
