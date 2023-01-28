import React, { useContext, useEffect, useRef, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "./Yangilik.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import Input from "../../../components/admin/input/Input";
import Button from "../../../components/admin/button/Button";
import Table from "../../../components/admin/table/Table";

import { Context } from "../../../context";

const Yangilik = () => {
  const imgRef = useRef();
  const {time, globalUrl, names, convertToHtml,DataDeleter,DataPoster, DataGetter } = useContext(Context);
  const [type, setType] = useState("table");
  const [data, setData] = useState({isFetched: false,error: false,data: {}});

  let content = null;

  const [asosiyVazifaUz, setAsosiyVazifaUz] = useState(
    EditorState.createEmpty()
  );
  const [asosiyVazifaRu, setAsosiyVazifaRu] = useState(
    EditorState.createEmpty()
  );
  const [asosiyVazifaEn, setAsosiyVazifaEn] = useState(
    EditorState.createEmpty()
  );

  const analyseNameTableHead = ["Tartib raqam", "Yangilik nomi", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const bodyData = data.data;
  const renderBody = (item, index) => {
    return (
      <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>
          <button className="event-btn edit" onClick={() => {}}>
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="event-btn delete"
            onClick={() => deleteYangilik(item._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  function getData() {
    fetch(`${globalUrl}/news/all`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }

  function postData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("body_uz", convertToHtml(asosiyVazifaUz));
    formData.append("body_ru", convertToHtml(asosiyVazifaRu));
    formData.append("body_en", convertToHtml(asosiyVazifaEn));
    formData.append("title_uz", names?.nameUz);
    formData.append("title_ru", names?.nameRu);
    formData.append("title_en", names?.nameEn);
    formData.append("date", time(e.target.fordate.value));
    formData.append("photo", imgRef.current.files[0]);

    DataPoster('news/add', formData)
  }

  function deleteYangilik(id) {
    DataDeleter(`news/${id}`)
  }

  useEffect(() => {
    DataGetter(setData, 'news/all')
  }, []);

  if (type === "table") {
    content = (
      data.isFetched && data.data ?(
        <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={bodyData}
        renderBody={renderBody}
      />
      ):(
        <></>
      )
    );
  } else {
    content = (
      <form className="yangilik-form" onSubmit={postData}>
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

        <div className="file w-25">
          <input className="form-control" type="datetime-local" name="fordate"/>
        </div>

        <div className="file">
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
    );
  }

  return (
    <div className="yangilik">
      <FormHeader
        title="Yangilik"
        event1="Yangiliklar jadvali"
        event2="Yangilik qo'shish"
        handleEvent1={() => setType("table")}
        handleEvent2={() => setType("addNew")}
      />
      {content}
    </div>
  );
};

export default Yangilik;
