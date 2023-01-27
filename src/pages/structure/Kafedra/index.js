import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";

const KafedraComponent = () => {
  const { lang, DataGetter } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Kafedralar",
    
      },
    ru: {
      title: "Департаменты",
     
      },
    en: {
      title: "Departments",
      
      },
  });
  const [rektorat, setRektorat] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    DataGetter(setRektorat, 'kafedra_data/all')
  }, []);

  return (
    <div className="container">
      <div className="departments">
              <h2>{hero[lang].title}</h2>
        </div>
      <div className="facultetInfo">
        {
            rektorat.isFetched && rektorat.data ? (
                rektorat.data.map((item, index) => (
                    <Link className="facultetTitle" to={`/kafedralar/${item.title_uz.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${item._id}`} key={index}>
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

export default KafedraComponent;