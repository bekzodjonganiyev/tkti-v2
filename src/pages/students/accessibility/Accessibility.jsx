import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context";
import { AccordionComponent } from "../../../components/accordion";
import studentsLang from "./lang";
import yordam from "../yordam.pdf";

import "./Accessibility.css";
const Accessibility = () => {
  const { lang } = useContext(Context);
  
   const [g, setG] = useState([
     {
       id: 0,
       status: true,
       title: studentsLang[lang].gpa[0].title,
       content: studentsLang[lang].gpa[0].content,
     },
     {
       id: 1,
       status: false,
       title: studentsLang[lang].gpa[1].title,
       content: studentsLang[lang].gpa[1].content,
     },
     {
       id: 2,
       status: false,
       title: studentsLang[lang].gpa[2].title,
       content: studentsLang[lang].gpa[2].content,
     },
     {
       id: 3,
       status: false,
       title: studentsLang[lang].gpa[3].title,
       content: studentsLang[lang].gpa[3].content,
     },
     {
       id: 4,
       status: false,
       title: studentsLang[lang].gpa[4].title,
       content: studentsLang[lang].gpa[4].content,
     },
   ]);
   useEffect(() => {
     const filter = g.filter(
       (a, index) => (
         (a.title = studentsLang[lang].gpa[index].title),
         (a.content = studentsLang[lang].gpa[index].content)
       )
     );
     setG(filter);
   }, [lang]);
  return (
    <div className="wrapped mb-5">
       <div className="accessibility__header">
                  <a className="btn btn-primary more__button"  href={yordam}>{studentsLang[lang].hero}</a>
              </div>
              <AccordionComponent arr={g} setarr={setG} />
    </div>
  );
};

export default Accessibility;