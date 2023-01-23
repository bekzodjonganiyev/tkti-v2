import React, { useContext, useState, useEffect } from "react";
import ActivityLang from "./lang";
import { Context } from "../../context";
import { Link, useParams } from "react-router-dom";
import QuestionForm from "../../components/questionform/index";
import "./style.css";

const BusinessActivity = ({ setVariant }) => {
  const { lang } = useContext(Context);

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
    </div>
  );
};

export default BusinessActivity;
