import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";

const BolimMarkaz = () => {
  const { lang,textSytles, DataGetter } = useContext(Context);
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
    DataGetter(setBolim, 'bm_data/all')
    DataGetter(setMarkaz, 'markaz_data/all')
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