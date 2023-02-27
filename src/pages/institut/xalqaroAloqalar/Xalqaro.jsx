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
    {
      id: 2,
      status: false,
      title: aloqaLang[lang].gpa[2].title,
      content: aloqaLang[lang].gpa[2].content,
    },
    {
      id: 3,
      status: false,
      title: aloqaLang[lang].gpa[3].title,
      content: aloqaLang[lang].gpa[3].content,
    },
    {
      id: 4,
      status: false,
      title: aloqaLang[lang].gpa[4].title,
      content: aloqaLang[lang].gpa[4].content,
    },
    {
      id: 5,
      status: false,
      title: aloqaLang[lang].gpa[5].title,
      content: aloqaLang[lang].gpa[5].content,
    },
    
    {
      id: 6,
      status: false,
      title: aloqaLang[lang].gpa[6].title,
      content: aloqaLang[lang].gpa[6].content,
    },
 
  ]);
  useEffect(() => {
    const filter = g.filter(
      (a, index) => (
        (a.title = aloqaLang[lang].gpa[a.id].title),
        (a.content = aloqaLang[lang].gpa[a.id].content)
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
