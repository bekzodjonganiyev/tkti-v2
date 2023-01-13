import React, { useContext, useEffect, useState } from "react";

import "./style.css";

import { AccordionBest } from "../../components/accordion";
import startupLang from "./lang";
import { Context } from "../../context";
const TKTIProject = () => {
  const { lang } = useContext(Context);
  const [g, setG] = useState([
    {
      id: 0,
      status: false,
      title: startupLang[lang].gpa[0].title,
      content: startupLang[lang].gpa[0].content,
    },
    {
      id: 1,
      status: true,
      title: startupLang[lang].gpa[1].title,
      content: startupLang[lang].gpa[1].content,
    },
  ]);
  useEffect(() => {
    const filter = g.filter(
      (a, index) => (
        (a.title = startupLang[lang].gpa[index].title),
        (a.content = startupLang[lang].gpa[index].content)
      )
    );
    setG(filter);
  }, [lang]);

  return (
    <div className="wrapped mb-5">
        <h2 className="text-center mb-3">{startupLang[lang].info.name}</h2>
        <AccordionBest arr={g} setarr={setG} />
    </div>
  );
};

export default TKTIProject;