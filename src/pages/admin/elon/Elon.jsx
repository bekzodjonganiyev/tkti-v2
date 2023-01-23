import React, { useContext, useEffect, useRef, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import { Context } from "../../../context";
import Input from "../../../components/admin/input/Input";
import Button from "../../../components/admin/button/Button";

const Elon = () => {
  const imgRef = useRef();
  const { globalUrl, names } = useContext(Context);

  const [asosiyVazifaUz, setAsosiyVazifaUz] = useState(
    EditorState.createEmpty()
  );
  const [asosiyVazifaRu, setAsosiyVazifaRu] = useState(
    EditorState.createEmpty()
  );
  const [asosiyVazifaEn, setAsosiyVazifaEn] = useState(
    EditorState.createEmpty()
  );

  const convertToHtml = (raw) => {
    return JSON.stringify(draftToHtml(convertToRaw(raw.getCurrentContent())));
  };

  function postData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("body_uz", convertToHtml(asosiyVazifaUz));
    formData.append("body_ru", convertToHtml(asosiyVazifaRu));
    formData.append("body_en", convertToHtml(asosiyVazifaEn));
    formData.append("title_uz", names?.nameUz);
    formData.append("title_ru", names?.nameRu);
    formData.append("title_en", names?.nameEn);
    for (let i = 0; i < imgRef.current.files.length; i++) {
      formData.append("photo", imgRef.current.files[i]);
    }

    fetch(`${globalUrl}/elon/add`, {
      method: "POST",
      headers: {
        Token: localStorage.getItem("token")
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  }

  return (
    <div>
      <FormHeader title="Elon" buttonName="+" />
      <form className="rektorat-form" onSubmit={postData}>
        {/* Sarlavha qo`shish */}
        <Input
          nameUz="Sarlavha kiritng(UZ)"
          nameRu="Sarlavha kiritng(RU)"
          nameEn="Sarlavha kiritng(EN)"
        />

        {/* Asosiy Vazifa */}
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

        <div>
          <label htmlFor="forImg">
            <input
              type="file"
              id="forImg"
              multiple
              accept="image/png, image/gif, image/jpeg"
              ref={imgRef}
            />
          </label>
        </div>
        <Button name="Saqlash" />
      </form>
    </div>
  );
};

export default Elon;
