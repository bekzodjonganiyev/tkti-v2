import React, { useContext, useEffect, useState } from "react";

import aloqaLang from "./lang";
import { AccordionBest } from "../../../components/accordion";
import "./xalqaroAloqa.css";
import { Context } from "../../../context";

const Xalqaro = () => {
  const { lang } = useContext(Context);
  const [g, setG] = useState([
    {
      id: 0,
      status: true,
      title: aloqaLang[lang].gpa[0].title,
      content: aloqaLang[lang].gpa[0].content,
    },
    {
      id: 1,
      status: false,
      title: aloqaLang[lang].gpa[1].title,
      content: aloqaLang[lang].gpa[1].content,
    },
  ]);
  useEffect(() => {
    const filter = g.filter(
      (a, index) => (
        (a.title = aloqaLang[lang].gpa[index].title),
        (a.content = aloqaLang[lang].gpa[index].content)
      )
    );
    setG(filter);
  }, [lang]);

  return (
    <div className="wrapped mt-5 mb-5">
          <AccordionBest arr={g} setarr={setG} />
    </div>
  );
};

export default Xalqaro;
