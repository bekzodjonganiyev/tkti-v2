import React, { useContext, useEffect, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "./FaoliyatData.css";

import Button from "../../button/Button";
import Input from "../../input/Input";

import { Context } from "../../../../context";

const FaoliyatData = () => {
  const { globalUrl, names, convertToHtml } = useContext(Context);
  const [inputValue, setInputValue] = useState({});
  const [activity, setActivity] = useState([]);

  const [aboutUz, setAboutUz] = useState(EditorState.createEmpty());
  const [aboutRu, setAboutRu] = useState(EditorState.createEmpty());
  const [aboutEn, setAboutEn] = useState(EditorState.createEmpty());

  const [hashtag, setHashtag] = useState("");
  const [elements, setElements] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleHashtag = (event) => {
    setHashtag(event.target.value);
    setShowButton(true);
  };

  const handleButtonClick = () => {
    setElements([...elements, { value: hashtag, id: Date.now() }]);
    setHashtag("");
    setShowButton(false);
  };

  const handleRemoveElement = (id) => {
    setElements(elements.filter((element) => element.id !== id));
  };

  const body = {
    title_uz: names?.nameUz,
    title_ru: names?.nameRu,
    title_en: names?.nameEn,
    description_uz: convertToHtml(aboutUz),
    description_ru: convertToHtml(aboutRu),
    description_en: convertToHtml(aboutEn),
    location_uz: inputValue.location_uz,
    location_ru: inputValue.location_ru,
    location_en: inputValue.location_en,
    hashtag: elements,
    faoliyat_id: inputValue.faoliyat_id,
  };

  function postData(e) {
    e.preventDefault();
    fetch(`${globalUrl}/faoliyat_data/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
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

  useEffect(() => {
    if (hashtag === "") {
      setShowButton(false);
      return;
    }
  }, [hashtag]);

  useEffect(() => {
    function getOptions() {
      fetch(`${globalUrl}/faoliyat/all`, {
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setActivity(res.data);
        })
        .catch((err) => console.log(err));
    }
    getOptions();
  }, []);

  return (
    <form className="faoliyat-data-form" onSubmit={postData}>
      <Input
        nameUz="Faoliyatning nomi(UZ)"
        nameRu="Faoliyatning nomi(RU)"
        nameEn="Faoliyatning nomi(EN)"
      />

      {/* Batafil Malumot */}
      <div>
        <span className="textEditorName">
          Faoliyat haqida batafsil yozing (UZ)
        </span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aboutUz}
          onEditorStateChange={(a) => setAboutUz(a)}
        />
      </div>
      <div>
        <span className="textEditorName">
          Faoliyat haqida batafsil yozing (RU)
        </span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aboutRu}
          onEditorStateChange={(a) => setAboutRu(a)}
        />
      </div>
      <div>
        <span className="textEditorName">
          Faoliyat haqida batafsil yozing (EN)
        </span>
        <Editor
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor-body"
          toolbarClassName="text-editor-toolbar"
          editorState={aboutEn}
          onEditorStateChange={(a) => setAboutEn(a)}
        />
      </div>

      {/* Lokatsiya kiritamiz */}
      <div className="additional-datas">
        <label htmlFor="locationUz">
          Joylashuvni kiriting(UZ) <br />
          <input
            type="text"
            id="locationUz"
            name="location_uz"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="locationRu">
          Joylashuvni kiriting(RU) <br />
          <input
            type="text"
            id="locationRu"
            name="location_ru"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="locationEn">
          Joylashuvni kiriting(EN) <br />
          <input
            type="text"
            id="locationEn"
            name="location_en"
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Hash tag */}
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="additional-datas"
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <label htmlFor="hashtag">
            Hash tag kiriting (<span style={{ color: "blue" }}>#savol</span>)
            <input value={hashtag} onChange={handleHashtag} />
          </label>
          {showButton && (
            <button
              onClick={handleButtonClick}
              style={{
                background: "azure",
                border: "none",
                color: "black",
                marginLeft: "5px",
                padding: "4px 10px",
                borderRadius: "8px",
              }}
            >
              Add
            </button>
          )}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {elements.map((element) => (
            <div
              key={element.id}
              style={{
                background: "azure",
                borderRadius: "8px",
                color: "blue",
                padding: "5px",
              }}
            >
              #{element.value}
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "red",
                  marginLeft: "5px",
                }}
                onClick={() => handleRemoveElement(element.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Faoliyatni tanlang */}
      <div className="additional-datas">
        <label htmlFor="selectActiviyName">
          Faoliyatni tanlang <br />
          <select
            name="faoliyat_id"
            id="selectActiviyName"
            onChange={handleChange}
          >
            <option value="" hidden>
              ...
            </option>
            {activity.length !== 0 &&
              activity?.map((i) => (
                <option key={i._id} value={i._id}>
                  {i.title_uz}
                </option>
              ))}
          </select>
        </label>
      </div>

      <Button name="Saqlash" />
    </form>
  );
};

export default FaoliyatData;
