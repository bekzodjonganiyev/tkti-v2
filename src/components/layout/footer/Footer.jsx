import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "../../../assets/images/logo.png";

import {
  TelegramIcon,
  InstagramIcon,
  YouTubeIcon,
  Global,
  FacebookIcon,
  Email,
  PhoneIcon,
  Linkedin,
  Talim,
} from "../../../assets/icons";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={` bg-[#26597E] w-full `}>
        <div className="container mx-auto w-[90%] my-[40px]">
          <div className="container  flex justify-between  items-center ">
            <div className="">
              <Link to="/" className="my-4 block  ">
                <div className="flex items-center ">
                  <img src={logo} alt="Main logo" className="w-24 h-24" />
                  <div
                    className={`text-white lg:text-2xl xl:text-xl md:text-lg  md:w-[70%] font-bold`}
                  >
                    <div className="text-[15px] my-3 mx-3">
                      <div>TOSHKENT</div>
                      <div>KIMYO-TEXNOLOGIYA</div>
                      <div>INSTITUTI</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex gap-4    items-end justify-between ">
                <div className="lg:flex lg:flex-col flex-row-reverse   max-md:flex-col max-md:gap-10 ">
                  <div className="flex lg:gap-5 gap-10 ">
                    <FacebookIcon color="white " />

                    <YouTubeIcon color="white" />

                    <TelegramIcon color="white" />

                    <InstagramIcon color="white" />

                    <Linkedin color="white" />

                    <Talim color="white" />
                  </div>
                  <div className="flex items-center gap-2 my-3">
                    <PhoneIcon />
                    <span className="text-white"> + 998 71 244 79 17</span>
                  </div>

                  <div className="flex items-center gap-2 my-3">
                    <Email />
                    <span className="text-white"> Info.tkti.uz</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex justify-evenly hidden">
              <div className="text-white text-[20px]">
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Fakultetlar</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Manzillarimiz</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Karyera markazi</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Filiallar</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Hamkorlik</span>
                  </NavLink>
                </div>
              </div>
              <div className="text-white text-[20px]">
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Talabalar hayoti</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Ilmiy tadqiqot markazlar</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Fotogallereya</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Dars jadvali</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="#">
                    <span className="mx-3">Grantlar,stipendiyalar</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="text-white  flex justify-center my-3 text-xl">
            O‘zbekiston Respublikasi 100011, Toshkent shahri, Navoiy ko‘chasi,
            32
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
