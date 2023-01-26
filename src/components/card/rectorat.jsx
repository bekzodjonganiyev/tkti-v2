import React, { useState, useEffect, useContext } from "react";


import ContactLang from "../lang";
import "./rectorat.css";
import { Context } from "../../../context";


function Rectorat({home}) {
  const { lang, globalUrl } = useContext(Context);
  const rectoratLang = {
    uz: {
      rahbariyat: {
        first: "Rektor",
        second: "O’quv ishlari bo’yicha prorektor",
        third: "Ilmiy ishlar va innovatsiyalar bo‘yicha prorektor",
        fourth: "Iqtisodiy va tashkiliy masalalar bo‘yicha prorektor",
        fifth:
          "Yoshlar masalalari va ma'naviy-ma'rifiy ishlari birinchi bo'yicha prorektor",
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
          "Первый проректор по делам молодежи и духовно-просветительской работе",
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
        fifth: "The first vice-rector for youth issues and spiritual and educational affairs",
        sixth: "Usmonov Botir Shukurillaevich",
        seventh: "Safarov Toyir Tursunovich",
        eighth: "Pulatov Khayrulla Lutpullaevich",
        nineth: "Kadirov Bobiromon Bekmurodovich",
        tenth: "Boborajabov Bahodir Nasriddinovich",
      },
    },
  };
  const [rectors, setRectors] = useState({
    isFetched: false,
    error: false,
    data: {},
});
  useEffect(()=>{
    fetch(`${globalUrl}/`)
    .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setRectors(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

  const test = (id) => {
    rectors.map((a) => (a.status = false));
    const find = rectors.find((e) => e.id === id);
    find.status = !find.status;
    return setRectors([...rectors]);
  };

  useEffect(() => {
    if (refresh) {
      window.location.reload(true);
    }
  }, [lang]);

  return (
    <div className="wrapped mb-5">
              <h3 style={{ display: "flex", justifyContent: "left" }}>
                {ContactLang[lang].hero.title}
              </h3>
              <span className="my-5 d-block">
                {ContactLang[lang].hero.info}
              </span>
              <div className="rectorat__list">
                <div className="rectorat__menu">
                  {rectors.map((a) => (
                    <>
                      <li
                        onClick={() => test(a.id)}
                        className={`accordion__item ${
                          a.status ? "active__accordion" : ""
                        }`}
                      >
                        {" "}
                        <h4>{a.title}</h4>{" "}
                        <span
                          className={
                            a.status
                              ? "fa-solid fa-angle-down"
                              : "fa-solid fa-angle-right"
                          }
                        ></span>
                      </li>

                      <div
                        className={
                          a.status
                            ? "accordion__secret__item rectorat__secret__key"
                            : "d-none"
                        }
                      >
                        <a
                          className="rectorat__item"
                          href={`/page/rectorat/${a.id}`}
                        >
                          <img src={a.content.img} alt="img" />
                          <div className="rectorat__item__body">
                            <h2>{a.content.name}</h2>
                            <span>{a.content.job}</span>
                            {a.body.map((a, index) =>
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
                        </a>
                      </div>
                    </>
                  ))}
                </div>

                <div className="rectorat__right">
                  {rectors.map((a, index) => (
                    <>
                      <div
                        key={index}
                        className={
                          a.status
                            ? "accordion__secret__key__desk rectorat__secret__key__desk"
                            : "d-none"
                        }
                      >
                        <a
                          className="rectorat__item__desk"
                          href={`/rektorat/${a.id}`}
                        >
                          <img src={a.content.img} alt="img" />
                          <div className="rectorat__desk__body">
                            <h2>{a.content.name}</h2>
                            <span>{a.content.job}</span>
                            {a.body.map((a, index) =>
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
                        </a>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
  );
}

export default Rectorat;
