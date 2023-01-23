import React, { useContext, useState } from "react";

import "./Sertifikat.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import Input from "../../../components/admin/input/Input";
import Button from "../../../components/admin/button/Button";

import { Context } from "../../../context";

const Setrifikat = () => {
  const { names, globalUrl } = useContext(Context);

  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  function postData(e) {
    e.preventDefault()
    fetch(`${globalUrl}/sertifikat/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name_uz: names?.nameUz,
        name_ru: names?.nameRu,
        name_en: names?.nameEn,
        kod: inputValue.forCode,
        link: inputValue.forLink,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="sertifikat" onSubmit={postData}>
      <FormHeader title="Sertifikatlar" buttonName="Sertifikat Qo'shish" />
      <form className="sertifikat-form">
        <Input nameUz="FIO (UZ)" nameRu="FIO (RU)" nameEn="FIO (EN)" />
        <div>
          <label htmlFor="kod">
            Sertifikat kodi <br />
            <input type="text" name="forCode" id="kod" onChange={handleChange} />
          </label>
          <label htmlFor="link">
            Sertifikatni yukalsh uchu link <br />
            <input type="text" name="forLink" id="link" onChange={handleChange} />
          </label>
        </div>
        
        <Button name="Saqlash" />
      </form>
    </div>
  );
};

export default Setrifikat;
