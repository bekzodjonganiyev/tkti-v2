import { useRef } from "react";
import { useContext } from "react";
import FilialLang from "./lang";
import Image1 from "../../files/shaxrisabz.jpg";
import Image2 from "../../files/yangiyer.jpg";
import "./filial.css";
import { Context } from "../../context";

function PageStaticAkademikFilial() {
    const tabOne = useRef();
  const tabTwo = useRef();
  const { lang } = useContext(Context);
  return (
    <div className="wrapped mb-5">
              <h2 className="text-center mb-5">{FilialLang[lang].title}</h2>
              <div className="tab">
                <button
                  className="tablinks"
                  onClick={() => {
                    tabTwo.current.classList.remove("opened");
                    tabOne.current.classList.add("opened");
                  }}
                  id="defaultOpen"
                >
                  {FilialLang[lang].shahrisabz.title}
                </button>
                <button
                  className="tablinks"
                  onClick={() => {
                    tabOne.current.classList.remove("opened");
                    tabTwo.current.classList.add("opened");
                  }}
                  id="defaultOpen"
                >
                  {FilialLang[lang].yangiyer.title}
                </button>
              </div>
              <div ref={tabOne} className="maqsad__wrapper tabcontent opened ">
             
              <img
                className="top-photo_style tap__photo__custom"
                src={Image1}
                alt="About us"
              />
              <h3 className="text-center">{FilialLang[lang].third}</h3>
             
              <div className="tabcontent opened">
                <h5>{FilialLang[lang].shahrisabz.title}</h5>
                {FilialLang[lang].shahrisabz.data.map((e, index) => (
                  <p key={index}>{e}</p>
                ))}
                <p>
                  {FilialLang[lang].site}
                  <a href="http://stict.uz" target="blank">
                    {" "}
                    http://stict.uz
                  </a>
                </p>
              </div>
              </div>
              <div ref={tabTwo} className="maqsad__wrapper tabcontent">
                <img
                  className="top-photo_style tap__photo__custom"
                  src={Image2}
                  alt="About us"
                />
                <h3 className="text-center">{FilialLang[lang].second}</h3>
                <h5>{FilialLang[lang].yangiyer.title}</h5>
                {FilialLang[lang].yangiyer.data.map((e, index) => (
                  <p key={index}>{e}</p>
                ))}
                <p>
                  {FilialLang[lang].site}
                  <a href="http://tktiyf.uz" target="blank">
                    {" "}
                    http://stict.uz
                  </a>
                </p>
              </div>
            </div>
  );
}

export default PageStaticAkademikFilial;
