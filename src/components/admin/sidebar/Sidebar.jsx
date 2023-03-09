import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="">
      <div className="side-logo">TCTI Admin</div>
      <ul className="ul-class">
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
          <NavLink className="side-link" to="/admin/rektorat">
            Rahbariyat
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
          <NavLink className="side-link" to="/admin/student-bolim">
            Student Bolim
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/sertifikat">
            Sertifikat
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/nashriyot">
            Mutbuot
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/famous-student">
            Mashxur Bituvchilar
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/statistics-of-student">
            Bitirucvhilar Statistikasi
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/statistics-of-student">
            Qabul
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/media">
            Media
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/banner">
            Banner
          </NavLink>
        </li>
        <li>
          <NavLink className="side-link" to="/admin/xalqaro-bolim">
            Xalqaro Bolim
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
