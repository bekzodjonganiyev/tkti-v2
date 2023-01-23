import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link, useParams } from "react-router-dom";
import Sherzod from "./sherzod.jpg";
import "./Fakultet.css";
import "./style.css";

const FakultetId = () => {
  const { lang } = useContext(Context);
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
    fetch(`http://backend.tkti.uz/Fak_data/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFacultetId(data.data));
  }, []);
  console.log(facultetId);

  return (
    <div className="container">
      <div className="facultetDesc">
        {
          <div
            className="fakultetName"
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
        {activeButton === 3 && (
          <div className="kafedraName">
            {facultetId?.kafedralar?.map((e) => (
              <Link key={e.id} to={`/facultyId/${e._id}`}>
                <h3>{e[`title_${lang}`]}</h3>
              </Link>
            ))}
          </div>
        )}

        <div className="cardHodim">
          {facultetId?.hodimlar?.map((e, index) => (
            <div key={index} className="cardInfo">
              <div className="cardImg">
                <img src={Sherzod} alt="" />
              </div>
              <div className="cardDesc">
                <span className="cardJob">{e[`job_${lang}`]}</span>
                <div className=" aSD"></div>
                <br />
                <p>{e[`name_${lang}`]}</p>
                <div>
                  <span>Email: </span>
                  {e[`email`]}
                </div>

                <div>
                  <span>Telefon</span>
                  <a href="tel:+{e[`tell`]}"> {e[`tell`]}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default FakultetId;
