import React, { useState, useContext, useEffect } from "react";

import "./MyComponent.css";

import Logo from "../../files/logo.png";
import HeaderLang from "./lang";

import { Context } from "../../context";

const MyComponent = () => {
  const { lang, globalUrl } = useContext(Context);

  const [facultet, setFacultet] = useState([]);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    fetch(`${globalUrl}/Fak_data/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFacultet(data.data));
    console.log(facultet);
  }, [setFacultet]);

  const buttons = [
    {
      id: 1,
      name: HeaderLang[lang].institut1[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[0],
      label: [
        {
          labelId: HeaderLang[lang].institut1[1],
          href: "/about-us",
        },
        {
          labelId: HeaderLang[lang].institut1[2],
          href: "/our-mission",
        },
        {
          labelId: HeaderLang[lang].institut1[3],
          href: "/rektorat",
        },
        {
          labelId: HeaderLang[lang].institut1[4],
          href: "/history",
        },
        {
          labelId: HeaderLang[lang].institut1[5],
          href: "/our-requipments",
        },
        {
          labelId: HeaderLang[lang].institut1[6],
          href: "/korrupsiya",
        },
        {
          labelId: HeaderLang[lang].institut1[7],
          href: "/bitiruvchilar",
        },
      ],
    },
    {
      id: 2,
      name: HeaderLang[lang].structure[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[1],
      label: [
        {
          labelId: HeaderLang[lang].structure[1],
          href: "/rektorat",
        },
        {
          labelId: HeaderLang[lang].structure[2],
          href: "/fakultetlar",
        },
        {
          labelId: HeaderLang[lang].structure[3],
          href: "/kafedralar",
        },
        {
          labelId: HeaderLang[lang].structure[4],
          href: "/bolimMarkaz",
        },
        {
          labelId: HeaderLang[lang].structure[5],
          href: "/filiallar",
        },
        {
          labelId: HeaderLang[lang].structure[6],
          href: "/yoshlar-ittifoqi",
        },
      ],
    },
    {
      id: 3,
      name: HeaderLang[lang].fakultet[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[3],
      label: test(facultet),
    },
    {
      id: 4,
      name: HeaderLang[lang].talim[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[2],
      label: [
        {
          labelId: HeaderLang[lang].talim[1],
          href: "https://tkti-2023.edupage.org/timetable/view.php",
        },
        {
          labelId: HeaderLang[lang].talim[2],
          href: "https://www.dropbox.com/s/mhexwrmj4s638if/1.PDF?dl=0",
        },
        {
          labelId: HeaderLang[lang].talim[3],
          href: "/sertifikat",
        },
        {
          labelId: HeaderLang[lang].talim[4],
          href: "/nashriyot",
        },
      ],
    },
   
    {
      id: 5,
      name: HeaderLang[lang].ilmiy[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[1],
      label: [
        {
          labelId: HeaderLang[lang].ilmiy[1],
          href: "/institut-loyihalari",
        },
        {
          labelId: HeaderLang[lang].ilmiy[2],
          href: "/startup-loyihalar",
        },
      ],
    },
    {
      id: 6,
      name: HeaderLang[lang].mytkti[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[1],
      label: [
        {
          labelId: HeaderLang[lang].mytkti[1],
          href: "https://akbt.online/",
        },
        {
          labelId: HeaderLang[lang].mytkti[2],
          href: "https://tktiyf.uz/",
        },
        {
          labelId: HeaderLang[lang].mytkti[3],
          href: "https://student.tcti.uz/dashboard/login",
        },
        {
          labelId: HeaderLang[lang].mytkti[4],
          href: "https://corp.uz/webmail/",
        },
        {
          labelId: HeaderLang[lang].mytkti[5],
          href: "https://hemis.tcti.uz/dashboard/login",
        },
      ],
    },
  ];

  const handleMouseEnter = (arr) => {
    setHoveredButton({ ...arr });
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  function test(params) {
    const result = [];
    for (let item of params) {
      result.push({
        labelId: item[`title_${lang}`],
        href: `/fakultetlar/${item.title_uz
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
  const screenWidth = window.screen.width;
  return (
    <>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button.id}
            onMouseEnter={() =>
              screenWidth > 1120 ? setHoveredButton({ ...button }) : null
            }
            onMouseLeave={() =>
              screenWidth > 1120 ? setHoveredButton(null) : null
            }
            onClick={() =>
              screenWidth < 1120 ? setHoveredButton({ ...button }) : null
            }
          >
            {button.name}
          </button>
        ))}

        {hoveredButton && (
          <>
            <div
              className="hovered-content"
              onMouseEnter={() => setHoveredButton({ ...hoveredButton })}
              onMouseLeave={() =>
                screenWidth > 1120 ? setHoveredButton(null) : null
              }
            >
              <ul className="hovered-list">
                <div className="list-info">
                  <span>
                    <img className="hovered_logo" src={Logo} alt="" />
                    {/* <Institut /> */}

                    <h3>{hoveredButton.name}</h3>
                  </span>
                  <p>{hoveredButton.fakultetInfo}</p>
                </div>
                <div className="asdaaf">
                  {hoveredButton?.label?.map((i, index) => (
                    <>
                      <li className="li" key={index}>
                        <a href={i.href}>
                          <span>{i.labelId}</span>
                        </a>
                      </li>
                    </>
                  ))}
                </div>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyComponent;
