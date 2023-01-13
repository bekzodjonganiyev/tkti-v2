import React, { useContext, useEffect, useState } from "react";

import { AccordionBest } from "../../../components/accordion";
import { Context } from "../../../context";
import loyihaLang from "./lang";
import "./Startup.css";
const Startup = () => {
  const { lang } = useContext(Context);
  const [g, setG] = useState([
    {
      id: 0,
      status: true,
      title: loyihaLang[lang].gpa[0].title,
      content: loyihaLang[lang].gpa[0].content,
    },
    {
      id: 1,
      status: false,
      title: loyihaLang[lang].gpa[1].title,
      content: loyihaLang[lang].gpa[1].content,
    },
  ]);
  useEffect(() => {
    const filter = g.filter(
      (a, index) => (
        (a.title = loyihaLang[lang].gpa[index].title),
        (a.content = loyihaLang[lang].gpa[index].content)
      )
    );
    setG(filter);
  }, [lang]);

  return (
    <div className="wrapped">
              <AccordionBest arr={g} setarr={setG} />
    </div>
  );
};

export default Startup;
