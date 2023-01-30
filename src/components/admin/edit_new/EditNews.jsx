import React, { useContext, useEffect, useState } from "react";
import { ContentState, convertFromHTML, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import { Context } from "../../../context";

const EditNews = ({ id }) => {
  const { globalUrl, convertToHtml } = useContext(Context);
  const [data, setData] = useState({
    isFetched: false,
    data: {},
    error: false,
  });
  const [fetchedData, setFetchedData] = useState({
    body_uz: "",
    body_ru: "",
    body_en: "",
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

  function converter(data) {
    const contentBlock = convertFromHTML(data);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
      contentBlock.entityMap
    );
    return contentState;
  }

  function getData() {
    fetch(`${globalUrl}/elon/${id}`, {
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
        setFetchedData({
          body_uz: res.data.body_uz,
          body_ru: res.data.body_ru,
          body_en: res.data.body_en,
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
      setAsosiyVazifaUz(EditorState.createWithContent(converter(fetchedData.body_uz)));
      setAsosiyVazifaRu(EditorState.createWithContent(converter(fetchedData.body_ru)));
      setAsosiyVazifaEn(EditorState.createWithContent(converter(fetchedData.body_en)));
    }
  }, [data.isFetched]);

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div>
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
    </div>
  );
};

export default EditNews;
