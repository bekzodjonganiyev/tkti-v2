import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Login } from "../../pages";

import apiClientWithFetch from "../../services/apiClientWithFetch";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const checkUser = async () => {
    const res = await apiClientWithFetch.get("kafedra_hodim/all");
    if (res?.status !== 200) {
      navigate("/login");
    } else {

    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (true) return <div>{children}</div>;
  else return <Navigate to={"/login"} replace={<Login />} />;
};
