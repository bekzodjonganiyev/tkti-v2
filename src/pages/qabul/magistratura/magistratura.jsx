import React, { useEffect } from "react";
import { useContext } from "react";
import "./magistratura.css";

import { AccordionComponent } from "../../../components/accordion";
import magistr from "./lang";
import { useState } from "react";
import { Context } from "../../../context";
function Magistratura() {
  const { lang } = useContext(Context);

  const [questions, setQuestions] = React.useState([
    {
      id: 0,
      status: true,
      title: magistr[lang].questions[0].title,
      content: magistr[lang].questions[0].content,
    },
    {
      id: 1,
      status: false,
      title: magistr[lang].questions[1].title,
      content: magistr[lang].questions[1].content,
    },
    {
      id: 2,
      status: false,
      title: magistr[lang].questions[2].title,
      content: magistr[lang].questions[2].content,
    },
    {
      id: 3,
      status: false,
      title: magistr[lang].questions[3].title,
      content: magistr[lang].questions[3].content,
    },
    {
      id: 4,
      status: false,
      title: magistr[lang].questions[4].title,
      content: magistr[lang].questions[4].content,
    },
    {
      id: 5,
      status: false,
      title: magistr[lang].questions[5].title,
      content: magistr[lang].questions[5].content,
    },
    {
      id: 6,
      status: false,
      title: magistr[lang].questions[6].title,
      content: magistr[lang].questions[6].content,
    },
    {
      id: 7,
      status: false,
      title: magistr[lang].questions[7].title,
      content: magistr[lang].questions[7].content,
    },
    {
      id: 8,
      status: false,
      title: magistr[lang].questions[8].title,
      content: magistr[lang].questions[8].content,
    },
    {
      id: 9,
      status: false,
      title: magistr[lang].questions[9].title,
      content: magistr[lang].questions[9].content,
    },
    {
      id: 10,
      status: false,
      title: magistr[lang].questions[10].title,
      content: magistr[lang].questions[10].content,
    },
  ]);

  const [data, setData] = useState([
    {
      id: 0,
      status: true,
      title: magistr[lang].shartData[0].title,
      content: magistr[lang].shartData[0].content,
    },
    {
      id: 1,
      status: false,
      title: magistr[lang].shartData[1].title,
      content: magistr[lang].shartData[1].content,
    },
  ]);

  useEffect(() => {
    const filter = questions.filter(
      (a, index) => (
        (a.title = magistr[lang].questions[index].title),
        (a.content = magistr[lang].questions[index].content)
      )
    );
    setQuestions(filter);

    const filter2 = data.filter(
      (a, index) => (
        (a.title = magistr[lang].shartData[index].title),
        (a.content = magistr[lang].shartData[index].content)
      )
    );
    setData(filter2);
  }, [lang]);

  return (
    <div className="wrapped mb-5 mt-5">
            <p>
              <strong className="fw-bold">
               {" "}
                {magistr[lang].hero.split(" ").slice(0, 1).join(" ")}{" "}
              </strong>{" "}
              {magistr[lang].hero.split(" ").slice(0).join(" ")}
            </p>

         

            <div className="study__on__tktu">
              <h1>{magistr[lang].shart}</h1>

              <AccordionComponent arr={data} setarr={setData} />
            </div>

            <div className="study__on__tktu">
              <h1> {magistr[lang].study.title} </h1>

              <table className="moliyaviy__info__table">
                <thead>
                  <tr>
                    <td colSpan="2"> {magistr[lang].study.data[0]} </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{magistr[lang].study.data[1]}</td>
                    <td>{magistr[lang].study.data[2]}</td>
                  </tr>
                  <tr>
                    <td>{magistr[lang].study.data[3]}</td>
                    <td>{magistr[lang].study.data[4]}</td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <td colSpan="2">{magistr[lang].study.data[5]}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{magistr[lang].study.data[6]}</td>
                    <td>{magistr[lang].study.data[7]}</td>
                  </tr>
                  <tr>
                    <td>{magistr[lang].study.data[8]}</td>
                    <td>{magistr[lang].study.data[9]}</td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <td colSpan="2">{magistr[lang].study.data[10]}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{magistr[lang].study.data[11]}</td>
                    <td>{magistr[lang].study.data[12]}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="study__on__tktu">
              <h1>{magistr[lang].question}</h1>

              <AccordionComponent arr={questions} setarr={setQuestions} />
            </div>
          </div>
  );
}

export default Magistratura;
