import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link, useParams } from "react-router-dom";
import Sherzod from "../FakultetId/sherzod.jpg";

import XodimCard from "../../../components/xodim_card/XodimCard";
const BolimMarkazId = () => {
  const { lang, globalUrl } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Fakultetlar haqida",
      desc: "Maqsad va vazifalari",
    },
    ru: {
      title: "об отделе",
      desc: "Цели и задачи",
    },
    en: {
      title: "about the department",
      desc: "Goals and objectives",
    },
  });
  const { id } = useParams();
  const [facultetId, setFacultetId] = useState([]);
  const [activeButton, setActiveButton] = useState(1);
  useEffect(() => {
    fetch(`${globalUrl}/bm_data/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFacultetId(data.data));
  }, [setFacultetId]);
  console.log(facultetId);

  return (
    <div className="container">
      <div className="facultetDesc">
        {
          <div
            className="fakultet-inner"
            dangerouslySetInnerHTML={{
              __html: facultetId[`title_${lang}`],
            }}
          />
        }
      </div>
      <div className="btnGroup">
        <button onClick={() => setActiveButton(1)}>{hero[lang].title}</button>
        <button onClick={() => setActiveButton(2)}>{hero[lang].desc}</button>

        {activeButton === 1 && (
          <div>
            {
              <div
                className="fakultet-inner"
                dangerouslySetInnerHTML={{
                  __html: facultetId[`haqida_${lang}`],
                }}
              />
            }
          </div>
        )}
        {activeButton === 2 && (
          <div>
            {
              <div
                className="fakultet-inner"
                dangerouslySetInnerHTML={{
                  __html: facultetId[`maqsad_${lang}`],
                }}
              />
            }
          </div>
        )}
      </div>
      <div className="cardHodim">
        {facultetId?.hodimlar?.map((e, index) => (
          <XodimCard
            key={index}
            img={`${globalUrl}/${e.photo[0]}`}
            job={e[`job_${lang}`]}
            name={e[`name_${lang}`]}
            email={e.email}
            tel={e.tell}
          />
        ))}
      </div>
    </div>
  );
};

export default BolimMarkazId;
