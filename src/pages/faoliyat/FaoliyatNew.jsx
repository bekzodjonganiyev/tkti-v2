import React, { useState, useContext } from "react";
import { useEffect } from "react";

import { Context } from "../../context";

import "./FaoliyatNew.css";

const QuestionForm = ({ divclass }) => {
  const { lang, globalUrl } = useContext(Context);
  const [display, setDisplay] = React.useState(false);
  const [text] = useState({
    uz: {
      title: `Institutda olib borilayotgan faoliyatlar haqida shikoyat va takliflar`,
      left: [
        `Ismingizni kiriting`,
        `Raqamingzini kiriting`,
        `Savolingiz...`,
        `Rozilik bildiraman`,
        `Barcha shartlarga roziman`,
        `Yuborish`,
      ],
      right: `<br />  
      Iqtisodiy va tashkiliy masalalar bo‘yicha prorektor:  Qodirov Bobiromon Bekmurodovich <hr /> 
              Тел. +998712447915 <hr />
              E-mail: tkti_b.kodirov@edu.uz <hr /> 
              Ish vaqti: Dush-Shan, soat  09:00-17:00 gacha  <hr /> 
              Manzil: Toshkent sh., Navoiy 9, 32-uy, 2-bino`,
    },
    ru: {
      title: `Жалобы и предложения о деятельности, проводимой в институте`,
      left: [
        `Введите ваше имя`,
        `введите свой номер`,
        `Ваш вопрос..`,
        `Я согласен`,
        `Я согласен все`,
        `Отправит`,
      ],
      right: ` <br />
      Вице-канцлер по финансовым вопросам: Кадыров Бобиромон Бекмуродович <hr />
             Тел: +998712447915 <hr />
             Эл. адрес: tkti_b.kodirov@edu.uz <hr />
             Время работы: Пн-Сб, 09:00-17:00 <hr />
             Адрес: г.Ташкент, Навои 9, дом 32, корпус 2`,
    },
    en: {
      title: `Complaints and suggestions about the activities carried out in the institute`,
      left: [
        `Enter your name`,
        `enter your number`,
        `Your question..`,
        `I agree`,
        `I agree to all`,
        `Sending`,
      ],
      right: ` <br />
      Vice Chancellor for Financial Affairs: Qodirov Bobiromon Bekhmurodovich <hr />
              Tel: +998712447915 <hr />
              Email: tkti_b.kodirov@edu.uz <hr />
              Working hours: Mon-Sat, 09:00-17:00 <hr />
              Address: Tashkent city, Navoi st, 32 apt, 2nd building`,
    },
  });
  function SubmitForm(e) {
    e.preventDefault();
    if (!display) {
      alert("Bizni shartimizga rozi bo`lishingiz kerak");
    }
    if (display) {
      const phoneRegex = /^998[389][012345789][0-9]{7}$/g;
      const { name, phone, question } = e.target;

      if (!phone.value.trim().substring(1).match(phoneRegex)) {
        alert(`iltimos raqamingizni to'gri kiriting: Namuna: +998941234567`);
      }

      if (
        phone.value.trim().substring(1).match(phoneRegex) &&
        name.value &&
        question.value
      ) {
        const token = "5502078448:AAHT6lNhaS8qIPlbz9t2V4cT9sq35iWyv4o";
        const chat = "-1001660907999";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        let message = `Yangi savol keldi!\n\n ismi: *${name.value}* \n tel: *${phone.value}* \n savol mazmuni: *${question.value}*`;

        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chat,
            parse_mode: "markdown",
            text: message,
          }),
        })
          .then(() => (e.target.reset(), alert("Savolingiz yuborildi!")))
          .catch(() =>
            alert(
              "Qandeydir xatolik sodir berdi :( Iltimos formani xatosiz to`ldiring"
            )
          );
      }
    }
  }
  return (
    <div className={divclass}>
      <h1 className="text-center mx-4 qabul-info">{text[lang].title}</h1>

      <div className="question__form__container">
        <form
          className="question__form"
          autoComplete="off"
          onSubmit={SubmitForm}
        >
          <input
            className="form-control mb-3"
            type="text"
            name="name"
            placeholder={text[lang].left[0]}
            required
          />

          <input
            className="form-control mb-3"
            type="text"
            name="phone"
            placeholder={text[lang].left[1]}
            required
          />

          <label className="mb-1">{text[lang].left[2]}</label>
          <textarea
            className="mb-5"
            name="question"
            cols="30"
            rows="4"
          ></textarea>

          <h4>{text[lang].left[3]}</h4>
          <div>
            <input
              onChange={() => setDisplay(!display)}
              className="question__form__checkbox"
              type="checkbox"
            />
            <h6>{text[lang].left[4]}</h6>
          </div>

          <button
            className={display ? "btn btn-primary mt-2" : "d-none"}
            type="submit"
          >
            {text[lang].left[5]}
          </button>
        </form>

        <div
          className="question__contact__menu"
          dangerouslySetInnerHTML={{ __html: text[lang].right }}
        ></div>
      </div>
    </div>
  );
};

