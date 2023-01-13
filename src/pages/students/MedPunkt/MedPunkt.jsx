import React, { useContext, useEffect, useState } from "react";


import { AccordionBest } from "../../../components/accordion";
import { Context } from "../../../context";
import medLang from "./lang";
import "./MedPukt.css";
const MedPunkt = () => {

   const { lang } = useContext(Context);
  
  const [g, setG] = useState([
    {
      id: 0,
      status: true,
      title: medLang[lang].gpa[0].title,
      content: medLang[lang].gpa[0].content,
    },
    {
      id: 1,
      status: false,
      title: medLang[lang].gpa[1].title,
      content: medLang[lang].gpa[1].content,
    },
  ]);
  useEffect(() => {
    const filter = g.filter(
      (a, index) => (
        (a.title = medLang[lang].gpa[index].title),
        (a.content = medLang[lang].gpa[index].content)
      )
    );
    setG(filter);
  }, [lang]);
 
  return (
    <div className="wrapped mb-5">
              <div className="medPunkt__header">
                <h1 className="mb-5">{medLang[lang].title} </h1>
              </div>
            <AccordionBest arr={g} setarr={setG} />
    </div>
  );
};

export default MedPunkt;