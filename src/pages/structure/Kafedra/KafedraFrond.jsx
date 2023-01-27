import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";

const KafedraFrond = () => {
    const { lang, globalUrl } = useContext(Context);
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
    const [kafedra, setKafedra] = useState([]);
      
  useEffect(() => {
    fetch(`${globalUrl}/kafedra_data/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => setKafedra(data.data));
 
}, []);

return (
    <div className="container">
      <div className="departments">
              <h2>{hero[lang].title}</h2>
              <p>{hero[lang].about}</p>
        </div>
      <div className="facultetInfo">
        {kafedra?.length > 0
        ? (
          kafedra?.map((e, index) => (
            <Link className="facultetTitle" to={`/kafedraId/${e._id}`} key={index}>
              {
                <div
                  className="fakultet-inner card__html__content"
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
    </div>
  )
}


export default KafedraFrond