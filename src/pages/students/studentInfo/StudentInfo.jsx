import React, { useContext, useEffect, useState } from "react";
import { AccordionBest } from "../../../components/accordion";
import { Context } from "../../../context";

import studentsLang from "../lang";
import "./StydentInfo.css";
const StudentInfo = () => {
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
  
  ]);
  const [about] = useState({
    uz:`GPA o'rtacha ball`,
    ru:`Средний балл GPA`,
    en:`GPA Grade Point Average`
  })
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
              <div className="gpa__header">
                <h1 className="text-center">{about[lang]}</h1>
                  <a  href="https://youtu.be/2Ps84uPFxbA">{studentsLang[lang].title}</a>          
              </div>
              <AccordionBest arr={g} setarr={setG} />
    </div>
  );
};

export default StudentInfo;
