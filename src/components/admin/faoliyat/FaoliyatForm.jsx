import React, { useContext, useEffect, useState } from "react";

import "./FaoliyatForm.css";

import Button from "../../../components/admin/button/Button"

import { Context } from "../../../context";

const Faoliyat = ({ catogoryId = "fakultet_id", url = "Fak_data/all", categoryLabel = "Fakultetni tanlang" }) => {
  const { globalUrl } = useContext(Context);
  const [inputValue, setInputValue] = useState({});
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    function getOptions() {
      fetch(`${globalUrl}/${url}`, {
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          setOptions(res.data);
        })
        .catch((err) => console.log(err));
    }

    getOptions();
  }, []);

    function postData(e) {
      e.preventDefault();
      fetch(`${globalUrl}/faoliyat/add`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzdhZGFhNzAzYmRmMTNhYTI2ZmViNyIsImlhdCI6MTY3NDExNjEzMiwiZXhwIjoxNjc0MjAyNTMyfQ.Sazo9WjES9eSF96KFu9wtlzof1iooguMcnVdfU92sk0"
        },
        body: JSON.stringify(inputValue),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

  return (
    <form onSubmit={postData} className="faoliyat-form">
      {/* Sarlavha */}
      <div className="inputs">
        <label htmlFor="nameUZ">
          Faoliyat nomini kiriting(UZ) <br />
          <input
            type="text"
            id="nameUZ"
            name="title_uz"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nameRU">
          Faoliyat nomini kiriting(UZ) <br />
          <input
            type="text"
            id="nameRU"
            name="title_ru"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nameEN">
          Faoliyat nomini kiriting(UZ) <br />
          <input
            type="text"
            id="nameEN"
            name="title_en"
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Haqida */}
      <div className="inputs">
        <label htmlFor="lavUZ">
          Faoliyat haqida qisqacha tarif yozing(UZ) <br />
          <textarea
            type="text"
            id="lavUZ"
            name="about_uz"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lavRU">
          Faoliyat haqida qisqacha tarif yozing(RU) <br />
          <textarea
            type="text"
            id="lavRU"
            name="about_ru"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lavEN">
          Faoliyat haqida qisqacha tarif yozing(EN) <br />
          <textarea
            type="text"
            id="lavEN"
            name="about_en"
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Faoliyatni kategoriyasi */}
      <div>
        <label htmlFor="forCategory">
          {categoryLabel} <br />
          <select name={catogoryId} id="forCategory" onChange={handleChange}>
            <option value=" " hidden>
              ...
            </option>
            {options?.map((i) => (
              <option value={i._id} key={i._id}>
                {i.title_uz}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Button name="Saqlash"/>
    </form>
  );
};

export default Faoliyat;
