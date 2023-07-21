import {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate, useNavigation} from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Dropdown } from "flowbite-react";

import { Agee, CircleHalf } from "../../../assets/icons";
import gerb from "../../../assets/images/gerb.png";
export { bannerReducer } from "../../banner/reducer";

export const TopHeader = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [langText, setLangText] = useState(
    localStorage.getItem("langText") || "Uz"
  );
  const [isHovered, setIsHovered] = useState(false);
  const [ searchValue, setSearchValue ] = useState('')

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [ecranPosition, setEcranPosition] = useState(100);
  const language = [
    {
      code: "uz",
      text: "Uz",
      name: "Oʻzbekcha",
      conuntry_code: "uz",
    },
    {
      code: "ru",
      text: "Ru",
      name: "русский ",
      conuntry_code: "ru",
    },
    {
      code: "en",
      text: "En",
      name: "English",
      conuntry_code: "gb",
    },
  ];

  const data = [
    { id: 0, label: t("havola.18.name"), href: "https://new.akbt.uz" },
    { id: 1, label: t("havola.17.name"), href: "https://mail.tkti.uz/" },
    {
      id: 2,
      label: t("HomePage.6.name"),
      href: `/${i18next.language}/foydali-havolalar`,
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

  const changeLanguage = (code) => {
    let pathnameLang = "uz";
    i18next.changeLanguage(code);
    if (pathname.split("/")[1] === "uz") pathnameLang = "uz";
    if (pathname.split("/")[1] === "ru") pathnameLang = "ru";
    if (pathname.split("/")[1] === "en") pathnameLang = "en";
    navigate(pathname.replace(pathnameLang, code));
    window.location.reload();
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault()
    window.location.href = `/search?${searchValue}`
  }

  useEffect(() => {
    if (pathname.split("/")[1] === "uz") setLangText("Uz");
    if (pathname.split("/")[1] === "ru") setLangText("Ru");
    if (pathname.split("/")[1] === "en") setLangText("En");
  }, [])

  return (
    <>
      <div className="bg-[#26597E] max-md:px-5">
        <header className="container w-full flex items-center justify-between mx-auto  h-16 border-slate-600 ">
          <div className="lg:flex justify-between  text-white xl:flex hidden border-white-600 ">
            <NavLink
              to={`https://student.tcti.uz/dashboard/login`}
              className=" mr-4"
            >
              {t("headerTop.0.name")}
            </NavLink>
            <NavLink
              to={`https://hemis.tcti.uz/dashboard/login`}
              className=" mr-4"
            >
              {t("headerTop.1.name")}
            </NavLink>
            <NavLink
              to={`https://tkti-2023.edupage.org/timetable/view.php`}
              className=" mr-4"
            >
              {t("headerTop.2.name")}
            </NavLink>
            <div className="foydali ">
              <Dropdown
                className="border-none"
                label={t("headerTop.3.name")}
                inline
              >
                {data?.map((i, index) => (
                  <>
                    <li className="li " key={index}>
                      <a href={i.href}>
                        <Dropdown.Item>
                          <span>{i.label}</span>
                        </Dropdown.Item>
                      </a>
                    </li>
                  </>
                ))}
              </Dropdown>
            </div>
          </div>
          <div className="flex items-center h-5 ">
            <form onSubmit={handleSearchSubmit}>
              <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="py-1  lg:w-[300px] md:w-[280px] sm:w-[200px]  rounded-3xl"
                  type="text"
                  placeholder={t("headerTop.5.name")}
              />
            </form>
          </div>
          <div className="lg:flex hidden justify-between items-center">
            <img src={gerb} alt="O'z. Res. gerbi" width={"50"} />
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
                  className="dropdown-content flex absolute z-50 top-[45px]  bg-white cursor-pointer "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    onClick={() => changeSize("minus")}
                    className="w-[20px] h-[20px] bg-[#fff] text-[#02307d] text-xl font-normal m-3 cursor-pointer"
                  >
                    A-
                  </div>
                  <div>
                    <h3
                      onClick={() => changeSize("default")}
                      className="w-[20px] h-[20px] bg-[#fff] text-[#02307d] text-xl font-normal m-3 cursor-pointer"
                    >
                      A
                    </h3>
                  </div>
                  <div>
                    <h3
                      onClick={() => changeSize("plus")}
                      className="w-[20px] h-[20px] bg-[#fff] text-[#02307d] text-xl font-normal m-3 cursor-pointer"
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
              className="header__greyscale"
            >
              <CircleHalf />
            </div>

            <div className=" flex items-center justify-end gap-3 ml-10 text-white">
              <Dropdown inline label={langText} lang className="text-white">
                {language.map((item) => (
                  <Dropdown.Item
                    className="capitalize"
                    onClick={() => {
                      setLangText(item.text);
                      localStorage.setItem("langText", item.text);
                      changeLanguage(item.code);
                    }}
                  >
                    {item.code}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
