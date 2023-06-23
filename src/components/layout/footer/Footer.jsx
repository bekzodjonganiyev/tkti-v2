import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "../../../assets/images/Component1.png";

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

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={` bg-[#26597E] `}>
        <div className="container mx-auto w-[90%] my-[40px]">
          <div className="container  flex justify-between  items-center ">
            <div className="">
              <Link to="/" className="my-4 block  ">
                <div className="flex items-center ">
                  <img src={logo} alt="Main logo" className="w-18 h-24" />
                  <div
                    className={`text-white lg:text-2xl xl:text-xl md:text-lg  md:w-[70%] font-bold`}
                  >
                    <div className="text-[14px] mx-3">
                      <div>{t("TktiName.0.name")}</div>
                      <div>{t("TktiName.1.name")}</div>
                      <div>{t("TktiName.2.name")}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex gap-4    items-end justify-between ">
                <div className="lg:flex lg:flex-col flex-row-reverse   max-md:flex-col max-md:gap-10 ">
                  <div className="flex lg:gap-5 gap-3 ">
                    <Link to={`https://www.facebook.com/tktiuzrasmiy`}>
                      <FacebookIcon color="white " />
                    </Link>
                    <Link to={`http://youtube.com/@tktiuzrasmiy`}>
                      <YouTubeIcon color="white" />
                    </Link>
                    <Link to="https://t.me/tktiuz">
                      <TelegramIcon color="white" />
                    </Link>
                    <Link to="https://www.instagram.com/tktiuz">
                      <InstagramIcon color="white" />
                    </Link>
                    <Link to={`http://linkedin.com/company/tktiuz`}>
                      <Linkedin color="white" />
                    </Link>
                    <Link to={`https://vk.com/tktiuz`}>
                      <Talim color="white" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 my-3">
                    <PhoneIcon />
                    <span className="text-white"> + 998 71 244 79 17</span>
                  </div>

                  <div className="flex items-center gap-2 my-3">
                    <Email />
                    <span className="text-white"> info@tkti.uz</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex justify-evenly hidden">
              <div className="text-white text-[20px]">
                <div>
                  <NavLink to={`${i18next.language}/qabul/magistratura`}>
                    <span className="mx-3">{t("Qabul.1.name")}</span>
                  </NavLink>
                </div>

                <div>
                  <NavLink to={`${i18next.language}//qabul/bakalavr`}>
                    <span className="mx-3">{t("Qabul.0.name")}</span>
                  </NavLink>
                </div>

                <div>
                  <NavLink to={`${i18next.language}/qabul/doktorantura`}>
                    <span className="mx-3">{t("Qabul.2.name")}</span>
                  </NavLink>
                </div>

                <div>
                  <NavLink to={`${i18next.language}/qabul/qo-shma-ta-lim`}>
                    <span className="mx-3">{t("Qabul.3.name")}</span>
                  </NavLink>
                </div>

                <div>
                  <NavLink to={`${i18next.language}/institut/structure`}>
                    <span className="mx-3">{t("Institute.3.name")}</span>
                  </NavLink>
                </div>
              </div>
              <div className="text-white text-[20px]">
                <div>
                  <NavLink to={`${i18next.language}/institut/biz-haqimiqda`}>
                    <span className="mx-3">{t("Institute.1.name")}</span>
                  </NavLink>
                </div>

                <div>
                  <NavLink to={`${i18next.language}/institut/ish-reja`}>
                    <span className="mx-3">{t("Institute.5.name")}</span>
                  </NavLink>
                </div>

                <div>
                  <NavLink to={`${i18next.language}/institut/korrupsiya`}>
                    <span className="mx-3">{t("Institute.6.name")}</span>
                  </NavLink>
                </div>

                <div>
                  <NavLink to={`${i18next.language}/institut/bog'nalish`}>
                    <span className="mx-3">{t("Institute.9.name")}</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="text-white  flex justify-center my-3 text-xl">
          {t("ContactUs.2.manzil")}
          </div>
        </div>
      </footer>
    </>
  );
};
