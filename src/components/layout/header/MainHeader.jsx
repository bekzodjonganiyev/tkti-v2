import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Hamburger from "hamburger-react";

import Logo from "../../../assets/images/logo.png";
import "./Header.css";
const MainHeader = () => {
  const { t } = useTranslation();
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isOpen, setOpen] = useState({ hamburger: false, lang: false });
  const buttons = [
    {
      id: 1,
      name: t("Header.0.name"),
      fakultetInfo: t("Institute.0.title"),

      label: [
        {
          labelId: t("Institute.1.name"),
          href: "/our-mission",
        },
        {
          labelId: t("Institute.2.name"),
          href: "/rektorat",
        },
        {
          labelId: t("Institute.3.name"),
          href: "/history",
        },
        {
          labelId: t("Institute.4.name"),
          href: "/our-requipments",
        },
        {
          labelId: t("Institute.5.name"),
          href: "/korrupsiya",
        },
        {
          labelId: t("Institute.6.name"),
          href: "/bitiruvchilar",
        },
        {
          labelId: t("Institute.7.name"),
          href: "/",
        },
        {
          labelId: t("Institute.8.name"),
          href: "/bitiruvchilar",
        },
        {
          labelId: t("Institute.9.name"),
          href: "/",
        },
      ],
    },
    {
      id: 2,
      name: t("Header.1.name"),
      fakultetInfo: t("Education.0.title"),
      label: [
        {
          labelId: t("Admission.0.name"),
          href: "",
        },
        {
          labelId: t("Admission.1.name"),
          href: "",
        },
        {
          labelId: t("Admission.2.name"),
          href: "",
        },
        {
          labelId: t("Admission.3.name"),
          href: "",
        },
      ],
    },
    {
      id: 3,
      name: t("Header.2.name"),
      fakultetInfo: t("Scientific.0.title"),
      label: [
        {
          labelId: t("Students.7.name"),
          href: "",
        },
        {
          labelId: t("Students.1.name"),
          href: "",
        },
        {
          labelId: t("Students.2.name"),
          href: "",
        },
        {
          labelId: t("Students.3.name"),
          href: "",
        },
        {
          labelId: t("Students.4.name"),
          href: "",
        },
        {
          labelId: t("Students.5.name"),
          href: "",
        },
        {
          labelId: t("Students.6.name"),
          href: "",
        },
        {
          labelId: t("Students.7.name"),
          href: "",
        },
        {
          labelId: t("Students.8.name"),
          href: "",
        },
        {
          labelId: t("Students.9.name"),
          href: "",
        },
        {
          labelId: t("Students.10.name"),
          href: "",
        },
        {
          labelId: t("Students.11.name"),
          href: "",
        },
      ],
    },
    {
      id: 4,
      name: t("Header.3.name"),
      fakultetInfo: t("International.0.title"),
      label: [
        {
          labelId: t("Education.1.name"),
          href: "",
        },
        {
          labelId: t("Education.2.name"),
          href: "",
        },
        {
          labelId: t("Education.3.name"),
          href: "",
        },
        {
          labelId: t("Education.4.name"),
          href: "",
        },
        {
          labelId: t("Education.5.name"),
          href: "",
        },
        {
          labelId: t("Education.6.name"),
          href: "",
        },
      ],
    },
    {
      id: 5,
      name: t("Header.4.name"),
      fakultetInfo: t("ScientificResearch.0.title"),
      label: [
        {
          labelId: t("ScientificResearch.1.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.2.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.3.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.4.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.5.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.6.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.7.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.8.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.9.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.10.name"),
          href: "",
        },
        {
          labelId: t("ScientificResearch.11.name"),
          href: "",
        },
      ],
    },
    {
      id: 6,
      name: t("Header.5.name"),
      fakultetInfo: t("International.0.title"),
      label: [
        {
          labelId: t("International.1.name"),
          href: "",
        },
        {
          labelId: t("International.2.name"),
          href: "",
        },
        {
          labelId: t("International.3.name"),
          href: "",
        },
        {
          labelId: t("International.4.name"),
          href: "",
        },
        {
          labelId: t("International.5.name"),
          href: "",
        },
        {
          labelId: t("International.6.name"),
          href: "",
        },
      ],
    },
  ];

  const toggleHamburger = () => {
    setOpen({ hamburger: !isOpen.hamburger });
  };

  const screenWidth = window.screen.width;
  return (
    <>
      <div
        className={`xl:flex hidden  ${
          isOpen.hamburger
            ? " text-[#ffff] xl:static z-[10000] absolute top-0 left-0 max-xl:w-full max-xl:h-screen xl:bg-inherit bg-[rgba(0,0,0,0.96)] text-[#ffffff] max-xl:flex max-xl:flex-col max-xl:justify-start max-xl:pt-24"
            : "hidden"
        }`}
      >
        <Link
          to="/"
          className="max-xl:block hidden pl-14 -mt-16 mb-14"
          onClick={() => toggleHamburger()}
        >
          <div className="flex  justify-center items-center">
            <img src={Logo} alt="" width={"100"} height={"20"} className="" />
            <div className={`text-white font-bold`}>
              <div className="text-[15px] my-3 mx-3">
                <div>TOSHKENT </div>
                <div>KIMYO-TEXNOLOGIYA</div>
                <div>INSTITUTI</div>
              </div>
            </div>
          </div>
        </Link>

        <div className="buttons  my-4 text-white xl:flex hidden ">
          {buttons.map((button) => (
            <button
              key={button.id}
              onMouseEnter={() =>
                screenWidth > 1120 ? setHoveredButton({ ...button }) : null
              }
              onMouseLeave={() =>
                screenWidth > 1120 ? setHoveredButton(null) : null
              }
              onClick={() =>
                screenWidth < 1120 ? setHoveredButton({ ...button }) : null
              }
            >
              {button.name}
            </button>
          ))}

          {hoveredButton && (
            <>
              <div
                className="hovered-content  "
                onMouseEnter={() => setHoveredButton({ ...hoveredButton })}
                onMouseLeave={() =>
                  screenWidth > 1120 ? setHoveredButton(null) : null
                }
              >
                <ul className="hovered-list ">
                  <div className="list-info">
                    <span>
                      <img className="hovered_logo" src={Logo} alt="" />
                      {/* <Institut /> */}

                      <h3>{hoveredButton.name}</h3>
                    </span>
                    <p>{hoveredButton.fakultetInfo}</p>
                  </div>
                  <div className="asdaaf">
                    {hoveredButton?.label?.map((i, index) => (
                      <>
                        <li className="li " key={index}>
                          <a href={i.href}>
                            <span className="w-15px ">{i.labelId}</span>
                          </a>
                        </li>
                      </>
                    ))}
                  </div>
                  <div className="as">
                    {hoveredButton?.label?.map((i, index) => (
                      <>
                        <li className="li " key={index}>
                          <a href={i.href}>
                            <span>{i.labelId}</span>
                          </a>
                        </li>
                      </>
                    ))}
                  </div>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="xl:hidden block color:red">
        <Hamburger
          toggled={isOpen.hamburger}
          toggle={() => toggleHamburger()}
        />
      </div>
    </>
  );
};

export default MainHeader;
