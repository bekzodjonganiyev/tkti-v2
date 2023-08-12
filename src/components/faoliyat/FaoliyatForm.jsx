import { useContext, useEffect, useState } from "react";

import "./FaoliyatForm.css";

import { memo } from "react";
import { Context } from "../../context";
import { message } from "antd";

const FaoliyatForm = ({
  catogoryId = "fakultet_id",
  url = "Fak_data/all",
  categoryLabel = "Fakultetni tanlang",
}) => {
  const { globalUrl, refresh } = useContext(Context);
  const [inputValue, setInputValue] = useState({});
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState({
    title_uz: "",
    title_en: "",
    title_ru: "",
    about_uz: "",
    about_en: "",
    about_ru: "",
  });

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    callback();
  };

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
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "error",
                content: res?.message,
              });
            }, 1000);
          });
        } else {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "success",
                content: res?.message,
                duration: 2,
              });
              setTimeout(() => {
               if (confirm("Ushbu sahifada yana amal bajarasizmi?") === false) {
                window.location.href = "/adminPanel/faoliyat"
               } else {
                  setInputValue({
                    title_uz: "",
                    title_en: "",
                    title_ru: "",
                    about_uz: "",
                    about_en: "",
                    about_ru: "",
                  })
               }
              }, 500)
            }, 1000);
          });
        }
      })
      .catch((err) => console.log(err));
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
    setValues(updatedObj);
  }, [catogoryId]);

  return (
    <form style={{ width: '100%' }} onSubmit={postData} className="faoliyat-form">
      {/* Sarlavha */}
      { contextHolder }
        <div className="flex flex-col gap-1 w-full">
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
        </div>

        <div className="flex flex-col gap-1 w-full">
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
        </div>
        <div className="flex flex-col gap-1 w-full mb-8">
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
        <div className="flex flex-col gap-1 w-full">
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
        </div>

        <div className="flex flex-col gap-1 w-full">
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
        </div>
        <div className="flex flex-col gap-1 w-full mb-8">
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
      <div style={{ width: '100%' }}>
        <div className="flex flex-col gap-1 w-full">
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
      </div>

      <button
        type="submit"
        className="bg-blue-500 mt-4 mb-16 flex items-center justify-center w-full text-white py-2 font-bold"
      >
        Saqlash
      </button>
    </form>
  );
};

export default memo(FaoliyatForm);
