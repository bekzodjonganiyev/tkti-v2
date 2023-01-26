import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";

const FacultetFrond = () => {
  const { lang, globalUrl } = useContext(Context);
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
  const [facultet, setFacultet] = useState([]);


  useEffect(() => {
    fetch(`${globalUrl}/Fak_data/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFacultet(data.data));
    console.log(facultet);
  }, [setFacultet]);





  

  return (
    <div className="container">
      <div className="fakultetlar__hero">
              <h2>{hero[lang].title}</h2>
              <p>{hero[lang].about}</p>
        </div>
      <div className="facultetInfo">
        {facultet?.length > 0
        ? (
          facultet?.map((e, index) => (
            <Link className="facultetTitle" to={`/facultyId/${e._id}`} key={index}>
              {
                <div
                  className="fakultet-inner"
                  dangerouslySetInnerHTML={{
                    __html: e[`title_${lang}`],
                  }}
                />
              }
                {
                <div
                  className="fakultet-inner"
                  dangerouslySetInnerHTML={{
                    __html: e[`job_${lang}`],
                  }}
                />
              }
            </Link>
            
          ))
        ) 
        :(
          <h2>yuklanmoqda ...</h2>
          )}
      </div>
      
    </div>
  );
};

export default FacultetFrond;
