import React, { useContext, useState, useRef } from "react";


import TextEditor from "../../../components/admin/text_editor/TextEditor";

import "./StudentBolim.css";

import Input from "../../../components/admin/input/Input";
import Button from "../../../components/admin/button/Button";
import FormHeader from "../../../components/admin/form_header/FormHeader";

import { Context } from "../../../context";

const StudentBolim = () => {
  const { names, globalUrl } = useContext(Context);

  const [editor, setEditor] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const [link, setLink] = useState("");

  const body = {
    title_uz: names?.nameUz,
    title_ru: names?.nameRu,
    title_en: names?.nameEn,
    body_uz: editor.uz,
    body_ru: editor.ru,
    body_en: editor.en,
    icon: link,
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetch(`${globalUrl}/student_bolim/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(body);
  };
  return (
    <div>
      <FormHeader title="Talabalar uchun" buttonName="Qo'shish" />
      <form className="student-section" onSubmit={submitForm}>
        <Input
          nameUz="Bo'lim nomi(UZ)"
          nameRu="Bo'lim nomi(RU)"
          nameEn="Bo'lim nomi(EN)"
        />
        <div>
          <TextEditor
            title={{
              uz: "Bo'lim kontenti(uz)",
              ru: "Bo'lim kontenti(ru)",
              en: "Bo'lim kontenti(en)",
            }}
            value={{
              uz: editor.uz,
              ru: editor.ru,
              en: editor.en,
            }}
            handleValue={{
              uz: (e) => setEditor({ ...editor, uz: e }),
              ru: (e) => setEditor({ ...editor, ru: e }),
              en: (e) => setEditor({ ...editor, en: e }),
            }}
          />
        </div>

        <label htmlFor="forIcon" className="student-section-logo">
          Bo'lim uchun logo <br />
          <input type="text" onChange={(e) => setLink(e.target.value)} />
        </label>

        <Button name="Bo'limni qo'shish" />
      </form>
    </div>
  );
};

export default StudentBolim;
