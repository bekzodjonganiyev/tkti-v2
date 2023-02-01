import { useContext, useState } from "react";
import IntDarsJadvali from "../../../files/intdarsjadvali.pdf";
import IntDiplom from "../../../files/intdiplom.pdf";
import IntLibrary from "../../../files/intlibrary.pdf";
import Intelqabul1 from "../../../files/intelqabul1.pdf";
import Intsci1 from "../../../files/intsci1.pdf";
import Intqabul from "../../../files/intqabul.pdf";
import Intvacancy from "../../../files/intvacancy.pdf";
import Ishchioquvreja1 from "../../../files/ishchiuquvreja1.pdf";
import { Context } from "../../../context";
import AnimateCard from '../../../components/animateCard'
import {ThreeDots, DoorDashFavorite} from '../../../components/animjs'
import { useEffect } from "react";


function InteractiveServices() {
  const [display, setDisplay] = useState(true);
  const { lang, textSytles } = useContext(Context);
  const [title] = useState({
    uz: "Interaktiv xizmatlar reglamentlari",
    ru: "Регламент интерактивных сервисов",
    en: "Interactive Services Regulations",
  });
  const [data] = useState([
    {
      link: IntDarsJadvali,
      uz: "Dars jadvali interaktiv xizmati reglamenti",
      ru: "Регламент интерактивного сервиса расписания уроков",
      en: "Regulations of the interactive service of the lesson schedule",
    },
    {
      link: IntDiplom,
      uz: "Diplom haqida ma’lumot interaktiv xizmati reglamenti",
      ru: "Регламент интерактивного сервиса дипломной информации",
      en: "Regulation of interactive service of diploma information",
    },
    {
      link: IntLibrary,
      uz: "Elektron kutubxona interaktiv xizmati reglamenti",
      ru: "Регламент интерактивных услуг электронной библиотеки",
      en: "Electronic library interactive service regulation",
    },
    {
      link: Intelqabul1,
      uz: "Elektron qabul interaktiv xizmati reglamenti",
      ru: "Положение об интерактивной услуге электронного приема",
      en: "Regulation of electronic admission interactive service",
    },
    {
      link: Intsci1,
      uz: "Ilmiy faoliyat interaktiv xizmati reglamenti",
      ru: "Регламент интерактивной службы научной деятельности",
      en: "Regulation of the interactive service of scientific activity",
    },
    {
      link: Intqabul,
      uz: "TKTIga qabul interaktiv xizmati reglamenti",
      ru: "Регламент интерактивной услуги приема в ТХТИ",
      en: "Regulation of the interactive service of admission to TKTI",
    },
    {
      link: Intvacancy,
      uz: "Bo’sh ish o’rinlari interaktiv xizmati reglamenti",
      ru: "Регламент интерактивного сервиса вакансий",
      en: "Regulation of the interactive service of vacancies",
    },
    {
      link: Ishchioquvreja1,
      uz: "Ishchi o’quv rejalar interaktiv xizmati reglamenti",
      ru: "Регламент интерактивного сервиса рабочих учебных планов",
      en: "Regulations of the interactive service of working educational plans",
    },
  ]);
  useEffect(()=>{
    setTimeout(()=>{
      setDisplay(false)
    },700)
  },[])
  return (
    <div className="wrapped">
              {
                display ?(
                  <ThreeDots width='100%' />
                ):(
                  <h2 className="text-center" style={textSytles(30, 700)}>{title[lang]}</h2>
                )
              }
        <div className="facultetInfo">
                {
                display ?(
                  <div style={{marginTop:'-120px'}} className="loader__wrapper">
                      <DoorDashFavorite width='400px' />
                      <DoorDashFavorite width='400px' />
                      <DoorDashFavorite width='400px' />
                  </div>
                ):(
                  data &&
                  data.map((e, index) => (
                    <AnimateCard isPdf={true}  key={index}  refLink={e.link} mainTitle={e[lang]} />
                  ))
                )
                }
            </div>
    </div>
  );
}

export default InteractiveServices;