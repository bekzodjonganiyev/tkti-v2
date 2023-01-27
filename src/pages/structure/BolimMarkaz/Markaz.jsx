import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";


const Markaz = () => {
  const { lang, globalUrl } = useContext(Context);

  const [facultet, setFacultet] = useState([]);

  useEffect(() => {
    fetch(`${globalUrl}/markaz_data/all`, {
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
     
      <div className="facultetInfo">
        {facultet?.length > 0
        ? (
          facultet?.map((e, index) => (
            <Link className="facultetTitle" to={`/markazId/${e._id}`} key={index}>
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

    </div>
  );
};

export default Markaz;
