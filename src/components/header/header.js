import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import "./header.css";

import logo from "../../files/logo.png";
import gerb from "../../files/gerb.png";

import HeaderLang from "./lang";
import { Context } from "../../context";

const Header = () => {
  const location = useLocation();
  const { lang, setLang, setRefresh } = useContext(Context);
  const [ecranPosition, setEcranPosition] = useState(100);
  const [showHeader, setShowHeader] = useState(false);
  const changeSize = (arg) => {
    const Page = document.body;
    if (arg === "minus") {
      if (ecranPosition >= 90) {
        setEcranPosition(ecranPosition - 5);
        Page.style.zoom = ecranPosition - 5 + "%";
      }
    }
    if (arg === "default") {
      setEcranPosition(100);
      Page.style.zoom = 100 + "%";
    }
    if (arg === "plus") {
      if (ecranPosition <= 109) {
        setEcranPosition(ecranPosition + 5);
        Page.style.zoom = ecranPosition + 5 + "%";
      }
    }
  };

  let content = null;

  if (
    location.pathname === "/admin" ||
    location.pathname === "/admin/fakultet" ||
    location.pathname === "/admin/kafedra" ||
    location.pathname === "/admin/bolim" ||
    location.pathname === "/admin/markaz" ||
    location.pathname === "/admin/faoliyat" ||
    location.pathname === "/admin/elon" ||
    location.pathname === "/admin/syllabus" ||
    location.pathname === "/admin/yangilik"
  ) {
    content = null;
  } else {
    content = (
      <header className={showHeader ? "header responsive__header" : "header"}>
        <a href="/" className="logo">
          <img src={logo} alt="tkti logosi" />
          <p>
            <br />
            {HeaderLang[lang].logo[0]} <br />
            {HeaderLang[lang].logo[1]} <br />
            {HeaderLang[lang].logo[2]}
          </p>
        </a>

        <div className={`header__right ${showHeader ? "show__header" : ""}`}>
          <div className="header__top">
            <div
              onClick={() => setShowHeader(false)}
              className="header__nav close__header"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="header__top__main">
              <a className="header__nav" href="/qabul">
                {HeaderLang[lang].qabul}
              </a>
              <a className="header__nav" href="/talabalar">
                {HeaderLang[lang].students}
              </a>
              <a className="header__nav" href="/bitiruvchilar">
                {HeaderLang[lang].graduates}
              </a>

              <div className="dropdown">
                <h3 className="dropbtn">
                  {HeaderLang[lang].structure[0]}
                  <i className="fa-solid fa-angle-right menu-icon"></i>
                </h3>
                <div className="dropdown-content">
                  <a className="header__nav submenu__item" href="/rektorat">
                    {HeaderLang[lang].structure[1]}
                  </a>
                  <a className="header__nav submenu__item" href="/fakultetlar">
                    {HeaderLang[lang].structure[2]}
                  </a>
                  <a className="header__nav submenu__item" href="/kafedralar">
                    {HeaderLang[lang].structure[3]}
                  </a>
                  <a
                    className="header__nav submenu__item"
                    href="/bolim-va-markazlar"
                  >
                    {HeaderLang[lang].structure[4]}
                  </a>
                  <a className="header__nav submenu__item" href="/filiallar">
                    {HeaderLang[lang].structure[5]}
                  </a>
                  <a
                    className="header__nav submenu__item"
                    href="/yoshlar-ittifoqi"
                  >
                    {HeaderLang[lang].structure[6]}
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <h3 className="dropbtn">
                  {HeaderLang[lang].activity[0]}
                  <i className="fa-solid fa-angle-right menu-icon"></i>
                </h3>
                <div className="dropdown-content">
                  <a
                    className="header__nav submenu__item"
                    href="/moliyaviy-faoliyat"
                  >
                    {HeaderLang[lang].activity[1]}
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <h3 className="dropbtn">
                  {HeaderLang[lang].mytkti[0]}
                  <i className="fa-solid fa-angle-right menu-icon"></i>
                </h3>
                <div className="dropdown-content">
                  <a
                    className="header__nav submenu__item"
                    href="https://185.217.131.79/"
                  >
                    {HeaderLang[lang].mytkti[1]}
                  </a>
                  <a
                    className="header__nav submenu__item"
                    href="https://tktiyf.uz/"
                  >
                    {HeaderLang[lang].mytkti[2]}
                  </a>
                  <a
                    className="header__nav submenu__item"
                    href="https://student.tcti.uz/dashboard/login"
                  >
                    {HeaderLang[lang].mytkti[3]}
                  </a>
                  <a
                    className="header__nav submenu__item"
                    href="https://rector.tcti.uz/"
                  >
                    {HeaderLang[lang].mytkti[4]}
                  </a>
                  <a
                    className="header__nav submenu__item"
                    href="https://hemis.tcti.uz/dashboard/login"
                  >
                    {HeaderLang[lang].mytkti[5]}
                  </a>
                </div>
              </div>
            </div>

            <div className="header__top__icon">
              <a className="header__nav" href="/simvollar">
                <img className="gerb__img" src={gerb} alt="gerb" />
              </a>
              <div className="dropdown">
                <i className="dropbtn fa-solid fa-eye"></i>

                <div className="dropdown-content icon__wrapper">
                  <h3
                    onClick={() => changeSize("minus")}
                    className="header__nav submenu__item"
                  >
                    A-
                  </h3>
                  <h3
                    onClick={() => changeSize("default")}
                    className="header__nav submenu__item"
                  >
                    A
                  </h3>
                  <h3
                    onClick={() => changeSize("plus")}
                    className="header__nav submenu__item"
                  >
                    A+
                  </h3>
                </div>
              </div>
              <div
                onClick={() => document.body.classList.toggle("greyscale")}
                className="header__nav"
              >
                <i className="fa-solid fa-circle-half-stroke fill"></i>
              </div>

              <div className="dropdown">
                <h3 className="dropbtn">
                  {" "}
                  {lang.toUpperCase()}{" "}
                  <i className="fa-solid fa-angle-right menu-icon"></i>
                </h3>

                <div className="dropdown-content icon__wrapper">
                  <h3
                    onClick={() => (setLang("uz"), setRefresh(true))}
                    className="header__nav submenu__item"
                  >
                    UZ
                  </h3>
                  <h3
                    onClick={() => (setLang("ru"), setRefresh(true))}
                    className="header__nav submenu__item"
                  >
                    Ru
                  </h3>
                  <h3
                    onClick={() => (setLang("en"), setRefresh(true))}
                    className="header__nav submenu__item"
                  >
                    En
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <div className="dropdown">
              <h3 className="dropbtn">
                {HeaderLang[lang].institut[0]}
                <i className="fa-solid fa-angle-right menu-icon"></i>
              </h3>
              <div className="dropdown-content">
                <div className="d-flex">
                  <div className="institut__card">
                    <a
                      className="header__nav submenu__item"
                      href="/faoliyat-hujjatlari"
                    >
                      {HeaderLang[lang].institut[1]}
                    </a>
                    <a
                      className="header__nav submenu__item"
                      href="/xalqaro-aloqalar"
                    >
                      {HeaderLang[lang].institut[2]}
                    </a>
                    <a
                      className="header__nav submenu__item"
                      href="/tkti-ish-rejasi"
                    >
                      {HeaderLang[lang].institut[3]}
                    </a>
                    <a className="header__nav submenu__item" href="/korrupsiya">
                      {HeaderLang[lang].institut[4]}
                    </a>
                  </div>

                  <div className="institut__card">
                    <a
                      className="header__nav submenu__item"
                      href="/biz-bilan-aloqa"
                    >
                      {HeaderLang[lang].institut[5]}
                    </a>
                    <a
                      className="header__nav submenu__item"
                      href="/interaktiv-hizmatlar"
                    >
                      {HeaderLang[lang].institut[6]}
                    </a>
                    <a className="header__nav submenu__item" href="/rektorat">
                      {HeaderLang[lang].institut[7]}
                    </a>
                    <a className="header__nav submenu__item" href="/litsey">
                      {HeaderLang[lang].institut[8]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <h3 className="dropbtn">
                {HeaderLang[lang].ilmiy[0]}{" "}
                <i className="fa-solid fa-angle-right menu-icon"></i>
              </h3>
              <div className="dropdown-content">
                <a
                  className="header__nav submenu__item"
                  href="/institut-loyihalari"
                >
                  {HeaderLang[lang].ilmiy[1]}
                </a>
                <a
                  className="header__nav submenu__item"
                  href="/startup-loyihalar"
                >
                  {HeaderLang[lang].ilmiy[2]}
                </a>
              </div>
            </div>

            <div className="dropdown">
              <h3 className="dropbtn">
                {HeaderLang[lang].talim[0]}{" "}
                <i className="fa-solid fa-angle-right menu-icon"></i>
              </h3>
              <div className="dropdown-content">
                <a className="header__nav submenu__item" href="/dars-jadvali">
                  {HeaderLang[lang].talim[1]}
                </a>
                <a
                  className="header__nav submenu__item"
                  href="https://www.dropbox.com/s/mhexwrmj4s638if/1.PDF?dl=0"
                >
                  {HeaderLang[lang].talim[2]}
                </a>
              </div>
            </div>

            <div className="dropdown">
              <h3 className="dropbtn">
                {HeaderLang[lang].fakultet[0]}{" "}
                <i className="fa-solid fa-angle-right menu-icon"></i>
              </h3>
              <div className="dropdown-content">
                <a
                  className="header__nav submenu__item"
                  href="/fakultetlar/menejment-va-kasb-talimi-fakulteti"
                >
                  {HeaderLang[lang].fakultet[1]}
                </a>
                <a
                  className="header__nav submenu__item"
                  href="/fakultetlar/oziq-ovqat-mahsulotlari-texnologiyasi-fakulteti"
                >
                  {HeaderLang[lang].fakultet[2]}
                </a>
                <a
                  className="header__nav submenu__item"
                  href="/fakultetlar/noorganik-moddalar-kimyoviy-texnologiyasi-fakulteti"
                >
                  {HeaderLang[lang].fakultet[3]}
                </a>
                <a
                  className="header__nav submenu__item"
                  href="/fakultetlar/yoqilgi-va-organik-birikmalar-kimyoviy-texnologiyasi-fakulteti"
                >
                  {HeaderLang[lang].fakultet[4]}
                </a>
                <a
                  className="header__nav submenu__item"
                  href="/fakultetlar/vinochilik-texnologiyasi-va-sanoat-uzumchiligi-fakulteti"
                >
                  {HeaderLang[lang].fakultet[5]}
                </a>
              </div>
            </div>

            <a
              className="header__nav"
              target="_blank"
              href="https://akbt.online/uz"
            >
              {HeaderLang[lang].library}
            </a>
            <a className="header__nav" href="/biz-bilan-aloqa">
              {HeaderLang[lang].contact}
            </a>
          </div>
        </div>
        <div
          onClick={() => setShowHeader(!showHeader)}
          className="header__nav burger"
        >
          {showHeader ? (
            <i className="fa-solid fa-rectangle-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </header>
    );
  }

  return content;
};

export default Header;
