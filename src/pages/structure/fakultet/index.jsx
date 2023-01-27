import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";

const FacultetComponent = () => {
  const { lang, DataGetter } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Fakultetlar",
      about:
        "TKTI  bakalavriat, magistratura va bitta integratsiyalashgan o'quv dasturini, doktoranturada  o'qishni davom ettirish va o'qituvchi malakasini olish imkoniyatini taklif etadi. Bularning barchasi 5 fakultetda amalga oshiriladi:",
    },
    ru: {
      title: "Факультеты",
      about:
        "TKTI предлагает бакалавриат, магистратуру и одну интегрированную учебную программу, возможность продолжить обучение в докторантуре и получить квалификацию преподавателя. Все это делается на 5 факультетах:",
    },
    en: {
      title: "Faculties",
      about:
        "TKTI offers bachelor's, master's and one integrated study program, the possibility to continue studying at the doctoral level and to obtain a teacher's qualification. All this is done in 5 faculties:",
    },
  });
  const [facultet, setFacultet] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    DataGetter(setFacultet, 'Fak_data/all')
  }, []);

  return (
    <div className="container">
      <div className="fakultetlar__hero">
              <h2>{hero[lang].title}</h2>
              <p>{hero[lang].about}</p>
        </div>
      <div className="facultetInfo">
        {
            facultet.isFetched && facultet.data ? (
                facultet.data.map((item, index) => (
                    <Link className="facultetTitle" to={`/fakultetlar/${item.title_uz.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${item._id}`} key={index}>
                        <h3 className="fakultet-inner">{item[`title_${lang}`]}</h3>
                    </Link>
                ))
            ):(
                <></>
            )
        }
      </div>
      
    </div>
  );
};

export default FacultetComponent;