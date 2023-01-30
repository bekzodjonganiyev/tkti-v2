import React, { useContext, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./Statistics.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import Input from "../../../components/admin/input/Input";

import { Context } from "../../../context";
import Button from "../../../components/admin/button/Button";

const Statistics = () => {
  const { names, globalUrl, convertToHtml } = useContext(Context);

  const [statisticsUz, setStatisticsUz] = useState(EditorState.createEmpty());
  const [statisticsRu, setStatisticsRu] = useState(EditorState.createEmpty());
  const [statisticsEn, setStatisticsEn] = useState(EditorState.createEmpty());
  
  function postData(e) {
    e.preventDefault()
    fetch(`${globalUrl}/statistics/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title_uz: names?.nameUz,
        title_ru: names?.nameRu,
        title_en: names?.nameEn,
        content_uz: convertToHtml(statisticsUz),
        content_ru: convertToHtml(statisticsRu),
        content_en: convertToHtml(statisticsEn),
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="statistics" onSubmit={postData}>
      <FormHeader title="Bitiruvchilar statistikasi" buttonName="Qo'shish" />
      <form className="statistics-form">
        <Input
          nameUz="O'quv yilini kiriting (UZ)"
          nameRu="O'quv yilini kiriting (RU)"
          nameEn="O'quv yilini kiriting (EN)"
        />

        <div>
          <span className="textEditorName">Bitiruvchilar statistikasi(UZ)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={statisticsUz}
            onEditorStateChange={(a) => setStatisticsUz(a)}
          />
        </div>

        <div>
          <span className="textEditorName">Bitiruvchilar statistikasi(RU)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={statisticsRu}
            onEditorStateChange={(a) => setStatisticsRu(a)}
          />
        </div>

        <div>
          <span className="textEditorName">Bitiruvchilar statistikasi(EN)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={statisticsEn}
            onEditorStateChange={(a) => setStatisticsEn(a)}
          />
        </div>

        <Button name="Saqlash" />
      </form>
    </div>
  );
};

export default Statistics;
