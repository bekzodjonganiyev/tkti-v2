import i18next from "i18next";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import apiClientWithFetch from "../../../services/apiClientWithFetch";

const NavLinks = () => {
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
      name: "Xalqaro Aloqa",
      submenu: true,
      sublinks: url?.res1,
    },
    {
      name: "Talabalar",
      submenu: true,
      sublinks: url?.res2,
    },
    {
      name: "Ta'lim",
      submenu: true,
      sublinks: url?.res3,
    },
    {
      name: "Qabul",
      submenu: true,
      sublinks: url?.res4,
    },
    {
      name: "My Tkti",
      submenu: true,
      sublinks: url?.res5,
    },
    {
      name: "Ilmiy tadqiqotlar",
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
            <div className="px-3 text-left md:cursor-pointer group">
              <h1
                className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                }}
              >
                {link.name}
                <span className="text-xl md:hidden inline">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
              {link.submenu && (
                <div>
                  <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                    <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                  mt-1 bg-indigo-200 rotate-45"
                      ></div>
                    </div>
                    <div className="bg-indigo-500 p-5 grid grid-cols-3 gap-10">
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

            {/* Mobile menus */}
            
          </div>
        )
      )}
    </>
  );
};

export default NavLinks;
