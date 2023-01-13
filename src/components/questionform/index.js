import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Context } from "../../context";
import './style.css'

const QuestionForm = ({divclass}) =>{
      const {lang} = useContext(Context);
      const [display, setDisplay] = React.useState(false);
      const [text] = useState({
        uz: {
          title: `O'qish masalalari bo'yicha savollar`,
          left: [
            `Ismingizni kiriting`,
            `Raqamingzini kiriting`,
            `Savolingiz...`,
            `Rozilik bildiraman`,
            `Barcha shartlarga roziman`,
            `Yuborish`,
          ],
          right: `<h2>Qabul jarayonini tashkil etish bo‘limi</h2> <br />  <br />
                  Bo'lim boshlig‘i Musaxonov Rustam Musaxon o'g'li <hr /> 
                  Тел. +998938269119 <hr />
                  E-mail: ron25my@gmail.com <hr /> 
                  Ish vaqti: Dush-Shan, soat  09:00-17:00 gacha  <hr /> 
                  Manzil: Toshkent sh., Navoiy 9, 32-uy, 2-bino`,
        },
        ru: {
          title: `Вопросы по учебе`,
          left: [
            `Введите ваше имя`,
            `введите свой номер`,
            `Ваш вопрос..`,
            `Я согласен`,
            `Я согласен все`,
            `Отправит`,
          ],
          right: ` <h2>Отдел организации приемного процесса</h2> <br /> <br />
                 Заведующий отделением Рустам Мусaхoнов Мусахонович угли <hr />
                 Тел: +998938269119 <hr />
                 Эл. адрес: ron25my@gmail.com <hr />
                 Время работы: Пн-Сб, 09:00-17:00 <hr />
                 Адрес: г.Ташкент, Навои 9, дом 32, корпус 2`,
        },
        en: {
          title: `Questions about study issues`,
          left: [
            `Enter your name`,
            `enter your number`,
            `Your question..`,
            `I agree`,
            `I agree to all`,
            `Sending`,
          ],
          right: `<h2>Department of organization of admission process</h2>  <br /> <br />
                  The head of the department is Rustam Musakhonov Musakhon ugli <hr />
                  Tel: +998938269119 <hr />
                  Email: ron25my@gmail.com <hr />
                  Working hours: Mon-Sat, 09:00-17:00 <hr />
                  Address: Tashkent city, Navoi st, 32 apt, 2nd building`,
        },
      });

      function SubmitForm(e) {
            e.preventDefault();
            if(!display){
                  alert('Bizni shartimizga rozi bo`lishingiz kerak')
            }
            if(display){
                  const phoneRegex = /^998[389][012345789][0-9]{7}$/g
                  const {name, phone, question} = e.target;

                  if(!phone.value.trim().substring(1).match(phoneRegex)){
                        alert(`iltimos raqamingizni to'gri kiriting: Namuna: +998941234567`);
                  }
                  
                  if(phone.value.trim().substring(1).match(phoneRegex) && name.value && question.value){
                        const token = '5502078448:AAHT6lNhaS8qIPlbz9t2V4cT9sq35iWyv4o';
                        const chat = '-1001660907999';
                        const url = `https://api.telegram.org/bot${ token }/sendMessage`;
                        let message = `Yangi savol keldi!\n\n ismi: *${name.value}* \n tel: *${phone.value}* \n savol mazmuni: *${question.value}*`;
                        
                        fetch(url, {
                              method:"POST",
                              headers:{
                                    'Content-type':'application/json'
                              },
                              body: JSON.stringify({
                                    chat_id: chat,
                                    parse_mode: 'markdown',
                                    text: message
                              })
                        }).then(() => (e.target.reset(), alert('Savolingiz yuborildi!')))
                        .catch(() => alert('Qandeydir xatolik sodir berdi :( Iltimos formani xatosiz to`ldiring'))
                  }
            }
      }
    return (
        <div className={divclass}>
                        <h1 className='text-center mx-4 qabul-info'>{text[lang].title}</h1>

                        <div className='question__form__container' >
                               <form className='question__form' autoComplete='off' onSubmit={SubmitForm} >
                                    <input className='form-control mb-3' type="text" name='name' placeholder={text[lang].left[0]} required />   

                                    <input className='form-control mb-3' type="text" name='phone' placeholder={text[lang].left[1]} required />

                                    <label className='mb-1' >{text[lang].left[2]}</label> 
                                    <textarea className='mb-5' name="question"  cols="30" rows="4"></textarea>

                                    <h4>{text[lang].left[3]}</h4>
                                     <div>
                                          <input  onChange={() => setDisplay(!display)} className="question__form__checkbox" type='checkbox' />
                                          <h6>{text[lang].left[4]}</h6>      
                                    </div>     

                                    <button className={display ? 'btn btn-primary mt-2' : 'd-none'} type='submit'>{text[lang].left[5]}</button>
                              </form>  

                              <div className='question__contact__menu' dangerouslySetInnerHTML={{ __html: text[lang].right }} >
                                    
                              </div>   
                        </div>
                  </div>
    )
}

export default QuestionForm;