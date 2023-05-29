import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const Header = () => {
  return (
    <header className="bg-[#063F58]">
      <div className=" container py-4 flex justify-between mx-auto">
        <span className="text-white">Tkti</span>
        <Link
          to={"/adminPanel"}
          className="text-white bg-red-900 p-3 rounded-lg"
        >
          Admin Panelga kirish
        </Link>
      </div>{" "}
    </header>
  );
};
