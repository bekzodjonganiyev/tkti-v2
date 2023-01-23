import React, { useCallback, useContext, useState, useRef } from "react";

import "./XodimForm.css";

import Button from "../../../components/admin/button/Button";

import { Context } from "../../../context";
import { useEffect } from "react";

const XodimForm = (props) => {
  const { categoryId, categoryEndpoint, employerEndpoint } = props;
  const { globalUrl } = useContext(Context);
  const imageRef = useRef();
  const [inputValue, setInputValue] = useState();
  const [category, setCategory] = useState();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  });

  function getOptions() {
    fetch(`${globalUrl}/${categoryEndpoint}`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }

  function addEmployer(e) {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(inputValue).forEach((i) => formData.append(i, inputValue[i]));
    for (let i = 0; i < imageRef.current.files.length; i++) {
      formData.append("photo", imageRef.current.files[i]);
    }

    fetch(`${globalUrl}/${employerEndpoint}`, {
      method: "POST",
      headers: {
        Token: localStorage.getItem("token")
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Xodim qo`shildi");
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <form className="xodim-form" onSubmit={addEmployer}>
      {/* Ismi */}
      <div className="inputs">
        <label htmlFor="nameUZ">
          Fio(UZ) <br />
          <input
            type="text"
            id="nameUZ"
            name="name_uz"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nameRU">
          Fio(RU) <br />
          <input
            type="text"
            id="nameRU"
            name="name_ru"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nameEN">
          Fio(EN) <br />
          <input
            type="text"
            id="nameEN"
            name="name_en"
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Lvozim */}
      <div className="inputs">
        <label htmlFor="lavUZ">
          Lavozim(UZ) <br />
          <input type="text" id="lavUZ" name="job_uz" onChange={handleChange} />
        </label>

        <label htmlFor="lavRU">
          Lavozim(RU) <br />
          <input type="text" id="lavRU" name="job_ru" onChange={handleChange} />
        </label>

        <label htmlFor="lavEN">
          Lavozim(EN) <br />
          <input type="text" id="lavEN" name="job_en" onChange={handleChange} />
        </label>
      </div>

      {/* Telefon, Email va Rasm */}
      <div className="tel-email">
        <label htmlFor="telNumber">
          Telefon raqami <br />
          <input type="tel" id="telNumber" name="tell" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email pochta <br />
          <input type="tel" id="email" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="image">
          Rasm yuklash <br />
          <input
            type="file"
            id="image"
            accept="image/png, image/gif, image/jpeg"
            multiple
            ref={imageRef}
          />
        </label>
      </div>

      {/* Kategoriyani tanlash */}
      <div>
        <label htmlFor="forCategory">
          <select name={categoryId} id="forCategory" onChange={handleChange}>
            <option value="" hidden>
              ...
            </option>
            {category?.map((i) => (
              <option value={i._id} key={i._id}>
                {i.title_uz}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Button name="Saqlash" />
    </form>
  );
};
export default XodimForm;
