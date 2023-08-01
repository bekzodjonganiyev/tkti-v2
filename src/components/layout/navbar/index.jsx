import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./style.css";

import { TopHeader } from "../header/TopHeader";
import Logo from "../../../assets/images/logo.png";

import { useAppContext } from "../../../context/app.context";
import apiClientWithFetch from "../../../services/apiClientWithFetch";
import { slug } from "../../../services/slug";

export { headerReducer } from "./reducer";
export const Navbar = () => {
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
      "my_tkti/all",
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
          link: `/my_tkti/${item.title_uz}`,
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
      name: t("Header.1.name"),
      desc: t("Institute.0.title.bir"),
      submenu: true,
      sublinks: url?.res2,
    },
    {
      name: t("Header.0.name"),
      desc: t("Institute.0.title.ikki"),
      submenu: true,
      sublinks: [
        {
          name: t("Institute.1.name"),
          link: `/institut/biz-haqimiqda`,
          id: null,
        },

        {
          name: t("Institute.5.name"),
          link: `/institut/ish-reja`,
          id: null,
        },
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
      ],
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
      name: t("Header.3.name"),
      desc: t("Institute.0.title.olti"),
      submenu: true,
      sublinks: url?.res4,
    },
  ];

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <nav className="">
      <TopHeader />
      <div className="bg-white py-3">
        <div className="container mx-auto w-full flex items-center justify-between max-md:px-5">
          <Link to="/" className="flex  justify-between items-center">
            <img src={Logo} alt="" width={"60"} height={"20"} className="" />
            <div className={`text-[#02307d] font-bold`}>
              <div className="text-[14px] mx-3 ">
                <div>{t("TktiName.0.name")}</div>
                <div>{t("TktiName.1.name")}</div>
                <div>{t("TktiName.2.name")}</div>
              </div>
            </div>
          </Link>

          <button className="text-3xl lg:hidden" onClick={() => setOpen(true)}>
            <ion-icon name="menu"></ion-icon>
          </button>

          {/* Desktop header */}
          <div className="flex flex-col h-6 max-lg:hidden">
            {/*balandilik(h-6) berilganiligiga sabab hover bolganda chiqadigan
          elentning linklarni o'rab turgan wrapperning balanligiga tasir
          ko'rsatmasligi */}

            <ul className={`flex ${i18next.language === "uz" ? "gap-14" : "gap-7"}`}>
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
                    className="pb-[31px] navbar__hover cursor-pointer uppercase text-sm"
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
                className="navbar__hoverItems bg-[rgba(0,0,0, 0.2)] z-50 flex items-center justify-center"
                onMouseEnter={() => setHoveredLink({ ...hoveredLink })}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="flex gap-12 m-4">
                  <div className=" pr-5">
                    <div className="flex gap-5 items-center mb-5">
                      <img
                        src={Logo}
                        alt=""
                        width={"60"}
                        height={"20"}
                        className=""
                      />
                      <p className="uppercase">{hoveredLink?.name}</p>
                    </div>
                    <p className="w-[300px] lowercase">{hoveredLink?.desc}</p>
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
            <div className="px-2 flex justify-between">
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
