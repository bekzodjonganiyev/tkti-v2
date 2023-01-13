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

function InteractiveServices() {
  const { lang } = useContext(Context);
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
  return (
    <div className="wrapped">
        <div className="bolimlar__wrapper">
              <h2 className="text-center">{title[lang]}</h2>
              <div className="bolimlar__list interaktiv__list">
                {data &&
                  data.map((e, index) => (
                    <div key={index} className="bolim">
                      <a href={e.link}>
                        <div className="bolim__inner">
                          <h4>{e[lang]}</h4>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
    </div>
  );
}

export default InteractiveServices;