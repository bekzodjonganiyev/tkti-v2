import React, { useContext, useState, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./StudentBolim.css";

import Input from "../../../components/admin/input/Input";
import Button from "../../../components/admin/button/Button";
import FormHeader from "../../../components/admin/form_header/FormHeader";

import { Context } from "../../../context";

const StudentBolim = () => {
  const { names, globalUrl } = useContext(Context);

  const [contentUz, setContentUz] = useState(EditorState.createEmpty());
  const [contentRu, setContentRu] = useState(EditorState.createEmpty());
  const [contentEn, setContentEn] = useState(EditorState.createEmpty());
  const [link, setLink] = useState("");

  const body = {
    title_uz: names?.nameUz,
    title_ru: names?.nameRu,
    title_en: names?.nameEn,
    body_uz: convertToHtml(contentUz),
    body_ru: convertToHtml(contentRu),
    body_en: convertToHtml(contentEn),
    icon: link,
  };

  function convertToHtml(raw) {
    return draftToHtml(convertToRaw(raw.getCurrentContent()));
  }

  const submitForm = (e) => {
    e.preventDefault();
    fetch(`${globalUrl}/student_bolim/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Token": localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(body)
  };
  return (
    <div>
      <FormHeader title="Talabalar uchun" buttonName="Qo'shish"/>
      <form className="student-section" onSubmit={submitForm}>
        <Input
          nameUz="Bo'lim nomi(UZ)"
          nameRu="Bo'lim nomi(RU)"
          nameEn="Bo'lim nomi(EN)"
        />
        <div>
          <span>Bo'lim kontenti(UZ)</span>
          <Editor
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            wrapperClassName="text-editor-wrapper"
            editorState={contentUz}
            onEditorStateChange={(e) => setContentUz(e)}
          />
        </div>

        <div>
          <span>Bo'lim kontenti(RU)</span>
          <Editor
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            wrapperClassName="text-editor-wrapper"
            editorState={contentRu}
            onEditorStateChange={(e) => setContentRu(e)}
          />
        </div>

        <div>
          <span>Bo'lim kontenti(EN)</span>
          <Editor
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            wrapperClassName="text-editor-wrapper"
            editorState={contentEn}
            onEditorStateChange={(e) => setContentEn(e)}
          />
        </div>

        <label htmlFor="forIcon" className="student-section-logo">
          Bo'lim uchun logo <br />
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
          />
        </label>

        <Button name="Bo'limni qo'shish" />
      </form>
    </div>
  );
};

export default StudentBolim;
