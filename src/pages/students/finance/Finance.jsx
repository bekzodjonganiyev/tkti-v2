import  React, { useContext, useEffect, useState} from "react"; 
import { AccordionComponent } from "../../../components/accordion";
import studentsLang from "./lang";
import studentsLang2 from "../lang";
import bgImg from '../../../files/moliya.jpg'
import './Finance.css'
import { Context } from "../../../context";

const Finance = () => {
   
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
      <div className="medPunkt__header">
                <h1>{studentsLang2[lang].students.second}</h1>
                <img src={bgImg} alt="background img" />
              </div>
              <p>{studentsLang2[lang].financeInfo.first}</p>
              <br />
              <AccordionComponent arr={g} setarr={setG} />
    </div>
  );
};

export default Finance;