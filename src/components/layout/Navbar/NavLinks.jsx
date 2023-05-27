  import i18next from "i18next";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import apiClientWithFetch from "../../../services/apiClientWithFetch";
import { useTranslation } from "react-i18next";
const NavLinks = () => {
  const { t } = useTranslation();
  const [heading, setHeading] = useState("");
  const [url, setUrl] = useState({ loading: true });

  const getUrls = async () => {
    let [res1, res2, res3, res4, res5, res6] = await Promise.all([
      apiClientWithFetch.get("xalqaro_aloqa/all"),
      apiClientWithFetch.get("talabalar/all"),
      apiClientWithFetch.get("talim/all"),
      apiClientWithFetch.get("qabul/all"),
      apiClientWithFetch.get("my_tkti/all"),
      apiClientWithFetch.get("ilmiy_tad/all"),
    ]);

    setUrl({
      loading: false,
      res1: res1?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/xalqaro_aloqa/${item._id}`,
      })),
      res2: res2?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/talabalar/${item._id}`,
      })),
      res3: res3?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/talim/${item._id}`,
      })),
      res4: res4?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/qabul/${item._id}`,
      })),
      res5: res5?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/my_tkti/${item._id}`,
      })),
      res6: res6?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/ilmiy_tad/${item._id}`,
      })),
    });
  };

  useEffect(() => {
    getUrls();
  }, []);

  const link = [
    {
      title:t("Institute.title"),
      name:  t("Header.5.name"),
      submenu: true,
      sublinks: url?.res1,
    },
    {
      name: t("Header.2.name"),
      submenu: true,
      sublinks: url?.res2,
    },
    {
      name: t("Header.3.name"),
      submenu: true,
      sublinks: url?.res3,
    },
    {
      name: t("Header.1.name"),
      submenu: true,
      sublinks: url?.res4,
    },
    {
      name: "My Tkti",
      submenu: true,
      sublinks: url?.res5,
    },
    {
      name: t("Header.4.name"),
      submenu: true,
      sublinks: url?.res6,
    },
  ];

  return (
    <>
      {link.map((link) =>
        url.loading ? (
          "Loading"
        ) : (
          <div>
            <div className="px-3 text-left lg:cursor-pointer group">
              <h1
                className="py-7 flex justify-between items-center lg:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                }}
              >
                 
                {link.name}
                <span className="text-xl lg:hidden inline">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-xl md:mt-1 lg:ml-2  lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
              {link.submenu && (
                <div>
                  <div className="absolute top-36 hidden group-hover:lg:block hover:lg:block">
                    <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                  mt-1 bg-slate-100 rotate-45"
                      ></div>
                    </div>
                    <div className="bg-slate-100 p-2 ml-[-10px] grid grid-cols-2 gap-5">
                      
                   
                      {link.sublinks.map((mysublinks) => (
                        <li className="text-sm text-gray-600 my-2.5">
                          <Link
                            to={mysublinks.link}
                            className="hover:text-primary"
                          >
                            {mysublinks.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              )}
           
            </div>

            
            {/* {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("")
                    }
                    className="py-4 pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl lg:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          setHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      setHeading === slinks.Head ? "lg:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        )
      )}
    </>
  );
};

export default NavLinks;
