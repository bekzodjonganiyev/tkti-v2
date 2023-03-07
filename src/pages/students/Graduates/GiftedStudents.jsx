import React, { useContext, useState } from "react";

import "react-multi-carousel/lib/styles.css";
import "./Graduates.css";

import talaba1 from "../../../files/student/b1.jpg";
import talaba2 from "../../../files/student/b2.jpg";
import talaba3 from "../../../files/student/b3.jpg";
import talaba4 from "../../../files/student/b4.jpg";
import talaba5 from "../../../files/student/b5.jpg";
import talaba6 from "../../../files/student/b6.jpg";
import talaba7 from "../../../files/student/7.jpg";
import talaba8 from "../../../files/student/8.jpg";
import talaba9 from "../../../files/student/b9.jpg";
import talaba10 from "../../../files/student/b10.jpg";
import talaba11 from "../../../files/student/b11.jpg";
import talaba12 from "../../../files/student/b12.jpg";
import talaba13 from "../../../files/student/b13.jpg";
import talaba14 from "../../../files/student/b14.jpg";
import talaba15 from "../../../files/student/b15.jpg";
import talaba16 from "../../../files/student/b16.jpg";
import talaba17 from "../../../files/student/b17.jpg";
import talaba18 from "../../../files/student/b18.jpg";
import talaba19 from "../../../files/student/b19.jpg";
import talaba20 from "../../../files/student/b20.jpg";
import talaba21 from "../../../files/student/b21.jpg";
import talaba22 from "../../../files/student/b22.jpg";
import talaba23 from "../../../files/student/b23.jpg";





import studentInfo from "./lang";
import { Context } from "../../../context";

const GiftedStudents = () => {
  const { lang } = useContext(Context);

 const [student] = useState({
  uz:{
    b1: "Goipova Shaxnoza Saidazim qizi",
    p1: "Tayanch doktorantlar (PhD) uchun Oʻzbekiston Respublikasi Prezidenti stipendiyasi sohibi",
    img:'talaba1'
  },
  ru:{
    b1:"sdsd",
    img1:"talaba1",
    p1:"hjgkjh",
  },
  en:{
    b1:"sdsd",
    img1:"talaba1",
    p1:"hjgkjh",
  },
 })

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
      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba9}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b9}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p9}</p>
          </div>
        </div>
      </div>
      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba10}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b10}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p10}</p>
          </div>
        </div>
      </div>




      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba11}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b11}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p11}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba12}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b12}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p12}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba13}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b13}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p13}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba14}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b14}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p14}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba15}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b15}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p15}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba16}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b16}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p16}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba17}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b17}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p17}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba18}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b18}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p18}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba19}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b19}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p19}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba20}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b20}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p20}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba21}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b21}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p21}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba22}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b22}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p22}</p>
          </div>
        </div>
      </div>


      <div className="cardHodim">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={`${talaba23}`} alt="employer img" />
          </div>
          <div className="cardDesc">
            <span className="cardJob">{studentInfo[lang].talaba.b23}</span>
            <div className=" aSD"></div>
            <br />
            <p>{studentInfo[lang].talaba.p23}</p>
          </div>
        </div>
      </div>






     
      </div>
    </div>
  );
};

export default GiftedStudents;
