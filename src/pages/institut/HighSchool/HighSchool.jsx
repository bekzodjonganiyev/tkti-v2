import React, { useContext, useEffect, useState } from "react";
import { AccordionBest } from "../../../components/accordion";
import "./HighSchool.css";


import HightSchoolLang from "./lang";
import { Context } from "../../../context";

const HighSchool = () => {
  const { lang } = useContext(Context);
  const [g, setG] = useState([
    {
      id: 0,
      status: true,
      title: HightSchoolLang[lang].gpa[0].title,
      content: HightSchoolLang[lang].gpa[0].content,
    },
    {
      id: 1,
      status: false,
      title: HightSchoolLang[lang].gpa[1].title,
      content: HightSchoolLang[lang].gpa[1].content,
    },
    {
      id: 2,
      status: false,
      title: HightSchoolLang[lang].gpa[2].title,
      content: HightSchoolLang[lang].gpa[2].content,
    },
    {
      id: 3,
      status: false,
      title: HightSchoolLang[lang].gpa[3].title,
      content: HightSchoolLang[lang].gpa[3].content,
    },
    {
      id: 4,
      status: false,
      title: HightSchoolLang[lang].gpa[4].title,
      content: HightSchoolLang[lang].gpa[4].content,
    },
    {
      id: 5,
      status: false,
      title: HightSchoolLang[lang].gpa[5].title,
      content: HightSchoolLang[lang].gpa[5].content,
    },
    {
      id: 6,
      status: false,
      title: HightSchoolLang[lang].gpa[6].title,
      content: HightSchoolLang[lang].gpa[6].content,
    },
  ]);
  useEffect(() => {
    const filter = g.filter(
      (a, index) => (
        (a.title = HightSchoolLang[lang].gpa[index].title),
        (a.content = HightSchoolLang[lang].gpa[index].content)
      )
    );
    setG(filter);
  }, [lang]);
  

  return (
    <div className="wrapped mt-3 mb-5">
       <div className="highSchool__logo">
                <h3 className="mb-3">{HightSchoolLang[lang].name.name3}</h3>
              </div>

              <AccordionBest arr={g} setarr={setG} />
    </div>
  );
};

export default HighSchool;
