import React, { useState } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const NavLinks = () => {
  const { t } = useTranslation();
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const links = [
    {
      name: t("Header.0.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Institute.1.name"), link: "/" },
            { name: t("Institute.2.name"), link: "/" },
            { name: t("Institute.3.name"), link: "/" },
            { name: t("Institute.4.name"), link: "/" },
            { name: t("Institute.5.name"), link: "/" },
          ],
        },

        {
          sublink: [
            { name: t("Institute.6.name"), link: "/" },
            { name: t("Institute.7.name"), link: "/" },
            { name: t("Institute.8.name"), link: "/" },
            { name: t("Institute.9.name"), link: "/" },
          ],
        },
      ],
    },
    {
      name: t("Header.1.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Admission.0.name"), link: "/" },
            { name: t("Admission.1.name"), link: "/" },
            { name: t("Admission.2.name"), link: "/" },
            { name: t("Admission.3.name"), link: "/" },
          ],
        },
      ],
    },
    {
      name: t("Header.2.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Students.1.name"), link: "/" },
            { name: t("Students.2.name"), link: "/" },
            { name: t("Students.3.name"), link: "/" },
            { name: t("Students.4.name"), link: "/" },
            { name: t("Students.5.name"), link: "/" },
            { name: t("Students.6.name"), link: "/" },
          ],
        },
        {
          sublink: [
            { name: t("Students.7.name"), link: "/" },
            { name: t("Students.8.name"), link: "/" },
            { name: t("Students.9.name"), link: "/" },
            { name: t("Students.10.name"), link: "/" },
            { name: t("Students.11.name"), link: "/" },
          ],
        },
      ],
    },

    {
      name:  t("Header.3.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("Education.1.name"), link: "/" },
            { name: t("Education.2.name"), link: "/" },
            { name: t("Education.3.name"), link: "/" },
            { name: t("Education.4.name"), link: "/" },
            { name: t("Education.5.name"), link: "/" },
            { name: t("Education.6.name"), link: "/" },
          ],
        },
        
      ],
    },
    {
      name:t("Header.4.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
          
            { name: t("ScientificResearch.1.name"), link: "/" },
            { name: t("ScientificResearch.2.name"), link: "/" },
            { name: t("ScientificResearch.3.name"), link: "/" },
            { name: t("ScientificResearch.4.name"), link: "/" },
            { name: t("ScientificResearch.5.name"), link: "/" },
            { name: t("ScientificResearch.6.name"), link: "/" },
          ],
        },
        {
          sublink: [
            { name: t("ScientificResearch.7.name"), link: "/" },
            { name: t("ScientificResearch.8.name"), link: "/" },
            { name: t("ScientificResearch.9.name"), link: "/" },
            { name: t("ScientificResearch.10.name"), link: "/" },
            { name: t("ScientificResearch.11.name"), link: "/" },
          ],
        },
      ],
    },

    {
      name:  t("Header.5.name"),
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: t("International.1.name"), link: "/" },
            { name: t("International.2.name"), link: "/" },
            { name: t("International.3.name"), link: "/" },
            { name: t("International.4.name"), link: "/" },
            { name: t("International.5.name"), link: "/" },
            { name: t("International.6.name"), link: "/" },
          ],
        },
        
      ],
    },
  ];
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
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
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
            className={`
            ${heading === link.name ? "xl:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              
              <div>
                
                <div>
                  <div
                    onClick={() =>
                      subHeading === slinks.Head ? "xl:hidden" : "hidden"
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className=" py-4 pl-7 z-50  font-semibold  flex justify-between items-center md:pr-0 pr-5"
                  >
                    
                   <div
                    className={`z-5000 `}
                  >
                    
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
