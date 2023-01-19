import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context";
import { Link, useParams } from "react-router-dom";
import './faoliyat.css'
function Faoliyat({ variant }) {
  const { lang } = useContext(Context);
  const { id } = useParams();
  const [faoliyat, setFaoliyat] = useState({
    success: false,
    data: {},
  });
  useEffect(() => {
    fetch(`http://localhost:5000/faoliyat/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFaoliyat(data));
  }, []);


  const [faoliyatId, setFaoliyatId] = useState({
    success: false,
    data: {},
  });
  
  useEffect(() => {
    fetch(`http://localhost:5000/faoliyat_data/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFaoliyatId(data));
  }, []);
  console.log(faoliyatId);

  return (
    <div className="boxsss">
      <div className="faoliyatInfo">
        {faoliyat.data && faoliyat.data.length > 0 ? (
          faoliyat.data.map((e, index) => (
            <Link className="edfdwe"  key={index} to="/faoliyat-hujjatlari">
              <ul>
                <li className="faoliyat__data">
                {!e[`${variant}__id`] && (
                <>
                  <h2>{e[`title_${lang}`].split(" ").join(" ")}</h2>

                  <p key={index}>{e[`about_${lang}`]}</p>
                </>
              )}
                </li>
              </ul>
             
            </Link>
          ))
        ) : (
          <h2>yuklanmoqda ...</h2>
        )}


      </div>
      <div>
      {faoliyatId.data && faoliyatId.data.length > 0 ? (
          faoliyatId.data.map((e, index) => (
            
              <div>
                <div className="faoliyat__datas" key={index}>
               
                <>
                  <h2>{e[`title_${lang}`].split(" ").join(" ")}</h2>

                  <p key={index}>{e[`about_${lang}`]}</p>
                </>
              
                </div>
                </div>
            
             
        
          ))
        ) : (
          <h2>yuklanmoqda ...</h2>
        )}
      </div>
    </div>
  );
}

export default Faoliyat;
