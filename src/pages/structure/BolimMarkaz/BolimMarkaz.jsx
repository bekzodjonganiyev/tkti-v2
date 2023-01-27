import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";
import Markaz from "./Markaz";

const BolimMarkaz = () => {
  const { lang,globalUrl } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Bo'limlar",
      

    },
    ru: {
      title: "Разделы",
    
      },
    en: {
      title: "Departments",
    
      },
  });

  const [facultet, setFacultet] = useState([]);

  useEffect(() => {
    fetch(`${globalUrl}/bm_data/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFacultet(data.data));
    
  }, [setFacultet]);
  console.log(facultet);

  return (
    <div className="container">
   <div className="bolimMarkaz">
    <h3>
    {hero[lang].title}
    </h3>
   </div>
     
      <div className="facultetInfo">
        {facultet?.length > 0
        ? (
          facultet?.map((e, index) => (
            <Link className="facultetTitle" to={`/bolimMarkazId/${e._id}`} key={index}>
              {
                <div
                  className="fakultet-inner"
                  dangerouslySetInnerHTML={{
                    __html: e[`title_${lang}`],
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

      <Markaz />
    </div>
  );
};

export default BolimMarkaz;
