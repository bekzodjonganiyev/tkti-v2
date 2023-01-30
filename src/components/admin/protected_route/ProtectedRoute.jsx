import React, { useContext, useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";

import { Context } from "../../../context";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const {globalUrl} = useContext(Context)

  useEffect(() => {
    fetch(`${globalUrl}/kafedra_hodim/all`, {
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 498){
          navigate("/login")
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return token ? <>{children}</> : <Navigate replace to="/login" />;
}
