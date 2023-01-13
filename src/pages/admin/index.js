import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar/Sidebar";

import "./index.css";

const Admin = () => {
  return (
    <main>
      <Sidebar />
      <section className="main-panel">
        <nav></nav>
        <Outlet />
      </section>
    </main>
  );
};

export default Admin;
