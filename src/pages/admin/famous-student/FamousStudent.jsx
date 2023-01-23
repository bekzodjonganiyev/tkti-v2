import React,{ useContext, useRef, useState } from "react";

import "./FamousStudent.css"

import FormHeader from "../../../components/admin/form_header/FormHeader";
import Button from "../../../components/admin/button/Button";

import { Context } from "../../../context";

const FamousStudent = () => {
  const {globalUrl} = useContext(Context)
  const [inputValue, setrInputValue] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setrInputValue(prev => ({...prev, [name]: value}))
  }

  function postData(e) {
    e.preventDefault()
    fetch(`${globalUrl}/student/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <FormHeader title="Faxrli biturvchilar" buttonName="Qo'shish" />
      <form className="famous-student-form" onSubmit={postData}>
        {/* Ismi */}
        <div>
          <label htmlFor="nameUZ">
            Fio(UZ) <br />
            <input type="text" id="nameUZ" name="name_uz" onChange={handleChange}/>
          </label>

          <label htmlFor="nameRU">
            Fio(UZ) <br />
            <input type="text" id="nameRU" name="name_ru" onChange={handleChange}/>
          </label>

          <label htmlFor="nameEN">
            Fio(UZ) <br />
            <input type="text" id="nameEN" name="name_en" onChange={handleChange}/>
          </label>
        </div>

        {/* Lvozim */}
        <div>
          <label htmlFor="lavUZ">
            Lavozim(UZ) <br />
            <input type="text" id="lavUZ" name="job_uz" onChange={handleChange}/>
          </label>

          <label htmlFor="lavRU">
            Lavozim(RU) <br />
            <input type="text" id="lavRU" name="job_ru" onChange={handleChange}/>
          </label>

          <label htmlFor="lavEN">
            Lavozim(EN) <br />
            <input type="text" id="lavEN" name="job_en" onChange={handleChange}/>
          </label>
        </div>

        {/* Ish joyi */}
        <div>
          <label htmlFor="ishJoyiUZ">
            Ish Joyi(UZ) <br />
            <input type="text" id="ishJoyiUZ" name="ish_joyi_uz" onChange={handleChange}/>
          </label>

          <label htmlFor="ishJoyiRU">
            Ish Joyi(RU) <br />
            <input type="text" id="ishJoyiRU" name="ish_joyi_ru" onChange={handleChange}/>
          </label>

          <label htmlFor="ishJoyiEN">
            Ish Joyi(EN) <br />
            <input type="text" id="ishJoyiEN" name="ish_joyi_en" onChange={handleChange}/>
          </label>
        </div>

        {/* Qaysi kafedrada o`qigan */}
        <div>
          <label htmlFor="kafUZ">
            Qaysi kafedrada o`qigan(UZ) <br />
            <input type="text" id="kafUZ" name="kafedra_name_uz" onChange={handleChange}/>
          </label>

          <label htmlFor="kafRU">
            Qaysi kafedrada o`qigan(RU) <br />
            <input type="text" id="kafRU" name="kafedra_name_ru" onChange={handleChange}/>
          </label>

          <label htmlFor="kafEn">
            Qaysi kafedrada o`qigan(EN) <br />
            <input type="text" id="kafEn" name="kafedra_name_en" onChange={handleChange}/>
          </label>
        </div>
        <div className="year-tel-email">
          {/* Tigatgan yili */}
          <div>
            <label htmlFor="forYear">
              Tuguatgan yili <br />
              <input type="text" id="forYear" name="finished_year" onChange={handleChange}/>
            </label>
          </div>

          {/* Telefon raqami */}        
          <div>
            <label htmlFor="telNumber">
              Telefon raqmi <br />
              <input type="number" id="telNumber" name="tel" onChange={handleChange}/>
            </label>
          </div>

          {/* Email pochta */}
          <div>
            <label htmlFor="forEmail">
              Pochta manzili <br />
              <input type="number" id="forEmail" name="email" onChange={handleChange}/>
            </label>
          </div>
        </div>
        {/* Rasm */}
        <div>
          <label htmlFor="img">
            Rasm uchun havola kiriting <br />
            <input type="text" id="img" name="photo" onChange={handleChange}/>
          </label>
        </div>
        <Button name="Saqlash"/>
      </form>
    </div>
  );
};

export default FamousStudent;
