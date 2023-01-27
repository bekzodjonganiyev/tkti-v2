import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link, useParams } from "react-router-dom";
import XodimCard from "../../../components/xodim_card/XodimCard";

const MarkazId = () => {
  const { lang, globalUrl } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Fakultetlar haqida",
      desc: "Maqsad va vazifalari",
      info:"Markazlar"
    },
    ru: {
      title: "об отделе",
      desc: "Цели и задачи",
      info:"Markazlar"
    },
    en: {
      title: "about the department",
      desc: "Goals and objectives",
      info:"Markazlar"
    },
  });
  const { id } = useParams();
  const [bolimId, setBolimId] = useState();
  const [activeButton, setActiveButton] = useState(1);
  useEffect(() => {
    fetch(`${globalUrl}/markaz_data/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBolimId(data.data));
  }, []);
  console.log(bolimId);

  return (
    <div className="container">
      
      <div className="facultetDesc">
        {bolimId?.map((e) => (
          <div key={e.id}>
            {
              <div
                className="fakultetName"
                dangerouslySetInnerHTML={{
                  __html: e[`title_${lang}`],
                }}
              />
            }
          </div>
        ))}
      </div>
      <div className="btnGroup">
        <button onClick={() => setActiveButton(1)}>{hero[lang].title}</button>
        <button onClick={() => setActiveButton(2)}>{hero[lang].desc}</button>

        {bolimId?.map((e, index) => (
          <div key={index}>
            {activeButton === 1 && (
              <div>
                <div
                  className="fakultet-inner"
                  dangerouslySetInnerHTML={{
                    __html: e[`haqida_${lang}`],
                  }}
                />
                {}
              </div>
            )}
            {activeButton === 2 && (
              <div>
                <div
                  className="fakultet-inner"
                  dangerouslySetInnerHTML={{
                    __html: e[`maqsad_${lang}`],
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="cardHodim">
        {bolimId?.hodimlar?.map((e, index) => (
          <XodimCard
            key={index}
            img={`${globalUrl}/${e.photo}`}
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

export default MarkazId;
