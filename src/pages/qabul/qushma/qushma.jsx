import React, { useState } from "react";
import "./qushma.css";
import QushmaLang from "./lang";
import { useContext } from "react";
import { useEffect } from "react";
import { AccordionComponent } from "../../../components/accordion";
import { Context } from "../../../context";

const Qushma = () => {
  const {lang} = useContext(Context);

  const [data, setData] =useState([
    {id:0, status:true, title:QushmaLang[lang].shart[0].title, content:QushmaLang[lang].shart[0].content },
    {id:1, status:false, title:QushmaLang[lang].shart[1].title, content:QushmaLang[lang].shart[1].content }
  ]);

  const [question, setQuestion] = useState([
    {id:0, status:true,   title: QushmaLang[lang].question.data[0].title, content:QushmaLang[lang].question.data[0].content },
    {id:1, status:false, title: QushmaLang[lang].question.data[1].title, content:QushmaLang[lang].question.data[1].content },
    {id:2, status:false, title: QushmaLang[lang].question.data[2].title, content:QushmaLang[lang].question.data[2].content },
    {id:3, status:false, title: QushmaLang[lang].question.data[3].title, content:QushmaLang[lang].question.data[3].content },
    {id:4, status:false, title: QushmaLang[lang].question.data[4].title, content:QushmaLang[lang].question.data[4].content }
  ])

  useEffect(() =>{
    const filter = data.filter((e, index ) => (
      e.title = QushmaLang[lang].shart[index].title,
      e.content = QushmaLang[lang].shart[index].content
    ));
    setData(filter);

    const filtered = question.filter((e, index ) => (
      e.title = QushmaLang[lang].question.data[index].title,
      e.content = QushmaLang[lang].question.data[index].content
    ));
    setQuestion(filtered)
  }, [lang]);
  return (
    <div className="wrapped mb-5">
            <h1>{QushmaLang[lang].title}</h1>

            <br />
            <div className="doktarant-img"></div>

            <br />
            {
              QushmaLang[lang].data.map((e, index) =>(
                <p key={index}>{e}</p>
              ))
            }
            <br />

            {/* QABUL QILISH TARTIBI */}
            <div className="doktarant-admission">
              <h2 className="doktarant-admission-title">{QushmaLang[lang].oquv.title} </h2>
                {
                  QushmaLang[lang].oquv.data.map((e, index) =>(
                    <div key={index}>
                      <h3>{e.title}</h3>
                      <span  dangerouslySetInnerHTML={{ __html: e["content"] }} ></span>
                    </div>
                    
                  ))
                }
            </div>
            {/* QABUL QILISH TARTIBI */}

            <div className="doktarant-admission">
                <AccordionComponent arr={data}  setarr={setData}/>
            </div>

            <div className="doktarant-admission">
                      <span  dangerouslySetInnerHTML={{ __html: QushmaLang[lang].natija }} ></span>
            </div>
            

            {/* FAQ */}
            <div className="doktarant-faq">
              <h2 className="doktarant-faq-title"> {QushmaLang[lang].question.title} </h2>
              <AccordionComponent arr={question} setarr={setQuestion} />
            </div>
            {/* FAQ */}
          </div>
  );
};

export default Qushma;