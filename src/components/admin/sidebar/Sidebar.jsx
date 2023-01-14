import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="">
      <div className="side-logo">TCTI Admin</div>
      <ul className="">
        <li>
          <Link className="side-link" to="/admin">
            Dashboard
          </Link>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/fakultet">
            Fakultetlar
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/kafedra">
            Kafedralar
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/bolim">
            Bo'lim
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/markaz">
            Markaz
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/faoliyat">
            Faoliyat
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/syllabus">
            Syllabus
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/elon">
            Elon
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/yangilik">
            Yangilik
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/yangilik">
            Yangilik
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/yangilik">
            Yangilik
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/yangilik">
            Yangilik
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/yangilik">
            Yangilik
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/yangilik">
            Yangilik
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
