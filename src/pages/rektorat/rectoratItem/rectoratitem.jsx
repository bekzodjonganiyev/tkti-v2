import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ImageRectorat1 from "../../../assets/images/Rector.jpeg";
import ImageRectorat2 from "../../../assets/images/Oquv-pro-rector.jpg";
import ImageRectorat3 from "../../../assets/images/Ilmiy-pro-rector.jpg";
import ImageRectorat4 from "../../../assets/images/Moliya-pro-rectori.jpg";
import ImageRectorat5 from "../../../assets/images/Manviy-pro-rector.jpg";
import ContactLangMy from "../lang";
import "./rectoratitem.css";
import { useEffect } from "react";
import { Context } from "../../../context";
import { AccordionComponent } from "../../../components/accordion";

function RectoratItem() {
  const { id } = useParams();
  const { lang, refresh } = useContext(Context);
  const rectoratLang = {
    uz: {
      rahbariyat: {
        first: "Rektor",
        second: "O’quv ishlari bo’yicha prorektor",
        third: "Ilmiy ishlar va innovatsiyalar bo‘yicha prorektor",
        fourth: "Iqtisodiy va tashkiliy masalalar bo‘yicha prorektor",
        fifth:
          "Yoshlar masalalari va ma'naviy-ma'rifiy ishlari bo'yicha birinchi prorektor",
        sixth: "Usmonov Botir Shukurillayevich",
        seventh: "Safarov Toyir Tursunovich",
        eighth: "Pulatov Xayrulla Lutpullayevich",
        nineth: "Qodirov Bobiromon Bekmurodovich",
        tenth: "Boborajabov Bahodir Nasriddinovich",
      },
    },
    ru: {
      rahbariyat: {
        first: "Ректор",
        second: "Проректор по учебной работе",
        third: "Проректор по научной работе и инновациям",
        fourth: "Проректор по экономическим и организационным вопросам",
        fifth:
          "Первый проректор по работе с молодежью и духовно-просветительской работе",
        sixth: "Усмонов Ботир Шукуриллаевич",
        seventh: "Сафаров Тойир Турсунович",
        eighth: "Пулатов Хайрулла Лутпуллаевич",
        nineth: "Кадыров Бобиромон Бекмуродович",
        tenth: "Боборажабов Баходир Насриддинович",
      },
    },
    en: {
      rahbariyat: {
        first: "Rector",
        second: "Vice - Rector for Academic Affairs",
        third: "Vice - Rector for Research and Innovation",
        fourth: "Vice - rector for economic and organizational issues",
        fifth: "First vice-rector for youth issues and spiritual and educational affairs",
        sixth: "Usmonov Botir Shukurillaevich",
        seventh: "Safarov Toyir Tursunovich",
        eighth: "Pulatov Khayrulla Lutpullaevich",
        nineth: "Kadirov Bobiromon Bekmurodovich",
        tenth: "Boborajabov Bahodir Nasriddinovich",
      },
    },
  };
  const [accordion, setAccordion] = useState([
    {
      human_id: 1,
      id: 1,
      status: true,
      title: ContactLangMy[lang].rektor.p2,
      content: `<p>${ContactLangMy[lang].rektor.p3}</p> <br /> <p>${ContactLangMy[lang].rektor.p4}</p> <br /> <p>${ContactLangMy[lang].rektor.p5}</p> <br /> <p>${ContactLangMy[lang].rektor.p6}</p>`,
    },

    {
      human_id: 1,
      id: 2,
      status: false,
      title: ContactLangMy[lang].rektor.p7,
      content: `<li>${ContactLangMy[lang].rektor.p8}</li> <li>${ContactLangMy[lang].rektor.p9}</li> <li>${ContactLangMy[lang].rektor.p10}</li> <li>${ContactLangMy[lang].rektor.p11}</li> <li>${ContactLangMy[lang].rektor.p12}</li>
                      <li>${ContactLangMy[lang].rektor.p13}</li>
                      <li>${ContactLangMy[lang].rektor.p14}</li>
                      <li>${ContactLangMy[lang].rektor.p15}</li>
                      <li>${ContactLangMy[lang].rektor.p16}</li>
                      <li>${ContactLangMy[lang].rektor.p17}</li>
                      <li>${ContactLangMy[lang].rektor.p18}</li>
                      <li>${ContactLangMy[lang].rektor.p19}</li>`,
    },

    {
      human_id: 1,
      id: 3,
      status: false,
      title: ContactLangMy[lang].rektor.p20,
      content: `<li>${ContactLangMy[lang].rektor.p21}</li>
           <li>${ContactLangMy[lang].rektor.p22}</li>
           <li>${ContactLangMy[lang].rektor.p23}</li>`,
    },

    {
      human_id: 1,
      id: 4,
      status: false,
      title: ContactLangMy[lang].rektor.p24,
      content: ` <li>${ContactLangMy[lang].rektor.p25}</li>
            <li>${ContactLangMy[lang].rektor.p26}</li>
            <li>${ContactLangMy[lang].rektor.p27}</li>
            <li>${ContactLangMy[lang].rektor.p28}</li>
            <li>${ContactLangMy[lang].rektor.p29}</li>
            <li>${ContactLangMy[lang].rektor.p30}</li>
            <li>${ContactLangMy[lang].rektor.p31}</li>
            <li>${ContactLangMy[lang].rektor.p32}</li>
            <li>${ContactLangMy[lang].rektor.p33}</li>`,
    },

    {
      human_id: 2,
      id: 1,
      status: true,
      title: ContactLangMy[lang].safarov.p2,
      content: `<p>${ContactLangMy[lang].safarov.p3}</p> <p>${ContactLangMy[lang].safarov.p4}</p> <p>${ContactLangMy[lang].safarov.p5}</p>`,
    },

    {
      human_id: 2,
      id: 2,
      status: false,
      title: ContactLangMy[lang].safarov.p6,
      content: `<li>${ContactLangMy[lang].safarov.p7} </li>
                     <li>${ContactLangMy[lang].safarov.p8}</li>
                     <li>${ContactLangMy[lang].safarov.p9}</li>
                     <li>${ContactLangMy[lang].safarov.p10}</li>
                     <li>${ContactLangMy[lang].safarov.p11}</li>
                     <li>${ContactLangMy[lang].safarov.p12}</li>
                     <li>${ContactLangMy[lang].safarov.p13}</li>
                     <li>${ContactLangMy[lang].safarov.p14}</li>
                     <li>${ContactLangMy[lang].safarov.p15}</li>
                     <li>${ContactLangMy[lang].safarov.p16}</li>
                     <li>${ContactLangMy[lang].safarov.p17}</li>`,
    },

    {
      human_id: 2,
      id: 3,
      status: false,
      title: ContactLangMy[lang].safarov.p18,
      content: `<li>${ContactLangMy[lang].safarov.p19}</li> <li>${ContactLangMy[lang].safarov.p20}</li> <li>${ContactLangMy[lang].safarov.p21}</li>`,
    },
    
    {
      human_id: 2,
      id: 4,
      status: false,
      title: ContactLangMy[lang].safarov.p22,
      content: `<li>${ContactLangMy[lang].safarov.p23}</li>
                     <li>${ContactLangMy[lang].safarov.p24}</li>
                     <li>${ContactLangMy[lang].safarov.p25}</li>
                     <li>${ContactLangMy[lang].safarov.p26}</li>
                     <li>${ContactLangMy[lang].safarov.p27}</li>
                     <li>${ContactLangMy[lang].safarov.p28}</li>
                     <li>${ContactLangMy[lang].safarov.p29}</li>
                     <li>${ContactLangMy[lang].safarov.p30}</li>
                     <li>${ContactLangMy[lang].safarov.p31}</li>
                     <li>${ContactLangMy[lang].safarov.p32}</li>
                     <li>${ContactLangMy[lang].safarov.p33}</li>
                     <li>${ContactLangMy[lang].safarov.p34}</li>
                     <li>${ContactLangMy[lang].safarov.p35}</li>
                     <li>${ContactLangMy[lang].safarov.p36}</li>
                     <li>${ContactLangMy[lang].safarov.p37}</li>`,
    },
    
    {
      human_id: 3,
      id: 1,
      status: true,
      title: ContactLangMy[lang].polatov.p2,
      content: `<p>${ContactLangMy[lang].polatov.p3}</p>
                      <p>${ContactLangMy[lang].polatov.p4}</p>
                      <p>${ContactLangMy[lang].polatov.p5}</p>
                      <p>${ContactLangMy[lang].polatov.p6}</p>
                      <p>${ContactLangMy[lang].polatov.p7}</p>`,
    },
    
    {
      human_id: 3,
      id: 2,
      status: false,
      title: ContactLangMy[lang].polatov.p8,
      content: `<li>${ContactLangMy[lang].polatov.p9}</li> <li>${ContactLangMy[lang].polatov.p10}</li> <li>${ContactLangMy[lang].polatov.p11}</li>`,
    },
    
    {
      human_id: 3,
      id: 3,
      status: false,
      title: ContactLangMy[lang].polatov.p12,
      content: `<li>${ContactLangMy[lang].polatov.p13}</li>
                    <li>${ContactLangMy[lang].polatov.p14}</li>
                    <li>${ContactLangMy[lang].polatov.p15}</li>
                    <li>${ContactLangMy[lang].polatov.p16}</li>`,
    },
    
    {
      human_id: 4,
      id: 1,
      status: true,
      title: ContactLangMy[lang].bobiramon.p2,
      content: `<p>${ContactLangMy[lang].bobiramon.p3}</p>
                    <p>${ContactLangMy[lang].bobiramon.p4}</p>
                    <p>${ContactLangMy[lang].bobiramon.p5}</p>
                    <p>${ContactLangMy[lang].bobiramon.p6}</p>`,
    },
    
    {
      human_id: 4,
      id: 2,
      status: false,
      title: ContactLangMy[lang].bobiramon.p7,
      content: `<li>${ContactLangMy[lang].bobiramon.p8}</li>
                    <li>${ContactLangMy[lang].bobiramon.p9}</li>
                    <li>${ContactLangMy[lang].bobiramon.p10}</li>
                    <li>${ContactLangMy[lang].bobiramon.p11}</li>
                    <li>${ContactLangMy[lang].bobiramon.p12}</li>
                    <li>${ContactLangMy[lang].bobiramon.p13}</li>
                    <li>${ContactLangMy[lang].bobiramon.p14}</li>
                    <li>${ContactLangMy[lang].bobiramon.p15}</li>`,
    },
    
    {
      human_id: 4,
      id: 3,
      status: false,
      title: ContactLangMy[lang].bobiramon.p17,
      content: `<li>${ContactLangMy[lang].bobiramon.p18}</li>
                        <li>${ContactLangMy[lang].bobiramon.p19}</li>
                        <li>${ContactLangMy[lang].bobiramon.p20}</li>
                        <li>${ContactLangMy[lang].bobiramon.p21}</li>`,
    },
    
    {
      human_id: 5,
      id: 1,
      status: true,
      title: ContactLangMy[lang].prormanav.f2,
      content: `<p>${ContactLangMy[lang].prormanav.f3}</p> <p>${ContactLangMy[lang].prormanav.f4}</p> <p>${ContactLangMy[lang].prormanav.f5}</p>`,
    },
    
    {
      human_id: 5,
      id: 2,
      status: false,
      title: ContactLangMy[lang].prormanav.f11,
      content: `<li>${ContactLangMy[lang].prormanav.f7} </li>
                    <li>${ContactLangMy[lang].prormanav.f8}</li>
                    <li>${ContactLangMy[lang].prormanav.f9}</li>
                    <li>${ContactLangMy[lang].prormanav.f10}</li>
                    <li>${ContactLangMy[lang].prormanav.f11}</li>
                    <li>${ContactLangMy[lang].prormanav.f12}</li>
                    <li>${ContactLangMy[lang].prormanav.f13}</li>
                    <li>${ContactLangMy[lang].prormanav.f14}</li>
                    <li>${ContactLangMy[lang].prormanav.f15}</li>`,
    },

    
  ]);

  const [rectors] = useState([
    {
      human_id: 1,
      name: rectoratLang[lang].rahbariyat.sixth,
      info: ContactLangMy[lang].rektor.p1,
      job: rectoratLang[lang].rahbariyat.first,
      public_link: [
        {
          class: "fa-brands fa-facebook",
          url: "https://www.facebook.com/botir.usmonov.5",
        },
        {
          class: "fa-brands fa-instagram",
          url: "https://www.instagram.com/b.usmonov_/",
        },
      ],
      profil: {
        pic: ImageRectorat1,
        body: [
          {
            class: "fa-solid fa-phone",
            text: "+998 71 244-79-17",
            href: "tel:712447917",
          },
          {
            class: "fa-solid fa-envelope",
            text: ContactLangMy[lang].rektor.p34,
            href: "http://rector.tcti.uz/",
          },
          {
            class: "fa-solid fa-location-dot",
            text: ContactLangMy[lang].rektor.p35,
          },
        ],
      },
    },
    {
      human_id: 2,
      name: rectoratLang[lang].rahbariyat.seventh,
      info: ContactLangMy[lang].safarov.p1,
      job: rectoratLang[lang].rahbariyat.second,
      public_link: [
        { class: "fa-brands fa-facebook", url: "#" },
        { class: "fa-brands fa-instagram", url: "#" },
      ],
      profil: {
        pic: ImageRectorat2,
        body: [
          {
            class: "fa-solid fa-phone",
            text: "+998 71 244-79-18",
            href: "tel:712447918",
          },
          {
            class: "fa-solid fa-envelope",
            text: ContactLangMy[lang].safarov.p38,
            href: "mailto:uquv_prorektor@tcti.uz",
          },
          {
            class: "fa-solid fa-location-dot",
            text: ContactLangMy[lang].safarov.p39,
          },
        ],
      },
    },
    {
      human_id: 3,
      name: rectoratLang[lang].rahbariyat.eighth,
      info: ContactLangMy[lang].polatov.p1,
      job: rectoratLang[lang].rahbariyat.third,
      public_link: [
        { class: "fa-brands fa-facebook", url: "#" },
        { class: "fa-brands fa-instagram", url: "#" },
      ],
      profil: {
        pic: ImageRectorat3,
        body: [
          {
            class: "fa-solid fa-phone",
            text: "+998 71 244-79-21",
            href: "tel:+998 71 244-79-21",
          },
          {
            class: "fa-solid fa-envelope",
            text: ContactLangMy[lang].polatov.p18,
            href: "mailto:x.pulatov@tkti.uz",
          },
          {
            class: "fa-solid fa-location-dot",
            text: ContactLangMy[lang].polatov.p19,
          },
        ],
      },
    },
    {
      human_id: 4,
      name: rectoratLang[lang].rahbariyat.nineth,
      info: rectoratLang[lang].rahbariyat.fourth,
      job: rectoratLang[lang].rahbariyat.fourth,
      public_link: [
        { class: "fa-brands fa-facebook", url: "#" },
        { class: "fa-brands fa-instagram", url: "#" },
      ],
      profil: {
        pic: ImageRectorat4,
        body: [
          {
            class: "fa-solid fa-phone",
            text: "+998 71 244-79-15",
            href: "tel:712447915",
          },
          {
            class: "fa-solid fa-envelope",
            text: ContactLangMy[lang].bobiramon.p22,
            href: "mailto:tkti_b.kodirov@edu.uz",
          },
          {
            class: "fa-solid fa-location-dot",
            text: ContactLangMy[lang].bobiramon.p23,
          },
        ],
      },
    },
    {
      human_id: 5,
      name: rectoratLang[lang].rahbariyat.tenth,
      info: rectoratLang[lang].rahbariyat.fifth,
      job: rectoratLang[lang].rahbariyat.fifth,
      public_link: [
        { class: "fa-brands fa-facebook", url: "#" },
        { class: "fa-brands fa-instagram", url: "#" },
      ],
      profil: {
        pic: ImageRectorat5,
        body: [
          {
            class: "fa-solid fa-phone",
            text: "+998 71 244-79-24",
            href: "tel:712447924",
          },
          {
            class: "fa-solid fa-envelope",
            text: ContactLangMy[lang].prormanav.f16,
            href: "mailto:boborajabov@bk.ru",
          },
          {
            class: "fa-solid fa-location-dot",
            text: ContactLangMy[lang].prormanav.f17,
          },
        ],
      },
    },
  ]);

  const find = rectors.find((a) => a.human_id === id - 0);
  const filter = accordion.filter((a) => a.human_id === id - 0);

  if (!find || filter.length < 1) {
    window.location.href = "/rektorat";
  }

  useEffect(() => {
    if (refresh) {
      window.location.reload(true);
    }
  }, [lang]);

  console.log(find);
  return (
    <>
      <div className="container wrapped">
        <div className="">
          <div className="rectorat__wrapper">
            <div className="rectorat__left">
              <AccordionComponent arr={filter} setarr={setAccordion} />
            </div>

            <div className="rectorat__profil">
              <img src={find.profil.pic} alt={find.name} />
              <div>
                <h4>{find.name}</h4>
                <span>
                  <ol>
                    {find.job}
                    {find.public_link.map((a, index) => (
                      <a key={index} href={a.url}>
                        <i className={a.class}></i>
                      </a>
                    ))}
                  </ol>
                </span>
                {find.profil.body.map((a, index) =>
                  a.href ? (
                    <a key={index} href={a.href}>
                      {" "}
                      <i className={a.class}></i> {a.text}
                    </a>
                  ) : (
                    <p key={index}>
                      <i className={a.class}></i> {a.text}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RectoratItem;
