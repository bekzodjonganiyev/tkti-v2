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
   
  return (
          <div className="p-5">
            <div className="graduates-info">
              <h3 className="">{studentInfo[lang].graduates.second}</h3>
            </div>
            <div className="graduates-students">

              <div className="graduates-item">
                <img
                  src={`${talaba1}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b1}</h4>
                <p>{studentInfo[lang].talaba.p1}</p>
              </div>

              <div className="graduates-item">
                <img
                  src={`${talaba2}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b2}</h4>
                <p>{studentInfo[lang].talaba.p2}</p>
              </div>

              <div className="graduates-item">
                <img
                  src={`${talaba3}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b3}</h4>
                <p>{studentInfo[lang].talaba.p3}</p>
              </div>

              <div className="graduates-item">
                <img
                  src={`${talaba4}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b4}</h4>
                <p>{studentInfo[lang].talaba.p4}</p>
              </div>

              <div className="graduates-item">
                <img
                  src={`${talaba5}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b5}</h4>
                <p>{studentInfo[lang].talaba.p5}</p>
              </div>

              <div className="graduates-item">
                <img
                  src={`${talaba6}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b6}</h4>
                <p>{studentInfo[lang].talaba.p6}</p>
              </div>

              <div className="graduates-item">
                <img
                  src={`${talaba7}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b7}</h4>
                <p>{studentInfo[lang].talaba.p7}</p>
              </div>

              <div className="graduates-item">
                <img
                  src={`${talaba8}`}
                  className="students_img"
                  alt="edu-uz"
                />
                <h4>{studentInfo[lang].talaba.b8}</h4>
                <p>{studentInfo[lang].talaba.p8}</p>
              </div>

            </div>
          </div>
  );
};

export default GiftedStudents;
