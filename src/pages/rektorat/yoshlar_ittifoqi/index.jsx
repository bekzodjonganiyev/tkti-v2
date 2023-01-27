import { useRef } from "react";
import { useContext } from "react";
import YoshLarIttifoqiLang from "./lang";
import YoshlarItt from "../../../files/yosh.png";
import "./index.css";
import { Context } from "../../../context";

function YoshlarIttifoqi() {
  const tabOne = useRef();
  const tabTwo = useRef();
  const { lang } = useContext(Context);
  return (
    <div className="wrapped mb-5">
    <h3>{YoshLarIttifoqiLang[lang].title}</h3>
    <div className="tab">
      <button
        className="tablinks"
        onClick={() => {
          tabTwo.current.classList.remove("opened");
          tabOne.current.classList.add("opened");
        }}
        id="defaultOpen"
      >
        {YoshLarIttifoqiLang[lang].maqsad.title}
      </button>
      <button
        className="tablinks"
        onClick={() => {
          tabOne.current.classList.remove("opened");
          tabTwo.current.classList.add("opened");
        }}
        id="defaultOpen"
      >
        {YoshLarIttifoqiLang[lang].yoshlarga.title}
      </button>
    </div>
    <div ref={tabOne} className="maqsad__wrapper tabcontent opened ">
      <h3>{YoshLarIttifoqiLang[lang].maqsad.title}</h3>
      <span>
        <b>{YoshLarIttifoqiLang[lang].maqsad.text1}</b>
      </span>
      <span>
        <b>{YoshLarIttifoqiLang[lang].maqsad.text2}</b>
      </span>
      <span>
        <b>{YoshLarIttifoqiLang[lang].maqsad.text3}</b>
      </span>
      {YoshLarIttifoqiLang[lang].maqsad.data.map((e, index) => (
        <span key={index}>- {e}</span>
      ))}
    </div>

    <div ref={tabTwo} className="maqsad__wrapper tabcontent">
      <h4>{YoshLarIttifoqiLang[lang].yoshlarga.title}</h4>
      <h3 className="text-center">
        {YoshLarIttifoqiLang[lang].yoshlarga.h1}
      </h3>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.h2}
      </h4>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.h3}
      </h4>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.bob}
      </h4>
      <h4
        className="yoshlar__titles card__html__content"
        dangerouslySetInnerHTML={{
          __html: YoshLarIttifoqiLang[lang].yoshlarga.data,
        }}
      ></h4>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.bob2}
      </h4>
      <h4
        className="yoshlar__titles card__html__content"
        dangerouslySetInnerHTML={{
          __html: YoshLarIttifoqiLang[lang].yoshlarga.data2,
        }}
      ></h4>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.bob3}
      </h4>
      <h4
        className="yoshlar__titles"
        dangerouslySetInnerHTML={{
          __html: YoshLarIttifoqiLang[lang].yoshlarga.data3,
        }}
      ></h4>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.bob4}
      </h4>
      <h4
        className="yoshlar__titles"
        dangerouslySetInnerHTML={{
          __html: YoshLarIttifoqiLang[lang].yoshlarga.data4,
        }}
      ></h4>
      <h4 className="text-center yoshlar__titles__bold mt-5">
        {YoshLarIttifoqiLang[lang].yoshlarga.h4}
      </h4>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.h5}
      </h4>
      <h4 className="text-center yoshlar__titles__bold">
        {YoshLarIttifoqiLang[lang].yoshlarga.h6}
      </h4>
    </div>

    <div className="cardHodim">
      <div className="cardInfo">
        <div className="cardImg">
          <img src={YoshlarItt} alt="employer img" />
        </div>
        <div className="cardDesc">
          <span className="cardJob">{YoshLarIttifoqiLang[lang].teacher.name}</span>
          <div className=" aSD"></div>
          <br />
          <p>{YoshLarIttifoqiLang[lang].teacher.job}</p>
          <div className="cardEmail">
         
          
            <span><i className="fa-solid fa-envelope"></i></span>
            <a href="mailto:ulug85bek77@gmail.com">
                ulug85bek77@gmail.com
              </a>
          </div>
          <div className="cardEmail">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:+998712449235">+99871 244-92-35</a>
          </div>
        </div>
      </div>
    </div>
   
    
  </div>
  );
}

export default YoshlarIttifoqi;
