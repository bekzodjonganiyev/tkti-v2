import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const NavLinks = () => {
  const { t } = useTranslation();
  const [heading, setHeading] = useState("");

  const [facultet, setFacultet] = useState([]);
  useEffect(() => {
    fetch(`https://backend.tkti.uz/Fak_data/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFacultet(data.data));
    console.log(facultet);
  }, [setFacultet]);
  const [subHeading, setSubHeading] = useState("");
  const links = [
    {
      name: t("Header.0.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Header.0.name") },
           
          ],
        },
        
        {
          sublink: test(facultet),
        },
       
      ],
    },
    {
      name: t("Header.1.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Header.1.name") },
           
          ],
        },
       
        {
          sublink: test(facultet),
        },
        
      ],
    },
    {
      name: t("Header.2.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Header.2.name") },
           
          ],
        },
       
        {
          sublink: test(facultet),
        },
        
      ],
    },

    {
      name: t("Header.3.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Header.3.name") },
           
          ],
        },
       
        {
          sublink: test(facultet),
        },
        
      ],
    },
    {
      name: t("Header.4.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Header.4.name") },
           
          ],
        },
       
        {
          sublink: test(facultet),
        },
        
      ],
    },

    {
      name: t("Header.5.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Header.5.name") },
           
          ],
        },
       
        {
          sublink: test(facultet),
        },
        
      ],
    },
  ];

  function test(params) {
    const result = [];
    for (let item of params) {
      result.push({
        name: item[`title_${i18next.language}`],
        link: `/fakultetlar/${item.title_uz
          .toLowerCase()
          .split(" ")
          .map((str) =>
            str
              .split("")
              .filter((char) => /[a-zA-Z]/.test(char))
              .join("")
          )
          .join("-")}-${item._id}`,
      });
    }
   
    return result;
  }
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
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
              <span className="text-xl md:mt-1 md:ml-2  xl:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-32 z-50 hidden group-hover:xl:block hover:xl:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 flex  gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`absolute
            ${heading === link.name ? "xl:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <div
                    onClick={() =>
                      subHeading === slinks.Head
                        ? "xl:hidden"
                        : "hidden"
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className=" py-4 pl-7 z-50  font-semibold  flex justify-between items-center md:pr-0 pr-5"
                  >
                    <div className={`z-5000 `}>
                      {slinks.sublink.map((slink) => (
                        <li className="py-3 pl-14">
                          <Link to={slink.link}>{slink.name}</Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
