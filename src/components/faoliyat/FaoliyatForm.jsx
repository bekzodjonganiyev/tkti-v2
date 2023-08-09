import { useContext, useEffect, useState } from "react";

import "./FaoliyatForm.css";

import { memo } from "react";
import { Context } from "../../context";

const FaoliyatForm = ({
  catogoryId = "fakultet_id",
  url = "Fak_data/all",
  categoryLabel = "Fakultetni tanlang",
}) => {
  const { globalUrl, refresh } = useContext(Context);
  const [inputValue, setInputValue] = useState({});
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState({
    title_uz: '',
    title_en: '',
    title_ru: '',
    about_uz: '',
    about_en: '',
    about_ru: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
    setValues({ ...values, [name]: value });
  };

  function getOptions() {
    fetch(`${globalUrl}/${url}`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => console.log(err));
  }

  function postData(e) {
    e.preventDefault();
    fetch(`${globalUrl}/faoliyat/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + "❌");
        } else {
          alert(res.message);
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
    console.log(values);
  }

  useEffect(() => {
    getOptions();
  }, [refresh]);

  useEffect(() => {
    const updatedObj = Object.keys(values).reduce((acc, key) => {
      if (!key.includes("id")) {
          acc[key] = values[key];
      }
      return acc;
  }, {});
  setValues(updatedObj)
  }, [catogoryId]);

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
            value={inputValue?.title_uz}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nameRU">
          Faoliyat nomini kiriting(RU) <br />
          <input
            type="text"
            id="nameRU"
            name="title_ru"
            value={inputValue?.title_ru}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="nameEN">
          Faoliyat nomini kiriting(EN) <br />
          <input
            type="text"
            id="nameEN"
            name="title_en"
            value={inputValue?.title_en}
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
            value={inputValue?.about_uz}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lavRU">
          Faoliyat haqida qisqacha tarif yozing(RU) <br />
          <textarea
            type="text"
            id="lavRU"
            name="about_ru"
            value={inputValue?.about_ru}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lavEN">
          Faoliyat haqida qisqacha tarif yozing(EN) <br />
          <textarea
            type="text"
            id="lavEN"
            name="about_en"
            value={inputValue?.about_en}
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
                {catogoryId === "rektorat_id" ? i.job_uz : i.title_uz}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold"
      >
        Saqlash
      </button>
    </form>
  );
};

export default memo(FaoliyatForm);
