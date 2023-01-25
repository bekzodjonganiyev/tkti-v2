import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./style.css";
import logo from "../../files/logo.png";
import HeaderLang from "../header/lang";
import { Context } from "../../context";

function Footer() {
  const location = useLocation();
  const { lang } = useContext(Context);

  let content = null;
  const result = location.pathname.split("/")[1] === "admin";
  if (result) {
    content = null;
  } else {
    content = (
      <footer >
        <a href="/" className="logo">
          <img src={logo} alt="tkti logosi" />
          <p>
            <br />
            {HeaderLang[lang].logo[0]} <br />
            {HeaderLang[lang].logo[1]} <br />
            {HeaderLang[lang].logo[2]}
          </p>
        </a>

        <div className="footer-info">
          <div className="location">
            <p>
              <i className="fa-regular fa-phone"></i>
              <a target="_blank" href="tel:(998-71)244-79-15.">
                +(998 71) 244-79-15
              </a>
              &nbsp; &nbsp;
            </p>

            <p>
              <i className="fa-regular fa-envelope"></i>
              <a target="_blank" href="mailto:info@tcti.uz">
                info@tcti.uz
              </a>
            </p>
          </div>

          <div className="links">
            <a
              href="https://www.facebook.com/tktiuzrasmiy"
              target="_blank"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="http://linkedin.com/company/tktiuz"
              target="_blank"
              role="button"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="http://youtube.com/@tktiuzrasmiy"
              target="_blank"
              role="button"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a
              href="https://www.instagram.com/tktiuz"
              target="_blank"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://t.me/tktiuz" target="_blank" role="button">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  return content;
}

export default Footer;
