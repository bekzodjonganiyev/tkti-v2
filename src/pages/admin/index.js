import React from "react";
import { Link, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

import "./index.css";

import Sidebar from "../../components/admin/sidebar/Sidebar";
import Login from "./login/Login";

const Admin = () => {
  // const a = jwtDecode(localStorage.getItem("token"));
  // console.log("iat", a.iat);
  // console.log("exp", a.exp);
  // const date = new Date();
  // console.log(String(date.getDate()).padStart(2, 0));
  // console.log(date.getFullYear());
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  if (token) {
    return (
      <main>
        <Sidebar />
        <section className="main-panel">
          <nav></nav>
          <Outlet />
        </section>
      </main>
    );
  } else {
    return <Login />;
  }
};

export default Admin;
