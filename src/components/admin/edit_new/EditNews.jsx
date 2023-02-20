import React, { useContext, useEffect, useState } from "react";

import "./EditNews.css";

import TextEditor from "../text_editor/TextEditor";
import Button from "../../../components/admin/button/Button";

import { Context } from "../../../context";

const EditNews = ({ id, url, names }) => {
  const { globalUrl } = useContext(Context);
  const [data, setData] = useState({
    isFetched: false,
    data: {},
    error: false,
  });

  const [editor, setEditor] = useState({
    uz: (localStorage.getItem(names.uz)) ?? "",
    ru: (localStorage.getItem(names.ru)) ?? "",
    en: (localStorage.getItem(names.en)) ?? "",
  });

  function putData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title_uz", e.target.title_uz.value);
    formData.append("title_ru", e.target.title_ru.value);
    formData.append("title_en", e.target.title_en.value);
    formData.append("body_uz", editor.uz);
    formData.append("body_ru", editor.ru);
    formData.append("body_en", editor.en);
    formData.append("date", e.target.date.value);
    formData.append("photo", e.target.photo.files[0]);

    fetch(`${globalUrl}/${url}/${id}`, {
      method: "PUT",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + " ❌");
        } else {
          alert(res.message);
          localStorage.removeItem(names.uz);
          localStorage.removeItem(names.ru);
          localStorage.removeItem(names.en);
          window.location.reload(true);
        }
      })
      .catch((err) => console.log(err));
  }

  function getData() {
    fetch(`${globalUrl}/${url}/${id}`, {
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setData({
          isFetched: true,
          data: res.data,
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setData({
          error: true,
        });
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <form className="text-editor-form-forEdit" onSubmit={putData}>
      {/* TITLE UZ */}
      <div>
        <label htmlFor="forUzName">
          Elon uchun bosh sahidada korinadigan sarlavha(UZ)
          <input
            className="form-control"
            type="text"
            id="forUzName"
            name="title_uz"
            defaultValue={data.isFetched ? data.data?.title_uz : "" }
          />
        </label>
      </div>
      {/* TITLE UZ */}

      {/* TITLE RU */}
      <div>
        <label htmlFor="forRuName">
          Elon uchun bosh sahidada korinadigan sarlavha(RU)
          <input
            className="form-control"
            type="text"
            id="forRuName"
            name="title_ru"
            defaultValue={data.isFetched ? data.data?.title_ru : "" }
          />
        </label>
      </div>
      {/* TITLE RU */}

      {/* TITLE EN */}
      <div>
        <label htmlFor="forEnName">
          Elon uchun bosh sahidada korinadigan sarlavha(EN)
          <input
            className="form-control"
            type="text"
            id="forEnName"
            name="title_en"
            defaultValue={data.isFetched ? data.data?.title_en : "" }
          />
        </label>
      </div>
      {/* TITLE EN */}

      <TextEditor
          title={{
            uz: "Elon haqida batafsil(UZ)",
            ru: "Elon haqida batafsil(RU)",
            en: "Elon haqida batafsil(EN)",
          }}
          name={{ uz: names.uz, ru: names.ru, en: names.en }}
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
          initialValue={{
            uz: data.isFetched && data?.data?.body_uz,
            ru: data.isFetched && data?.data?.body_ru,
            en: data.isFetched && data?.data?.body_en,
          }}
        />

      {/* POSTER IMG */}
      <div className="image-and-date">
        <label htmlFor="forPhoto">
          Elon uchun rasm(Poster img)
          <input className="form-control" type="file" id="forPhoto" name="photo" />
        </label>

        <label htmlFor="forDate">
          Elon uchun mos sanani kiriting
          <input
            className="form-control"
            type="date"
            id="forDate"
            name="date"
            defaultValue={data.isFetched ? data.data?.date : ""}
          />
        </label>
      </div>
      {/* POSTER IMG */}

      <Button name="Yangilash" />
    </form>
  );
};

export default EditNews;
