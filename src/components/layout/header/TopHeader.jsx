import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import MainHeader from "./MainHeader";

import logo from "../../../assets/images/logo.png";
import { Agee, CircleHalf } from "../../../assets/icons";
import gerb from "../../../assets/images/gerb.png";

export { bannerReducer } from "../../banner/reducer";
export const TopHeader = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState({ hamburger: false, lang: false });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [ecranPosition, setEcranPosition] = useState(100);
  const language = [
    {
      code: "en",
      name: "En",
      conuntry_code: "gb",
    },
    {
      code: "uz",
      name: "Uz",
      conuntry_code: "uz",
    },
    {
      code: "ru",
      name: "Ru",
      conuntry_code: "ru",
    },
  ];
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

  const toggleHamburger = () => {
    setOpen({ hamburger: !isOpen.hamburger });
  };

  const changeLanguage = (code) => {
    let pathnameLang = "uz";
    if (pathname.split("/")[1] === "uz") pathnameLang = "uz";
    if (pathname.split("/")[1] === "ru") pathnameLang = "ru";
    if (pathname.split("/")[1] === "en") pathnameLang = "en";
    navigate(pathname.replace(pathnameLang, code));
    i18next.changeLanguage(code);
  };

  return (
    <>
      <div className="bg-[#26597E] container-fluid">
        <header className="container-fluid flex items-center justify-around mx-auto  h-16 ">
          <div className="lg:flex   justify-between  text-white xl:flex hidden ">
            <NavLink to={`/`} className=" mx-4">
              {t("headerTop.0.name")}
            </NavLink>
            <NavLink to={`/`} className=" mx-4">
              {t("headerTop.1.name")}
            </NavLink>
            <NavLink to={`/`} className=" mx-4">
              {t("headerTop.2.name")}
            </NavLink>
            <NavLink to={`/`} className=" mx-4">
              {t("headerTop.3.name")}
            </NavLink>
          </div>
          <div className="flex items-center h-5 ">
            <input
              className="py-2  w-[350px]  rounded-3xl"
              type="text"
              placeholder="Qidiruv"
            />
          </div>
          <div className="flex justify-between items-center">
            <img className="w-[40px] h-auto" src={gerb} alt="" />
            <div>
              <div
                className="dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {" "}
                <Agee />
              </div>
              {isHovered && (
                <div
                  className="dropdown-content absolute z-50 top-[40px] bg-white cursor: pointer py-5 "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div onClick={() => changeSize("minus")}
                   className="w-[30px] h-[20px] bg-[#fff] text-black text-xl font-medium mx-3"
                  >A-
                  </div>
                  <div>
                    <h3
                      onClick={() => changeSize("default")}
                      className="w-[30px] h-[20px] bg-[#fff] text-black text-xl font-medium mx-3"
                    >
                      A
                    </h3>
                  </div>
                  <div>
                    <h3
                      onClick={() => changeSize("plus")}
                      className="w-[30px] h-[20px] bg-[#fff] text-black text-xl font-medium mx-3"
                    >
                      A+
                    </h3>
                  </div>
                </div>
              )}
              <div className="dropdown-content icon__wrapper"></div>
            </div>
            <div
              onClick={() => document.body.classList.toggle("greyscale")}
              className="header__nav"
            >
              <CircleHalf />
            </div>

            <div className=" flex items-center justify-end gap-3">
              <div
                className="items-center gap-3  text-black bg-[#F2F2F2] ml-10 p-2.5 rounded cursor-pointer xl:flex hidden relative"
                onClick={() => setOpen({ ...isOpen, lang: !isOpen.lang })}
              >
                <h3 className="cursor-pointer">{t("headerTop.4.name")}</h3>

                {isOpen.lang && (
                  <ul className="absolute bg-[#efe9e9] pb-2 text-black top-10 left-0 w-full rounded  z-50">
                    {language.map((item) => (
                      <li
                        key={item.code}
                        className="px-2.5 hover:bg-black hover:text-white"
                        onClick={() => {
                          changeLanguage(item.code);
                        }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
             
            </div>
          </div>
        </header>
{/*         
        <div className="container-fluid items-center bg-[#A6A1A1]">
          <div className="flex container justify-between w-[90%]  mx-auto h-20">
            <div className="">
              <Link to="/" className="   ">
                <div className="flex items-center ">
                  <img src={logo} alt="Main logo" className="w-16 h-16" />
                  <div className={`text-white font-bold`}>
                    <div className="text-[15px] my-3 mx-3">
                      <div>TOSHKENT </div>
                      <div>KIMYO-TEXNOLOGIYA</div>
                      <div>INSTITUTI</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <MainHeader />
          </div>
        </div> */}
      </div>
    </>
  );
};
