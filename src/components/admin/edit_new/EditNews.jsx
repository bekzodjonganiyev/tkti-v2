import React, { useContext, useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "./EditNews.css";

import Button from "../../../components/admin/button/Button";

import { Context } from "../../../context";

const EditNews = ({ id, url }) => {
  const { globalUrl, convertToHtml, convertToEntityMap } = useContext(Context);
  const [data, setData] = useState({
    isFetched: false,
    data: {},
    error: false,
  });
  const [asosiyVazifaUz, setAsosiyVazifaUz] = useState(
    EditorState.createEmpty()
  );
  const [asosiyVazifaRu, setAsosiyVazifaRu] = useState(
    EditorState.createEmpty()
  );
  const [asosiyVazifaEn, setAsosiyVazifaEn] = useState(
    EditorState.createEmpty()
  );

  function putData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title_uz", e.target.title_uz.value);
    formData.append("title_ru", e.target.title_ru.value);
    formData.append("title_en", e.target.title_en.value);
    formData.append("body_uz", convertToHtml(asosiyVazifaUz));
    formData.append("body_ru", convertToHtml(asosiyVazifaRu));
    formData.append("body_en", convertToHtml(asosiyVazifaEn));
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
    if (data.isFetched) {
      setAsosiyVazifaUz(
        EditorState.createWithContent(convertToEntityMap(data.data.body_uz))
      );
      setAsosiyVazifaRu(
        EditorState.createWithContent(convertToEntityMap(data.data.body_ru))
      );
      setAsosiyVazifaEn(
        EditorState.createWithContent(convertToEntityMap(data.data.body_en))
      );
    }
  }, [data.isFetched]);

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
            type="text"
            id="forUzName"
            name="title_uz"
            defaultValue={data.isFetched ? data.data.title_uz : "" }
          />
        </label>
      </div>
      {/* TITLE UZ */}

      {/* TITLE RU */}
      <div>
        <label htmlFor="forRuName">
          Elon uchun bosh sahidada korinadigan sarlavha(RU)
          <input
            type="text"
            id="forRuName"
            name="title_ru"
            defaultValue={data.isFetched ? data.data.title_ru : "" }
          />
        </label>
      </div>
      {/* TITLE RU */}

      {/* TITLE EN */}
      <div>
        <label htmlFor="forEnName">
          Elon uchun bosh sahidada korinadigan sarlavha(EN)
          <input
            type="text"
            id="forEnName"
            name="title_en"
            defaultValue={data.isFetched ? data.data.title_en : "" }
          />
        </label>
      </div>
      {/* TITLE EN */}

      {/* BODY UZ */}
      <div>
        <span className="textEditorName">Asosiy Vazifa(UZ)</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={asosiyVazifaUz}
          onEditorStateChange={(a) => setAsosiyVazifaUz(a)}
        />
      </div>
      {/* BODY UZ */}

      {/* BODY RU */}
      <div>
        <span className="textEditorName">Asosiy Vazifa(RU)</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={asosiyVazifaRu}
          onEditorStateChange={(a) => setAsosiyVazifaRu(a)}
        />
      </div>
      {/* BODY RU */}

      {/* BODY EN */}
      <div>
        <span className="textEditorName">Asosiy Vazifa(EN)</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={asosiyVazifaEn}
          onEditorStateChange={(a) => setAsosiyVazifaEn(a)}
        />
      </div>
      {/* BODY EN */}

      {/* POSTER IMG */}
      <div className="image-and-date">
        <label htmlFor="forPhoto">
          Elon uchun rasm(Poster img)
          <input type="file" id="forPhoto" name="photo" />
        </label>

        <label htmlFor="forDate">
          Elon uchun mos sanani kiriting
          <input
            type="date"
            id="forDate"
            name="date"
            defaultValue={data.isFetched ? data.data.date : ""}
          />
        </label>
      </div>
      {/* POSTER IMG */}

      <Button name="Yangilash" />
    </form>
  );
};

export default EditNews;
