import React, { useContext, useState, useEffect } from "react";

import Input from "../../../components/admin/input/Input";
import SelectType from "../../../components/admin/select_type/SelectType";
import Button from  "../../../components/admin/button/Button"

import { Context } from "../../../context";

export const Yonalish = () => {
  const { globalUrl, names, selectValue } = useContext(Context);
  const [kafedra, setKafedra] = useState([]);
  function getData() {
    fetch(`${globalUrl}/kafedra_data/all`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setKafedra(res.data);
      })
      .catch((err) => console.log(err));
  }

  function addYonalish(e) {
    e.prenventDefault();
    fetch(`${globalUrl}/kafedra_yonalish/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title_uz: names?.nameUz,
        title_ru: names?.nameRu,
        title_en: names?.nameEn,
        kafedra_id: selectValue,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Malumotlar qo'shildi");
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <form onSubmit={addYonalish}>
      <Input
        nameEn="Yo'nalish nomi (UZ)"
        nameRu="Yo'nalish nomi (RU)"
        nameUz="Yo'nalish nomi (UZ)"
      />

      <SelectType
        title="Kafefrani tanlang"
        options={kafedra.map((i) => ({ id: i._id, name: i.title_uz }))}
      />

      <Button name="Saqlash"/>
    </form>
  );
};
