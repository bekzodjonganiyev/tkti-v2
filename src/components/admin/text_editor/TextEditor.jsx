import React, { useState, useContext, useCallback } from "react";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./TextEditor.css";

import { Context } from "../../../context";

const TextEditor = ({ nameUz = "name", nameRu = "name", nameEn = "name" }) => {
  const { setTextEditorBodyUz, setTextEditorBodyRu, setTextEditorBodyEn } =
    useContext(Context);

  const [editorStateUz, setEditorStateUz] = useState("");
  const [editorStateRu, setEditorStateRu] = useState("");
  const [editorStateEn, setEditorStateEn] = useState("");

  const onEditorStateChangeUz = useCallback((editorState) => {
    setEditorStateUz(editorState);
    const rawDataUz = convertToRaw(editorState.getCurrentContent());
    setTextEditorBodyUz(draftToHtml(rawDataUz));
  });

  function onEditorStateChangeRu(editorState) {
    setEditorStateRu(editorState);
    const rawDataRu = convertToRaw(editorState.getCurrentContent());
    setTextEditorBodyRu(draftToHtml(rawDataRu));
  }

  function onEditorStateChangeEn(editorState) {
    setEditorStateEn(editorState);
    const rawDataEn = convertToRaw(editorState.getCurrentContent());
    setTextEditorBodyEn(draftToHtml(rawDataEn));
  }

  return (
    <div className="texteditor-component">
      {/* O'zbekcha */}
      <div>
        <span className="editor-title">{nameUz}</span>
        <Editor
          editorState={editorStateUz}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChangeUz}
        />
      </div>

      {/* Ruscha */}
      <div>
        <span className="editor-title">{nameRu}</span>
        <Editor
          editorState={editorStateRu}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChangeRu}
        />
      </div>

      {/* Inglizcha */}
      <div>
        <span className="editor-title">{nameEn}</span>
        <Editor
          editorState={editorStateEn}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChangeEn}
        />
      </div>
    </div>
  );
};

export default TextEditor;
