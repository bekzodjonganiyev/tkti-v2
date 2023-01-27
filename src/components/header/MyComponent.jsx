import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Institut } from "../../icons/Icons";
import "./MyComponent.css";
import HeaderLang from "./lang";
import { Context } from "../../context";

const MyComponent = () => {
  const [facultet, setFacultet] = useState([]);

  const location = useLocation();

  const { lang, setLang, globalUrl } = useContext(Context);

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
      name: HeaderLang[lang].institut[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[0],
      label: [
        {
          labelId: HeaderLang[lang].institut[1],
          href: "/rektorat",
        },
        {
          labelId: HeaderLang[lang].institut[2],
          href: "/interaktiv-hizmatlar",
        },
        {
          labelId: HeaderLang[lang].institut[3],
          href: "/tkti-ish-rejasi",
        },
        {
          labelId: HeaderLang[lang].institut[4],
          href: "/korrupsiya",
        },
        {
          labelId: HeaderLang[lang].institut[5],
          href: "/biz-bilan-aloqa",
        },
        {
          labelId: HeaderLang[lang].institut[6],
          href: "/xalqaro-aloqalar",
        },
        {
          labelId: HeaderLang[lang].institut[7],
          href: "/faoliyat-hujjatlari",
        },
        {
          labelId: HeaderLang[lang].institut[8],
          href: "/litsey",
        },
      ],
    },
    {
      id: 2,
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
      id: 3,
      name: HeaderLang[lang].talim[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[2],
      label: [
        {
          labelId: HeaderLang[lang].talim[1],
          href: "/dars-jadvali",
        },
        {
          labelId: HeaderLang[lang].talim[2],
          href: "https://www.dropbox.com/s/mhexwrmj4s638if/1.PDF?dl=0",
        },
      ],
    },
    {
      id: 4,
      name: HeaderLang[lang].fakultet[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[3],
      label: test(facultet),
    },
    {
      id: 5,
      name: HeaderLang[lang].structure[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[1],
      label: [
        {
          labelId: HeaderLang[lang].structure[1],
          href: "/rektorat",
        },
        {
          labelId: HeaderLang[lang].structure[2],
          href: "/faculty",
        },
        {
          labelId: HeaderLang[lang].structure[3],
          href: "/kafedrafrond",
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
          href: "https://rector.tcti.uz/",
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
    for (let i of params) {
      result.push({ labelId: i[`title_${lang}`], href: `/facultyId/${i._id}` });
    }
    return result;
  }
  return (
    <>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button.id}
            onMouseEnter={() => setHoveredButton({ ...button })}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {button.name}
          </button>
        ))}

        {hoveredButton && (
          <>
            <div
              className="hovered-content"
              onMouseEnter={() => setHoveredButton({ ...hoveredButton })}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <ul className="hovered-list">
                <div className="list-info">
                  <span>
                    <Institut />
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
