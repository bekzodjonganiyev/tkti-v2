// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.png";
// import i18next from "i18next";
// import { useTranslation } from "react-i18next";
// import apiClientWithFetch from "../../../services/apiClientWithFetch";
// const NavLinks = () => {
//   const { t } = useTranslation();
//   const [heading, setHeading] = useState("");
//   const [subHeading, setSubHeading] = useState("");

//   // const links = [
//   //   {
//   //     name: t("Header.0.name"),
//   //     submenu: true,
//   //     sublinks: [
//   //       {
//   //         sublink: [{ name: t("Header.0.name") }],
//   //       },

//   //       {
//   //         sublink: test("xalqaro_aloqa"),
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: t("Header.1.name"),
//   //     submenu: true,
//   //     sublinks: [
//   //       {
//   //         sublink: [{ name: t("Header.1.name") }],
//   //       },

//   //       {
//   //         sublink: test("xalqaro_aloqa"),
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: t("Header.2.name"),
//   //     submenu: true,
//   //     sublinks: [
//   //       {
//   //         sublink: [{ name: t("Header.2.name") }],
//   //       },

//   //       {
//   //         sublink: test("xalqaro_aloqa"),
//   //       },
//   //     ],
//   //   },

//   //   {
//   //     name: t("Header.3.name"),
//   //     submenu: true,
//   //     sublinks: [
//   //       {
//   //         sublink: [{ name: t("Header.3.name") }],
//   //       },

//   //       {
//   //         sublink: test("xalqaro_aloqa"),
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: t("Header.4.name"),
//   //     submenu: true,
//   //     sublinks: [
//   //       {
//   //         sublink: [{ name: t("Header.4.name") }],
//   //       },

//   //       {
//   //         sublink: test("xalqaro_aloqa"),
//   //       },
//   //     ],
//   //   },

//   //   {
//   //     name: t("Header.5.name"),
//   //     submenu: true,
//   //     sublinks: [
//   //       {
//   //         sublink: [{ name: t("Header.5.name") }],
//   //       },

//   //       {
//   //         sublink: test("xalqaro_aloqa"),
//   //       },
//   //     ],
//   //   },
//   // ];

//   function test(page) {
//     let routes = [];
//     apiClientWithFetch.get(`${page}/all`).then((res) => (routes = res?.data));
//     const result = [];
//     for (let item of routes) {
//       result.push({
//         name: item[`title_${i18next.language}`],
//         link: `/${page}/${item.title_uz
//           .toLowerCase()
//           .split(" ")
//           .map((str) =>
//             str
//               .split("")
//               .filter((char) => /[a-zA-Z]/.test(char))
//               .join("")
//           )
//           .join("-")}-${item._id}`,
//       });
//     }
//     return result;
//   }

//   return (
//     <>
//       {links.map((link) => (
//         <div>
//           <div className="px-3 text-left md:cursor-pointer group">
//             <h1
//               className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
//               onClick={() => {
//                 heading !== link.name ? setHeading(link.name) : setHeading("");
//                 setSubHeading("");
//               }}
//             >
//               {link.name}
//               <span className="text-xl md:hidden inline">
//                 <ion-icon
//                   name={`${
//                     heading === link.name ? "chevron-up" : "chevron-down"
//                   }`}
//                 ></ion-icon>
//               </span>
//               <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
//                 <ion-icon name="chevron-down"></ion-icon>
//               </span>
//             </h1>
//             {link.submenu && (
//               <div>
//                 <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
//                   <div className="py-3">
//                     <div
//                       className="w-4 h-4 left-3 absolute
//                   mt-1 bg-white rotate-45"
//                     ></div>
//                   </div>
//                   <div className="bg-white p-5 grid grid-cols-3 gap-10">
//                     {link.sublinks.map((mysublinks) => (
//                       <div>
//                         <h1 className="text-lg font-semibold">
//                           {mysublinks.Head}
//                         </h1>
//                         {mysublinks.sublink.map((slink) => (
//                           <li className="text-sm text-gray-600 my-2.5">
//                             <Link
//                               to={slink.link}
//                               className="hover:text-primary"
//                             >
//                               {slink.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Mobile menus */}
//           <div
//             className={`
//           ${heading === link.name ? "md:hidden" : "hidden"}
//         `}
//           >
//             {/* sublinks */}
//             {link.sublinks.map((slinks) => (
//               <div>
//                 <div>
//                   <h1
//                     onClick={() =>
//                       subHeading !== slinks.Head
//                         ? setSubHeading(slinks.Head)
//                         : setSubHeading("")
//                     }
//                     className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
//                   >
//                     {slinks.Head}

//                     <span className="text-xl md:mt-1 md:ml-2 inline">
//                       <ion-icon
//                         name={`${
//                           subHeading === slinks.Head
//                             ? "chevron-up"
//                             : "chevron-down"
//                         }`}
//                       ></ion-icon>
//                     </span>
//                   </h1>
//                   <div
//                     className={`${
//                       subHeading === slinks.Head ? "md:hidden" : "hidden"
//                     }`}
//                   >
//                     {slinks.sublink.map((slink) => (
//                       <li className="py-3 pl-14">
//                         <Link to={slink.link}>{slink.name}</Link>
//                       </li>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default NavLinks;
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
        link: `/xalqaro_aloqa/${item._id}/${item.title_uz}`,
      })),
      res2: res2?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/talabalar/${item._id}/${item.title_uz}`,
      })),
      res3: res3?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/talim/${item._id}/${item.title_uz}`,
      })),
      res4: res4?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/qabul/${item._id}/${item.title_uz}`,
      })),
      res5: res5?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/my_tkti/${item._id}/${item.title_uz}`,
      })),
      res6: res6?.data?.map((item) => ({
        name: item[`title_${i18next.language}`],
        link: `/ilmiy_tad/${item._id}/${item.title_uz}`,
      })),
    });
  };

  useEffect(() => {
    getUrls();
  }, []);

  const aa = [
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
      {aa.map((link) =>
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
