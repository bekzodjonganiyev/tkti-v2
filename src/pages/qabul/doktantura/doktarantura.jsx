import React, { useState } from "react";

import "./doktarantura.css";

import doctorantLang from "./lang";
import { useContext } from "react";
import {AccordionBest, AccordionComponent} from '../../../components/accordion'
import { useEffect } from "react";
import { Context } from "../../../context";

const Doktarantura = () => {
  const {lang} =useContext(Context)

  const [step, setStep]= useState([
    {id:0, status:true, title: doctorantLang[lang].accept.data[0].title, content: doctorantLang[lang].accept.data[0].content},
    {id:1, status:false, title: doctorantLang[lang].accept.data[1].title, content: doctorantLang[lang].accept.data[1].content},
    {id:2, status:false, title: doctorantLang[lang].accept.data[2].title, content: doctorantLang[lang].accept.data[2].content},
    {id:3, status:false, title: doctorantLang[lang].accept.data[3].title, content: doctorantLang[lang].accept.data[3].content},
    {id:4, status:false, title: doctorantLang[lang].accept.data[4].title, content: doctorantLang[lang].accept.data[4].content},
  ]);
  const [question, setQuestion] = useState([
    {id:0, status:true, title: doctorantLang[lang].question.data[0].title, content:doctorantLang[lang].question.data[0].content},
    { title: doctorantLang[lang].question.data[1].title, content:doctorantLang[lang].question.data[1].content},
    { title: doctorantLang[lang].question.data[2].title, content:doctorantLang[lang].question.data[2].content},
    { title: doctorantLang[lang].question.data[3].title, content:doctorantLang[lang].question.data[3].content},
    { title: doctorantLang[lang].question.data[4].title, content:doctorantLang[lang].question.data[4].content},
    { title: doctorantLang[lang].question.data[5].title, content:doctorantLang[lang].question.data[5].content},
    { title: doctorantLang[lang].question.data[6].title, content:doctorantLang[lang].question.data[6].content},
    { title: doctorantLang[lang].question.data[7].title, content:doctorantLang[lang].question.data[7].content},
    { title: doctorantLang[lang].question.data[8].title, content:doctorantLang[lang].question.data[8].content},
    { title: doctorantLang[lang].question.data[9].title, content:doctorantLang[lang].question.data[9].content},
    { title: doctorantLang[lang].question.data[10].title, content:doctorantLang[lang].question.data[10].content},
    { title: doctorantLang[lang].question.data[11].title, content:doctorantLang[lang].question.data[11].content},
    { title: doctorantLang[lang].question.data[12].title, content:doctorantLang[lang].question.data[12].content},
    { title: doctorantLang[lang].question.data[13].title, content:doctorantLang[lang].question.data[13].content},
    { title: doctorantLang[lang].question.data[14].title, content:doctorantLang[lang].question.data[14].content},
    { title: doctorantLang[lang].question.data[15].title, content:doctorantLang[lang].question.data[15].content},
    { title: doctorantLang[lang].question.data[16].title, content:doctorantLang[lang].question.data[16].content},
    { title: doctorantLang[lang].question.data[17].title, content:doctorantLang[lang].question.data[17].content},
    { title: doctorantLang[lang].question.data[18].title, content:doctorantLang[lang].question.data[18].content},
    { title: doctorantLang[lang].question.data[19].title, content:doctorantLang[lang].question.data[19].content},
    { title: doctorantLang[lang].question.data[20].title, content:doctorantLang[lang].question.data[20].content},
    { title: doctorantLang[lang].question.data[21].title, content:doctorantLang[lang].question.data[21].content},
    { title: doctorantLang[lang].question.data[22].title, content:doctorantLang[lang].question.data[22].content},
    { title: doctorantLang[lang].question.data[23].title, content:doctorantLang[lang].question.data[23].content},
    { title: doctorantLang[lang].question.data[24].title, content:doctorantLang[lang].question.data[24].content},
    { title: doctorantLang[lang].question.data[25].title, content:doctorantLang[lang].question.data[25].content},
    { title: doctorantLang[lang].question.data[26].title, content:doctorantLang[lang].question.data[26].content},
    { title: doctorantLang[lang].question.data[27].title, content:doctorantLang[lang].question.data[27].content},
    { title: doctorantLang[lang].question.data[28].title, content:doctorantLang[lang].question.data[28].content},
    { title: doctorantLang[lang].question.data[29].title, content:doctorantLang[lang].question.data[29].content},
    { title: doctorantLang[lang].question.data[30].title, content:doctorantLang[lang].question.data[30].content},
    { title: doctorantLang[lang].question.data[31].title, content:doctorantLang[lang].question.data[31].content},
    { title: doctorantLang[lang].question.data[32].title, content:doctorantLang[lang].question.data[32].content},
    { title: doctorantLang[lang].question.data[33].title, content:doctorantLang[lang].question.data[33].content},
    { title: doctorantLang[lang].question.data[34].title, content:doctorantLang[lang].question.data[34].content},
    { title: doctorantLang[lang].question.data[35].title, content:doctorantLang[lang].question.data[35].content},
    { title: doctorantLang[lang].question.data[36].title, content:doctorantLang[lang].question.data[36].content},
    { title: doctorantLang[lang].question.data[37].title, content:doctorantLang[lang].question.data[37].content},
    { title: doctorantLang[lang].question.data[38].title, content:doctorantLang[lang].question.data[38].content},
    { title: doctorantLang[lang].question.data[39].title, content:doctorantLang[lang].question.data[39].content},
    { title: doctorantLang[lang].question.data[40].title, content:doctorantLang[lang].question.data[40].content},
    { title: doctorantLang[lang].question.data[41].title, content:doctorantLang[lang].question.data[41].content},
    { title: doctorantLang[lang].question.data[42].title, content:doctorantLang[lang].question.data[42].content}
  ]);

  useEffect(()=>{
    question.filter((e, index) => (
      e.id = index+1,
      e.status = false
    ))
  },[])

  useEffect(()=>{
    const filter = question.filter((e, index) =>(
      e.title = doctorantLang[lang].question.data[index].title,
      e.content = doctorantLang[lang].question.data[index].content
    ))
    const filtered = step.filter((e, index) =>(
      e.title = doctorantLang[lang].accept.data[index].title,
      e.content = doctorantLang[lang].accept.data[index].content
    ))
    setQuestion(filter);
    setStep(filtered)
  }, [lang])

  return (
    <div className="wrapped mb-5">
    <h1>{doctorantLang[lang].title}</h1>

    <br />
    <div className="doktarant-img"></div>

    <br />
    <p>
      <strong className="fw-bold">
        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        {doctorantLang[lang].hero.split(" ").slice(0, 1).join(" ")}{" "}
      </strong>{" "}
      {doctorantLang[lang].hero.split(" ").slice(0).join(" ")}
    </p>
    <br />

    <div
      className="admission-mobile "
     
    >
      <div>
        <h4>{doctorantLang[lang].shans.title}</h4>
        <ul className="doktarant-tcti">
          {doctorantLang[lang].shans.data.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>{doctorantLang[lang].fund.title}</h4>
        <ul className="doktarant-tcti">
          {doctorantLang[lang].fund.data.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>

        <h4>{doctorantLang[lang].charg.title}</h4>
        <ul className="doktarant-tcti">
          {doctorantLang[lang].charg.data.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>{doctorantLang[lang].apply.title}</h4>
        <ul className="doktarant-tcti">
          {doctorantLang[lang].apply.data.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    </div>

    <br />

    <div className="doktarant-admission">
      <h2 className="doktarant-admission-title">
        {doctorantLang[lang].accept.title}
      </h2>

      <AccordionBest arr={step} setarr={setStep} />
    </div>

    <div className="doktarant-faq">
      <h2 className="doktarant-admission-title">
        {doctorantLang[lang].question.title}
      </h2>

      <AccordionComponent arr={question} setarr={setQuestion} />
    </div>
  </div>
  );
};

export default Doktarantura;