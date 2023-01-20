import { useContext, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./AddForm.css";

import Input from "../../../components/admin/input/Input";
import SelectType from "../../../components/admin/select_type/SelectType";
import Button from "../button/Button";

import { Context } from "../../../context";

const AddForm = (props) => {
  const { names, selectValue, globalUrl } = useContext(Context);
  const {
    inputNames,
    textEditorNames1,
    textEditorNames2,
    selectName,
    buttonName,
    options,
    hasSelect,
    url,
  } = props;

  const [aboutUz, setAboutUz] = useState(EditorState.createEmpty());
  const [aboutRu, setAboutRu] = useState(EditorState.createEmpty());
  const [aboutEn, setAboutEn] = useState(EditorState.createEmpty());

  const [aimUz, setAimUz] = useState(EditorState.createEmpty());
  const [aimRu, setAimRu] = useState(EditorState.createEmpty());
  const [aimEn, setAimEn] = useState(EditorState.createEmpty());

  const convertToHtml = (raw) => {
    return draftToHtml(convertToRaw(raw.getCurrentContent()));
  };

  const obj = {
    title_uz: names?.nameUz,
    title_ru: names?.nameRu,
    title_en: names?.nameEn,
    haqida_uz: convertToHtml(aboutUz),
    haqida_ru: convertToHtml(aboutRu),
    haqida_en: convertToHtml(aboutEn),
    maqsad_uz: convertToHtml(aimUz),
    maqsad_en: convertToHtml(aimRu),
    maqsad_ru: convertToHtml(aimEn),
  };

  const body = hasSelect
    ? JSON.stringify({ ...obj, fakultet_id: selectValue })
    : JSON.stringify(obj);

  function postData() {
    fetch(`${globalUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E5OWI5YzUwNjBlZDlhMGRkODg0OCIsImlhdCI6MTY3NDIyMjAyNSwiZXhwIjoxNjc0MzA4NDI1fQ.nCpywJANzwjsmupFweDt58k_uBl0b6aYFd1TXhcLWwo",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <form className="main-texteditor-form">
      <Input
        nameUz={inputNames.nameUz}
        nameRu={inputNames.nameRu}
        nameEn={inputNames.nameEn}
      />
      <hr />
      <div>
        <span className="textEditorName">{textEditorNames1.nameUz}</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aboutUz}
          onEditorStateChange={(a) => setAboutUz(a)}
        />
      </div>
      <div>
        <span className="textEditorName">{textEditorNames1.nameRu}</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aboutRu}
          onEditorStateChange={(a) => setAboutRu(a)}
        />
      </div>
      <div>
        <span className="textEditorName">{textEditorNames1.nameEn}</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aboutEn}
          onEditorStateChange={(a) => setAboutEn(a)}
        />
      </div>
      <hr />

      <div>
        <span className="textEditorName">{textEditorNames2.nameUz}</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aimUz}
          onEditorStateChange={(a) => setAimUz(a)}
        />
      </div>
      <div>
        <span className="textEditorName">{textEditorNames2.nameRu}</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aimRu}
          onEditorStateChange={(a) => setAimRu(a)}
        />
      </div>
      <div>
        <span className="textEditorName">{textEditorNames2.nameEn}</span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aimEn}
          onEditorStateChange={(a) => setAimEn(a)}
        />
      </div>

      {hasSelect && (
        <>
          <SelectType title={selectName} options={options} />
          <hr />
        </>
      )}

      <Button
        name={buttonName}
        onClick={(e) => {
          e.preventDefault();
          postData();
        }}
      />
    </form>
  );
};

export default AddForm;
