import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link, useParams } from "react-router-dom";

import "./Fakultet.css";

import XodimCard from "../../../components/xodim_card/XodimCard";

const FakultetId = () => {
  const { lang, globalUrl } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Fakultetlar haqida",
      desc: "Maqsad va vazifalari",
      kafedra: "Kafedralari",
    },
    ru: {
      title: "Fakultetlar haqida",
      desc: "Maqsad va vazifalari",
      kafedra: "Kafedralari",
    },
    en: {
      title: "Fakultetlar haqida",
      desc: "Maqsad va vazifalari",
      kafedra: "Kafedralari",
    },
  });
  const { id } = useParams();
  const [facultetId, setFacultetId] = useState([]);

  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    fetch(`${globalUrl}/Fak_data/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFacultetId(data.data));
  }, []);

  return (
    <div className="container">
      <div className="facultetDesc">
        {
          <div
            className="fakultetName card__html__content"
            dangerouslySetInnerHTML={{
              __html: facultetId[`title_${lang}`],
            }}
          />
        }
      </div>
      <div className="btnGroup">
        <button onClick={() => setActiveButton(1)}>{hero[lang].title}</button>
        <button onClick={() => setActiveButton(2)}>{hero[lang].desc}</button>
        <button onClick={() => setActiveButton(3)}>{hero[lang].kafedra}</button>

        {activeButton === 1 && (
          <div>
            {
              <div
                className="fakultet-inner card__html__content"
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
                className="fakultet-inner card__html__content"
                dangerouslySetInnerHTML={{
                  __html: facultetId[`maqsad_${lang}`],
                }}
              />
            }
          </div>
        )}
        {activeButton === 3 && (
          <div className="kafedraName">
            {facultetId?.kafedralar?.map((e) => (
              <Link key={e.id} to={`/kafedraId/${e._id}`}>
                <h3>{e[`title_${lang}`]}</h3>
              </Link>
            ))}
          </div>
        )}

        <div className="cardHodim">
          {facultetId?.hodimlar?.map((e, index) => (
            <XodimCard
              img={`${globalUrl}/${e.photo}`}
              job={e[`job_${lang}`]}
              name={e[`name_${lang}`]}
              email={e.email}
              tel={e.tell}
            />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default FakultetId;
