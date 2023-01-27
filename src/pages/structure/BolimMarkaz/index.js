import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";

const BolimMarkaz = () => {
  const { lang,globalUrl, textSytles } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Bo'limlar",
      title2:`Markazlar`
    },
    ru: {
      title: "Разделы",  
      title2:`Центры`
      },
    en: {
      title: "Departments", 
      title2:`Centers`  
      },
  });

  const [bolim, setBolim] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  const [markaz, setMarkaz] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    fetch(`${globalUrl}/bm_data/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.success && setBolim({ data: data.data, isFetched: true })
      )
      .catch(() => setBolim({ error: true }));

      fetch(`${globalUrl}/markaz_data/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (data) =>
            data.success && setMarkaz({ data: data.data, isFetched: true })
        )
        .catch(() => setMarkaz({ error: true }));
  }, []);

  return (
    <div className="container">
   <h3 style={textSytles(30,700)} className="text-center">{hero[lang].title}</h3>
      <div className="facultetInfo">
        {
            bolim.isFetched && bolim.data ? (
                bolim.data.map((item, index) => (
                    <Link className="facultetTitle" to={`/bolimlar/${item.title_uz.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${item._id}`} key={index} >
                      <span style={textSytles(20,600)}>{item[`title_${lang}`]}</span>
                    </Link>
                ))
            ):(
                <></>
            )
        }
      </div>

      <h3 style={textSytles(30,700)} className="text-center">{hero[lang].title2}</h3>

      <div className="facultetInfo">
        {
            markaz.isFetched && markaz.data ? (
                markaz.data.map((item, index) => (
                    <Link className="facultetTitle" to={`/markazlar/${item.title_uz.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${item._id}`} key={index} >
                      <span style={textSytles(20,600)}>{item[`title_${lang}`]}</span>
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

export default BolimMarkaz;