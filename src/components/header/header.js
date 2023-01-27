import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import "./header.css";

import logo from "../../files/logo.png";
import gerb from "../../files/gerb.png";

import HeaderLang from "./lang";
import { Context } from "../../context";
import MyComponent from "./MyComponent";

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
  const result =
    location.pathname.split("/")[1] === "admin" ||
    location.pathname.split("/")[1] === "login";
  if (result) {
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
              <a className="header__nav header_border" href="/qabul">
                {HeaderLang[lang].qabul}
              </a>
              <a className="header__nav header_border" href="/talabalar">
                {HeaderLang[lang].students}
              </a>
              <a className="header__nav header_border" href="/bitiruvchilar">
                {HeaderLang[lang].graduates}
              </a>
              <a className="header__nav" href="/faoliyatlar">
                {HeaderLang[lang].activity[0]}
              </a>
              <a className="header__nav" href="/biz-bilan-aloqa">
                {HeaderLang[lang].contact}
              </a>
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
                <h3 className="dropbtn"> {lang.toUpperCase()}</h3>
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
          <div>
          <MyComponent />
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
