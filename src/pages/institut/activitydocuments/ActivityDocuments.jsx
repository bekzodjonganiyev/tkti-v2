import React, { useState, useContext } from "react";
import { Context } from "../../../context";

import "./activityDocuments.css";

const ActivityDocuments = () => {
  
  const { lang } = useContext(Context);
    const [title] = useState({
      uz: "ILMIY LOYIHALAR",
      ru: "НАУЧНЫЕ ПРОЕКТЫ",
      en: "SCIENTIFIC PROJECTS",
    });
    const [data] = useState([
      {
        link: "01.10.2020-30.09.2022",
        uz: "AQShning American Counsil for International Education “Central Asia University Partnerships Program” dasturi",
        ru: "Программа Американского совета по международному образованию «Программа партнерства университетов Центральной Азии»",
        en: "American Council for International Education \"Central Asia University Partnerships Program\" program",
      },
      {
        link: "01.10.2020-30.09.2022",
        uz: "Qishloq xo‘jaligi ekinlari uchun tarkibi xlorsiz kaliyli o‘g‘itlarni uzluksiz ishlab chiqarish texnologiyasini yaratish",
        ru: "Создание технологии непрерывного производства бесхлорных калийных удобрений для сельскохозяйственных культур",
        en: "Development of composition and technology of dental composite cements",
      },
      {
        link: "01.11.2021-31.10.2023",
        uz: "Jerdanak gilslaneslar asosida energotejamkor o‘ga chidamli shamot g‘ishtlarni olish texnologiyasini yaratish",
        ru: "Создание энергоэффективной технологии производства огнеупорного шамотного кирпича на основе жерданакских гильзланов",
        en: "Creation of an energy-efficient technology for the production of refractory fireclay bricks based on Zherdanak gilzlans",
      },
      {
        link: "2022-2023",
        uz: "Stomatologik kompozision sementlar tarkibini va texnologiyasini ishlab chiqish",
        ru: "Разработка состава и технологии стоматологических композитных цементов",
        en: "Development of the composition and technology of dental composite cements",
      },
      {
        link: "2021-2023",
        uz: "Minerallashgan quvur, fiting, panel va pol qoplamalari ishlab chiqishning innovasion texnologiyasini yaratish",
        ru: "Создание инновационной технологии разработки минерализованных труб, фитингов, панелей и напольных покрытий",
        en: "Creation of an innovative technology for the development of mineralized pipes, fittings, panels and flooring",
      },
      {
        link: "2020-2022",
        uz: "Mahalliy xom ashyolardan oqilona foydalanib glyutensiz non-bulka mahsulotlari tayyorlash texnologiyasini ishlab chiqish oziq-ovqat mahsulotlari ishlab chiqarish chiqitlaridan oqilona foydalanish",
        ru: "Разработка технологии производства безглютеновых хлебобулочных изделий с использованием местного сырья, рациональное использование отходов пищевых производств",
        en: "Development of technology for the production of gluten-free bakery products using local raw materials, rational use of food production waste",
      },
      {
        link: "2020-2022",
        uz: "Mahalliy xom ashyolardan oqilona foydalanib glyutensiz non-bulka mahsulotlari tayyorlash texnologiyasini ishlab chiqish oziq-ovqat mahsulotlari ishlab chiqarish chiqitlaridan oqilona foydalanish",
        ru: "Разработка технологии получения диетического маргарина, обогащенного функциональными добавками, на основе местного сырья.",
        en: "Development of technology for the production of gluten-free bakery products using local raw materials, rational use of food production waste",
      },
      {
        link: "2021-2022",
        uz: "O‘zgartirilgan asfaltni ishlab chiqarishning intellektual jarayoni uchun qo‘shma tadqiqotlar va texnologiyalarni ishlab chiqish.",
        ru: "Совместные исследования и разработка технологий для интеллектуального процесса производства модифицированного асфальта. ",
        en: "Joint research and development of technologies for the intelligent production process of modified asphalt.",
      },
    ]);

  return (
    <div className="wrapped mb-5">
     <div className="bolimlar__wrapper">
            <h3 className="project-title"> {title[lang]} </h3>
            <div className="bolimlar__list activity__documents">
              {data &&
                data.map((e, index) => (
                  <div key={index} className="bolim document-info">
                    <a href="#">
                      <span>{e.link}</span>
                      <div className="bolim__inner">
                        <h5>{e[lang]}</h5>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
    </div>
  );
};

export default ActivityDocuments;