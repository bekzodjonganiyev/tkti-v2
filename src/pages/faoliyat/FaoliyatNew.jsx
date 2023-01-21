import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context";

import "./FaoliyatNew.css";

const QuestionForm = ({ divclass }) => {
  const { lang } = useContext(Context);
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
      Moliyaviy ishlar bo'yicha prorektor __ <hr /> 
              Тел. +998938269119 <hr />
              E-mail: ron25my@gmail.com <hr /> 
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
      Вице-канцлер по финансовым вопросам__ <hr />
             Тел: +998938269119 <hr />
             Эл. адрес: ron25my@gmail.com <hr />
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
      Vice Chancellor for Financial Affairs __ <hr />
              Tel: +998938269119 <hr />
              Email: ron25my@gmail.com <hr />
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
  const activities = [
    { id: 1, name: "fakultet_id", title: "Rektorat faoliyati" },
    { id: 2, name: "kafedra_id", title: "Fakultet faoliyati" },
    { id: 3, name: "bolim_id", title: "Kafedra faoliyati" },
    { id: 4, name: "markaz_id", title: "Bo'lim faoliyati" },
    { id: 5, name: "rektorat_id", title: "Markaz faoliyati" },
  ];
  return (
    <div className="all-activities">
      <h1>Moliya</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, nam culpa
        quisquam commodi natus veritatis saepe nesciunt ratione aliquid rem,
        odio ex possimus esse expedita, excepturi suscipit iure eos atque
        laborum voluptatum aut? Commodi quibusdam ipsam laboriosam esse illum
        blanditiis est aut in eos, fugiat ab, possimus reiciendis sit velit.
        Deserunt asperiores consequuntur reprehenderit porro impedit perferendis
        inventore. Nihil, non reprehenderit ratione enim modi voluptates
        praesentium iure sapiente sequi nostrum commodi corporis ad eligendi
        consectetur excepturi ab sunt quaerat quas odio sit? Natus nisi et
        laudantium, cumque nam blanditiis cum, temporibus, ipsum in ex nesciunt
        architecto omnis eum ab impedit.
      </p>

      <div className="activity-items">
        {activities.map((i) => (
          <Link to={`/faoliyat/${i.id}`} key={i.id}>
            {i.title}
          </Link>
        ))}
      </div>

      <QuestionForm />
    </div>
  );
};

export default FaoliyatNew;
