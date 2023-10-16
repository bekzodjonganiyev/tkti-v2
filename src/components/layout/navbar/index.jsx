import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Modal } from "flowbite-react";

import "./style.css";

import { TopHeader } from "../header/TopHeader";
import Logo from "../../../assets/images/logo.png";
import Logo1 from "../../../assets/images/qs-logo.png";
import Logo2 from "../../../assets/images/the-logo.jpg";
import Logo3 from "../../../assets/images/qoshma-talim.jpg";

import { useAppContext } from "../../../context/app.context";
import apiClientWithFetch from "../../../services/apiClientWithFetch";
import { slug } from "../../../services/slug";

export { headerReducer } from "./reducer";
export const Navbar = () => {
  const navRef = useRef(null);
  const { t } = useTranslation();
  const { setIdForFetch } = useAppContext();

  const [url, setUrl] = useState({
    loading: true,
    res1: [],
    res2: [],
    res3: [],
    res4: [],
    res5: [],
    res6: [],
  });
  const [hoveredLink, setHoveredLink] = useState(null);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  // TODO - bu kodlarni optimizatsiya qilish kerak
  // const getUrls = async () => {
  //   let [res1, res2, res3, res4, res5, res6] = await Promise.all([
  //     apiClientWithFetch.get("my_tkti/all"),
  //     apiClientWithFetch.get("qabul/all"),
  //     apiClientWithFetch.get("talabalar/all"),
  //     apiClientWithFetch.get("talim/all"),
  //     apiClientWithFetch.get("ilmiy_tad/all"),
  //     apiClientWithFetch.get("xalqaro_aloqa/all"),
  //   ]);

  //   setUrl({
  //     loading: false,
  //     res1: res1?.data?.map((item) => ({
  //       name: item[`title_${i18next.language}`],
  //       link: `/my_tkti/${item.title_uz}`,
  //       id: item?._id,
  //     })),
  //     res2: res2?.data?.map((item) => ({
  //       name: item[`title_${i18next.language}`],
  //       link: `/qabul/${item.title_uz}`,
  //       id: item?._id,
  //     })),
  //     res3: res3?.data?.map((item) => ({
  //       name: item[`title_${i18next.language}`],
  //       link: `/talabalar/${item.title_uz}`,
  //       id: item?._id,
  //     })),
  //     res4: res4?.data?.map((item) => ({
  //       name: item[`title_${i18next.language}`],
  //       link: `/talim/${item.title_uz}`,
  //       id: item?._id,
  //     })),
  //     res5: res5?.data?.map((item) => ({
  //       name: item[`title_${i18next.language}`],
  //       link: `/ilmiy_tad/${item.title_uz}`,
  //       id: item?._id,
  //     })),
  //     res6: res6?.data?.map((item) => ({
  //       name: item[`title_${i18next.language}`],
  //       link: `/xalqaro_aloqa/${item.title_uz}`,
  //       id: item?._id,
  //     })),
  //   });
  // };

  // TODO - ChatGPT optimizatsiya qilgan kodlar bu kodlarni o'rganish kerak
  const fetchData = useCallback(async () => {
    const urls = [
      "mytkti/all",
      "qabul/all",
      "talabalar/all",
      "talim/all",
      "ilmiytad/all",
      "xalqaro/all",
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) => apiClientWithFetch.get(url))
      );

      setUrl((prevState) => ({
        ...prevState,
        loading: false,
        res1: responses[0]?.data?.map((item) => ({
          name: item[`title_${i18next.language}`],
          link: `/mytkti/${slug(item.title_uz)}`.toLowerCase(),
          id: item?._id,
        })),
        res2: responses[1]?.data?.map((item) => ({
          name: item[`title_${i18next.language}`],
          link: `/qabul/${slug(item.title_uz)}`,
          id: item?._id,
        })),
        res3: responses[2]?.data?.map((item) => ({
          name: item[`title_${i18next.language}`],
          link: `/talabalar/${slug(item.title_uz)}`,
          id: item?._id,
        })),
        res4: responses[3]?.data?.map((item) => ({
          name: item[`title_${i18next.language}`],
          link: `/talim/${slug(item.title_uz)}`,
          id: item?._id,
        })),
        res5: responses[4]?.data?.map((item) => ({
          name: item[`title_${i18next.language}`],
          link: `/ilmiytad/${slug(item.title_uz)}`,
          id: item?._id,
        })),
        res6: responses[5]?.data?.map((item) => ({
          name: item[`title_${i18next.language}`],
          link: `/xalqaro/${slug(item.title_uz)}`,
          id: item?._id,
        })),
      }));
    } catch (error) {
      // Handle error
    }
  }, []);

  const link = [
    {
      name: t("Header.0.name"),
      desc: t("Institute.0.title.ikki"),
      submenu: true,
      sublinks: [
        {
          name: t("Institute.6.name"),
          link: `/institut/korrupsiya`,
          id: null,
        },
        {
          name: t("Institute.9.name"),
          link: `/institut/bog'nalish`,
          id: null,
        },
        {
          name: t("Institute.10.name"),
          link: `/institut/kafedralar`,
          id: null,
        },
        {
          name: t("Institute.11.name"),
          link: `/institut/fakultetlar`,
          id: null,
        },
        {
          name: t("Institute.12.name"),
          link: `/institut/bolim-va-markazlar`,
          id: null,
        },
        {
          name: t("Institute.13.name"),
          link: `/institut/rektorat`,
          id: null,
        },
        ...(url?.res1 ?? []),
      ],
    },
    {
      name: t("Header.3.name"),
      desc: t("Institute.0.title.olti"),
      submenu: true,
      sublinks: url?.res4,
    },
    {
      name: t("Header.4.name"),
      desc: t("Institute.0.title.uch"),
      submenu: true,
      sublinks: url?.res5,
    },
    {
      name: t("Header.5.name"),
      desc: t("Institute.0.title.tort"),
      submenu: true,
      sublinks: url?.res6,
    },
    {
      name: t("Header.2.name"),
      desc: t("Institute.0.title.besh"),
      submenu: true,
      sublinks: url?.res3,
    },
    {
      name: t("Header.1.name"),
      desc: t("Institute.0.title.bir"),
      submenu: true,
      sublinks: url?.res2,
    },
  ];

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <nav className="">
      <Modal show={modal} onClose={() => setModal(false)}>
        <Modal.Header>
          {i18next.language === "uz" ? (
            <p className="">2023/2024 o‘quv yili</p>
          ) : i18next.language === "ru" ? (
            <p className="">2023/2024 учебный год</p>
          ) : (
            <p className="">2023/2024 academic year</p>
          )}
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-5">
          <a
            target="_blank"
            href="https://qabul.tkti.uz/uz/application"
            className="text-center p-3 border rounded-md hover:bg-stone-200"
            onClick={() => setModal(true)}
          >
            {i18next.language === "uz"
              ? "Toshkent kimyo-texnologiya instituti qo'shma talim dasturi"
              : i18next.language === "ru"
              ? "Совместная программа обучения Ташкентского химико-технологического института"
              : "Joint training program of the Tashkent Institute of Chemical Technology"}
          </a>
          <a
            target="_blank"
            href="https://tkti-yangiyer.vercel.app/uz/application"
            className="text-center p-3 border rounded-md hover:bg-stone-200"
            onClick={() => setModal(true)}
          >
            {i18next.language === "uz"
              ? "Toshkent kimyo-texnologiya instituti qo'shma talim dasturi (Yangiyer filiali)"
              : i18next.language === "ru"
              ? "Совместная программа обучения Ташкентского химико-технологического института (Янгиер ветвь)"
              : "Joint training program of the Tashkent Institute of Chemical Technology (Yangiyer branch)"}
          </a>
        </Modal.Body>
      </Modal>
      <TopHeader />
      <div className="bg-white py-3 sticky top-0 z-20" ref={navRef}>
        <div className="container px-0 w-full flex items-center justify-between max-md:gap-5 max-md:px-5 relative">
          <Link to="/" className="flex  justify-between items-center">
            <img src={Logo} alt="" width={"60"} height={"20"} className="" />
            <div className={`text-[#02307d] font-bold max-md:hidden`}>
              <div className="mx-3 ">
                <div className="min-[1214px]:text-[14px] text-[10px]">
                  {t("TktiName.0.name")}
                </div>
                <div className="min-[1214px]:text-[14px] text-[10px]">
                  {t("TktiName.1.name")}
                </div>
                <div className="min-[1214px]:text-[14px] text-[10px]">
                  {t("TktiName.2.name")}
                </div>
              </div>
            </div>
          </Link>

          <a
            target="_blank"
            href="https://www.timeshighereducation.com/world-university-rankings/tashkent-institute-chemical-technology"
            className=" btn-glow"
          >
            <img
              src={Logo2}
              alt=""
              width={"60"}
              height={"20"}
              className="max-[1156px]:w-10"
            />
          </a>

          <a
            target="_blank"
            href="https://www.topuniversities.com/universities/tashkent-institute-chemical-technology"
            className="rounded-2xl btn-glow"
          >
            <img
              src={Logo1}
              alt=""
              width={"60"}
              height={"20"}
              className="rounded-2xl max-[1156px]:w-10"
            />
          </a>

          <button
            className="rounded-2xl flex flex-col items-center"
            onClick={() => setModal(true)}
          >
            <img
              src={Logo3}
              alt=""
              width={"80"}
              height={"30"}
              className="rounded-2xl"
            />
            {i18next.language === "uz" ? (
              <p className="text-xs text-center">
                Qo'shma talim <br /> qabul
              </p>
            ) : i18next.language === "ru" ? (
              <p className="text-xs text-center">
                Cовместные <br /> образованые
              </p>
            ) : (
              <p className="text-xs text-center">
                Double degree <br /> admission
              </p>
            )}
          </button>

          <button className="text-3xl lg:hidden" onClick={() => setOpen(true)}>
            <ion-icon name="menu"></ion-icon>
          </button>

          {/* Desktop header */}
          <div className="max-lg:hidden ">
            {/*balandilik(h-6) berilganiligiga sabab hover bolganda chiqadigan
          elentning linklarni o'rab turgan wrapperning balanligiga tasir
          ko'rsatmasligi */}

            <ul className={`flex justify-between w-[750px]`}>
              {link?.map((item, id) =>
                url.loading ? (
                  <div className="max-w-xs mx-auto p-4 " key={id}>
                    <div className="animate-pulse">
                      <div className="bg-gray-200 rounded h-6 max-md:w-56 w-20"></div>
                    </div>
                  </div>
                ) : (
                  <li
                    key={id}
                    className="py-5 navbar__hover cursor-pointer uppercase min-[1200px]:text-sm text-[11px]"
                    onMouseEnter={() => setHoveredLink({ ...item })}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item?.name}
                  </li>
                )
              )}
            </ul>

            {/* TODO - group hover bilan tanishib chiqih va li ning border-bottom iga implement qilish */}
            {hoveredLink ? (
              <div
                className={`w-[760px] navbar__hoverItems bg-[rgba(0,0,0, 0.2)] z-10 flex items-center justify-center absolute top-[99%] right-0`}
                onMouseEnter={() => setHoveredLink({ ...hoveredLink })}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="flex gap-5 m-4">
                  <div className=" pr-5">
                    <div className="flex gap-3 items-center mb-3">
                      <img
                        src={Logo}
                        alt=""
                        width={"40"}
                        height={"20"}
                        className=""
                      />
                      <p className="uppercase">{hoveredLink?.name}</p>
                    </div>
                    <p className="w-[300px] leading-4">{hoveredLink?.desc}</p>
                  </div>
                  <ul className="h-fit grid grid-cols-2 gap-x-10">
                    {hoveredLink?.sublinks?.map((item) => (
                      <li
                        key={item?.id}
                        className="h-fit w-44 navbar__hoverItem text-left pl-2 border-b border-slate-200"
                      >
                        <Link
                          className="block py-2"
                          onClick={() => setIdForFetch(item.id)}
                          to={`${i18next.language}${item.link}`}
                        >
                          {item?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          {/* Mobile header */}
          <div
            className={`lg:hidden bg-white fixed w-full top-0 bottom-0 overflow-y-auto duration-500 z-20 py-10 ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <div className="px-2 flex justify-between pr-10">
              <Link to="/" className="flex justify-center items-center">
                <img
                  src={Logo}
                  alt=""
                  width={"60"}
                  height={"20"}
                  className=""
                />
                <div className={`text-[#02307d] font-bold`}>
                  <div className="text-[15px] mx-3">
                    <div>TOSHKENT </div>
                    <div>KIMYO-TEXNOLOGIYA</div>
                    <div>INSTITUTI</div>
                  </div>
                </div>
              </Link>
              <button
                className="text-3xl lg:hidden"
                onClick={() => setOpen(false)}
              >
                <ion-icon name="close"></ion-icon>
              </button>
            </div>
            <div>
              <ul className="px-5 mt-10">
                {link.map((item, idx) =>
                  url.loading ? (
                    <div className="max-w-xs mx-auto p-4" key={idx}>
                      <div className="animate-pulse space-y-4">
                        <div className="bg-gray-200 rounded h-6 max-md:w-56 w-20"></div>
                      </div>
                    </div>
                  ) : (
                    <li key={idx}>
                      <p
                        onClick={() => setDropdown(item.name)}
                        className="font-bold w-full flex justify-between py-2 cursor-pointer"
                      >
                        {item.name}{" "}
                        <ion-icon
                          name={
                            dropdown === item.name
                              ? "chevron-down"
                              : "chevron-up"
                          }
                        ></ion-icon>
                      </p>
                      <ul
                        className={`${
                          dropdown === item.name ? "block" : "hidden"
                        } pl-5 `}
                      >
                        {item?.sublinks?.map((subItem, idx) => (
                          <li className="my-2 list-disc" key={idx}>
                            <Link
                              onClick={() => {
                                setIdForFetch(item.id);
                                setOpen(false);
                              }}
                              to={`${i18next.language}${subItem.link}`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <hr className="border border-slate-100" />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
