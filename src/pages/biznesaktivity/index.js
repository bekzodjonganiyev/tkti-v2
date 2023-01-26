import React, { useContext, useState, useEffect } from "react";
import ActivityLang from "./lang";
import { AccordionComponent } from "../../components/accordion";

import { Context } from "../../context";
import { Link, useParams } from "react-router-dom";
import QuestionForm from "../../components/questionform/index";
import "./style.css";

const BusinessActivity = ({ setVariant }) => {
  const { lang } = useContext(Context);

// //////////////////////////////////
  const [data, setData] = useState([
    {
      id: 0,
      status: true,
      title: ActivityLang[lang].data[0].title,
      content: ActivityLang[lang].data[0].content,
    },
    {
      id: 1,
      status: false,
      title: ActivityLang[lang].data[1].title,
      content: ActivityLang[lang].data[1].content,
    },
    {
      id: 2,
      status: false,
      title: ActivityLang[lang].data[2].title,
      content: ActivityLang[lang].data[2].content,
    },
    {
      id: 3,
      status: false,
      title: ActivityLang[lang].data[3].title,
      content: ActivityLang[lang].data[3].content,
    },
    {
      id: 4,
      status: false,
      title: ActivityLang[lang].data[4].title,
      content: ActivityLang[lang].data[3].content,
    },
  ]);

  useEffect(() => {
    const filter = data.filter(
      (e, index) => (
        (e.title = ActivityLang[lang].data[index].title),
        (e.content = ActivityLang[lang].data[index].content)
      )
    );

    setData(filter);
  }, [lang]);
  return (
    <div className="wrapped mb-5">
      <div className="medPunkt__header">
        <h1>{ActivityLang[lang].title}</h1>
      </div>
      <p>{ActivityLang[lang].hero} </p>
      <br /> <br />
      <AccordionComponent arr={data} setarr={setData} />
// /////////////////////////////////////////////////
  const accordionBtn = [
    {
      faoliyat_id: 1,
      id: "bolim",

      title: ActivityLang[lang].faoliyatName[0],
    },
    {
      faoliyat_id: 2,
      id: "fakultet",

      title: ActivityLang[lang].faoliyatName[1],
    },
    {
      faoliyat_id: 3,
      id: "kafedra",

      title: ActivityLang[lang].faoliyatName[2],
    },
    {
      faoliyat_id: 4,
      id: "rahbariyat",

      title: ActivityLang[lang].faoliyatName[3],
    },
    {
      faoliyat_id: 5,
      id: "markaz",

      title: ActivityLang[lang].faoliyatName[4],
    },
  ];

  return (
    <div>
      <div className="container-fluid">
        <div className="faoliyat-title">
          <h1>{ActivityLang[lang].title}</h1>
          <p>{ActivityLang[lang].hero} </p>
        </div>
        <div className="row faoliyatInfo">
          <div className="faoliyat">
            {accordionBtn.map((a, index) => (
              <Link
                className="edfewdf "
                to="/moliyaviy-faoliyat/hammasi"
                key={`${index}__${a.id}`}
              >
                <span onClick={() => setVariant(a.id)}>{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <QuestionForm />
      </div>
// ////////////////////////////
    </div>
  );
};

export default BusinessActivity;
