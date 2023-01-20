import React, { useContext, useState } from "react";

import "./Matbuot.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import Button from "../../../components/admin/button/Button";
import Input from "../../../components/admin/input/Input";

import { Context } from "../../../context";

const Matbuot = () => {
  const { names, globalUrl } = useContext(Context);
  const [link, setLink] = useState();

  function postData(e) {
    e.preventDefault()
    fetch(`${globalUrl}/matbuot/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name_uz: names?.nameUz,
        name_ru: names?.nameRu,
        name_en: names?.nameEn,
        link: link,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <FormHeader title="Nashriyot" buttonName="Qo'shish" />
      <form className="matbuot-form" onSubmit={postData}>
        <Input
          nameUz="Jurnal nomi{tartib raqami ham kiritilsin*} (UZ)"
          nameRu="Jurnal nomi{tartib raqami ham kiritilsin*} (RU)"
          nameEn="Jurnal nomi{tartib raqami ham kiritilsin*} (EN)"
        />

        <label htmlFor="forLink" className="for-link">
          Jurnaln yuklash uchun havola kiriting <br />
          <input
            type="text"
            id="forLink"
            onChange={(e) => setLink(e.target.value)}
          />
        </label>

        <Button name="Saqlash" />
      </form>
    </div>
  );
};

export default Matbuot;