const FaoliyatNew = () => {
  const { lang, globalUrl } = useContext(Context);

  const [state, setState] = useState({ get: false, error: false, data: [] });
  const obj = {
    rektorat_id: {
      uz: `Rektoratning faoliyatlari`,
      ru: `Деятельность ректората`,
      en: `Activities of the Rectorate`,
    },
    fakultet_id: {
      uz: `Fakultetning faoliyatlari`,
      ru: `Деятельность факультета`,
      en: `Activities of the faculty`,
    },
    kafedra_id: {
      uz: `Kafedraning faoliyatlari`,
      ru: `Деятельность отдела`,
      en: `Activities of the department`,
    },
    markaz_id: {
      uz: `Markazning faoliyatlari`,
      ru: `Деятельность центра`,
      en: `Activities of the center`,
    },
    bolim_id: {
      uz: `Bo'limning faoliyatlari`,
      ru: `Деятельность отдела`,
      en: `Activities of the department`,
    },
  };

  useEffect(() => {
    fetch(`${globalUrl}/faoliyat/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200 && data.success) {
          const result = {};
          for (let item of Object.keys(obj)) {
            result[item] = data.data.filter((element) => element[item]);
          }
          setState({ get: true, error: false, data: result });
        }
      });
  }, []);

  const togglerFunction = (index) => {
    document
      .querySelector(`.activity__toggle${index}`)
      .classList.toggle("activity__show");
  };

  const data = {
    uz: {
      a1: `Faoliyat`,
      a2: ` Universitetda bir qancha faoliyatlar olib borilmoqda, bu bo'limda siz
      Rahbariyat, Faklultet, Kafedra, Bo'lim va Markazlarning barcha
      faoliyatlarini kuzatib borishingiz mumkin. Bundan tashqari faoliyatlarni
      yuqoridagi kategoriyalar bo'yicha har bir kategoriyaning o'zini
      sahifasida ko'rishingiz mumkin`,
    },
    ru: {
      a1: `Активность`,
      a2: `В университете происходит несколько мероприятий, на этом факультете вы
      Управление, Факультет, Кафедра, Кафедра и все Центры
      вы можете следить за их деятельностью. Кроме того, деятельность
      каждая категория сама в соответствии с вышеуказанными категориями
      вы можете увидеть на странице`,
    },
    en: {
      a1: `Activity`,
      a2: `There are several activities going on in the university, in this department you
      Management, Faculty, Department, Department and all of the Centers
      you can follow their activities. In addition, activities
      each category itself according to the above categories
      you can see on the page`,
    },
  };

  return (
    <div className="all-activities">
      <h1>{data[lang].a1}</h1>
      <p>{data[lang].a2}</p>

      <div className="activity__wrapper">
        {state.get && !state.error ? (
          Object.keys(obj).map((e, index) => (
            <div className="activity__item" key={index}>
              <h4 onClick={() => togglerFunction(index)}>{obj[e][lang]}</h4>
              <div
                className={`activity__nested__item activity__toggle${index}`}
              >
                {state.data[e].map((item, ind) => (
                  <a
                    className="activity__link"

                    // link qisqardi 🔨
                    // ${item.title_uz
                    //   .toLowerCase()
                    //   .split(" ")
                    //   .map((str) =>
                    //     str
                    //       .split("")
                    //       .filter((char) => /[a-zA-Z]/.test(char))
                    //       .join("")
                    //   )
                    //   .join("-")}-
                    href={`/faoliyatlar/${item._id}`}
                    key={ind}
                  >
                    {item[`title_${lang}`]}
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>

      <QuestionForm />
    </div>
  );
};

export default FaoliyatNew;
