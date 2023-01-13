import React, {useState,useContext, useEffect} from "react";
import {Link} from "react-router-dom"

import "./qabul.css"
import { Context } from "../../context";
import QabulLang from "./lang";
import {AccordionComponent} from '../../components/accordion'
import QuestionForm from "../../components/questionform";

function Qabul() {
  const {lang, textSytles, refresh} = useContext(Context)
  const [about] = useState({
    uz:{
      text: "Toshkent kimyo-texnologiya institutida talabalarni qabul qilish va o‘qitish tartibi",
      bakalavr:"Bakalavriat va sirtqi ta'lim",
      magistr:"Magistratura ta'limi",
      doktorant:"Doktorantura ta'limi",
      qushma:"Qo'shma ta'lim",
      transfer:"O‘qishini ko‘chirish va qayta tiklash",

      hero:{
        title:`TKTI keng ko'lamli o'quv dasturlarini taklif etadi`,
        data: [`TKTI tadqiqotga asoslangan tadqiqotlarga yo‘naltirilgan keng ko‘lamli o‘quv dasturlarini taklif etadi. Abituriyentlar 30 dan ortiq ta’lim dasturlari orasidan tanlab, birinchi bosqich (bakalavr) sirtqi, ikkinchi mutaxassislik, qo‘shma ta’lim yo‘nalishlari, ikkinchi bosqich (magistratura) qo‘shma ta’lim yo‘nalishlari yoki uchinchi bosqich (doktorantura) ta’lim dasturlariga o‘qishga kirishlari mumkin.`]
      }
    },
    ru:{
      text:"Порядок приема и обучения студентов в Ташкентском химико-технологическом институте",
      bakalavr:"Бакалавриат и заочное обучение",
      magistr:"Магистратура",
      doktorant:"Докторантура",
      qushma:"Cовместное образование",
      transfer: "O‘qishini ko‘chirish va qayta tiklash",
      hero:{
        title:`ТХТИ предлагает широкий спектр образовательных программ`,
        data: [`ТХТИ предлагает широкий спектр академических программ, ориентированных на научные исследования. Абитуриенты могут выбирать из более чем 30 образовательных программ, первый уровень (бакалавриат) заочной формы обучения, второй уровень специализации, совместные направления образования, второй уровень (магистратура) совместных направлений образования или третий уровень (докторантура) могут поступать на образовательные программы. `]
      }
      
    },
    en:{
      text:"The procedure for accepting and teaching students at the Tashkent Institute of Chemical Technology",
      bakalavr:"Bachelor’s and Correspondence studies",
      magistr:"Master's education",
      doktorant:"Doctoral studies",
      qushma:"Joint education",
      transfer: "O‘qishini ko‘chirish va qayta tiklash",
      hero:{
        title:`TICT offers a wide range of educational programs`,
        data: [`TICT offers a wide range of academic programs focused on research-based research. Applicants can choose from more than 25 educational programs, first-level (bachelor's) part-time, second-level specialization, joint study areas, second-level (master's) joint study areas or third-level (doctorate ) can enroll in educational programs.`]
      }
    }
  });

  const [data, setData] = useState([
    {id:0, status: true, title:QabulLang[lang][0].title, content: QabulLang[lang][0].content},
    {id:1, status: false, title:QabulLang[lang][1].title, content: QabulLang[lang][1].content},
    {id:2, status: false, title:QabulLang[lang][2].title, content: QabulLang[lang][2].content},
   
    {id:4, status: false, title:QabulLang[lang][4].title, content: QabulLang[lang][4].content},
  ])

  useEffect(() =>{
   if(refresh){
    window.location.reload(true)
   }
  }, [lang])
  return (
    <div className="wrapped">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="qabul__hero__title" style={textSytles(32, 600)}> {about[lang].text} </h1>

            <div className="study__types__list">
              <Link to="/qabul/bakalavr" className="study__typeof">
                <h3> {about[lang].bakalavr}</h3>
              </Link>

              <Link to="/qabul/magistratura" className="study__typeof">
                <h3>{about[lang].magistr}</h3>
              </Link>

              <Link to="/qabul/doktarantura" className="study__typeof">
                <h3>{about[lang].doktorant}</h3>
              </Link>

              <Link to="/qabul/qushma" className="study__typeof">
                <h3>{about[lang].qushma}</h3>
              </Link>
              
            </div>
          </div>

          <div style={textSytles(18, 600)} className="study__on__tktu">
            <h3 style={textSytles(22, 600)}>{about[lang].hero.title}</h3>

            {
              about[lang].hero.data.map((e, index) =>(
                <p key={index}>{e}</p>
              ))
            }

            <ol className="dropdown__menu">
              <AccordionComponent arr={data} setarr={setData} />
            </ol>
            <QuestionForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qabul;