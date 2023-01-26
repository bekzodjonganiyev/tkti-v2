import React, { useContext } from "react";

import "react-multi-carousel/lib/styles.css";
import "./Graduates.css";

import talaba1 from "../../../files/b1.jpg";
import talaba2 from "../../../files/b2.jpg";
import talaba3 from "../../../files/b3.jpg";
import talaba4 from "../../../files/b4.jpg";
import talaba5 from "../../../files/b5.jpg";
import talaba6 from "../../../files/b6.jpg";
import talaba7 from "../../../files/b7.jpg";
import talaba8 from "../../../files/b8.jpg";
import studentInfo from "./lang";
import { Context } from "../../../context";

const GiftedStudents = () => {
  const { lang } = useContext(Context);

  fetch("http://localhost:5000/Fak_data/all", {
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => console.log(res.data));

  return (
    <div className="container-fluid">
      <div className="studentCard">
      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba1}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b1}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p1}</p>
          </div>
        </div>
      </div>

      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba2}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b2}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p2}</p>
          </div>
        </div>
      </div>

      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba3}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b3}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p3}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba4}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b4}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p4}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba5}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b5}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p5}</p>
          </div>
        </div>
      </div>

      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba6}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b6}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p6}</p>
          </div>
        </div>
      </div>

      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba7}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b7}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p7}</p>
          </div>
        </div>
      </div>

      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba8}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b8}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p8}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GiftedStudents;
