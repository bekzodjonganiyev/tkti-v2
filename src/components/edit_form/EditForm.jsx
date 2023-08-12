import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { DeleteIcon } from "../../assets/icons";
import { Spin, message } from "antd";

export const EditForm = ({ childById, parents, putChild, loading, ifUpdateSuccessWhereTo }) => {
  const [editorUz, setEditorUz] = useState("");
  const [editorRu, setEditorRu] = useState("");
  const [editorEn, setEditorEn] = useState("");
  const [title, setTitle] = useState({
    uz: childById?.title_uz,
    ru: childById?.title_ru,
    en: childById?.title_en,
  });
  const [state, setState] = useState([]);

  const editorInit = {
    min_height: 400,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste wordcount",
      "codesample code",
      "autoresize",
    ],
    codesample_languages: [
      { text: "HTML/XML", value: "markup" },
      { text: "JavaScript", value: "javascript" },
      { text: "CSS", value: "css" },
      { text: "PHP", value: "php" },
    ],
    toolbar:
      "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample code",
  };


  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    callback();
  };

  const submit = (e) => {
    e.preventDefault();

    const fmData = new FormData();
    fmData.append("title_uz", title?.uz);
    fmData.append("title_ru", title?.ru);
    fmData.append("title_en", title?.en);
    fmData.append("nameId", e.target.nameId.value);
    fmData.append("body_uz", editorUz);
    fmData.append("body_ru", editorRu);
    fmData.append("body_en", editorEn);

    putChild(fmData, 
        (res) => {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "success",
                content: res?.message,
              });
              setTimeout(() => {
                window.location.href = `/adminPanel/${ifUpdateSuccessWhereTo}`
              }, 500)
            }, 1000);
          });
        },
        (res) => {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "error",
                content: res?.message,
              });
            }, 1000);
          });
        }
      );
  };

  useEffect(() => {
    if (childById) {
      setEditorUz(childById.body_uz);
      setEditorRu(childById.body_ru);
      setEditorEn(childById.body_en);
    }
    setTitle({
      uz: childById?.title_uz,
      ru: childById?.title_ru,
      en: childById?.title_en,
    });
  }, [childById]);



  const func = (e) => {
    e.preventDefault();
    state.forEach((a) =>
      console.log(
        `${a}) ${e.target[`savol_uz${a}`].value} - ${
          e.target[`javob_uz${a}`].value
        }`
      )
    );
  };

  return (
    <div>
      {contextHolder}
      <Spin spinning={loading}>
          <form onSubmit={submit} className="pb-10">
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="title_uz">Sarlavha (UZ)</label>
              <input
                type="text"
                id="title_uz"
                name="title_uz"
                value={title?.uz}
                onChange={(e) => setTitle({ ...title, uz: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="title_ru">Sarlavha (RU)</label>
              <input
                type="text"
                id="title_ru"
                name="title_ru"
                value={title?.ru}
                onChange={(e) => setTitle({ ...title, ru: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="title_en">Sarlavha (EN)</label>
              <input
                type="text"
                id="title_en"
                name="title_en"
                value={title?.en}
                onChange={(e) => setTitle({ ...title, en: e.target.value })}
              />
            </div>
            <div className="mt-10">
              <span>Batafsi malumot (UZ)</span>
              <Editor
                init={editorInit}
                value={editorUz}
                onEditorChange={(e) => setEditorUz(e)}
              />
            </div>
            <div className="mt-10">
              <span>Batafsi malumot (RU)</span>
              <Editor
                init={editorInit}
                value={editorRu}
                onEditorChange={(e) => setEditorRu(e)}
              />
            </div>
            <div className="mt-10">
              <span>Batafsi malumot (EN)</span>
              <Editor
                init={editorInit}
                value={editorEn}
                onEditorChange={(e) => setEditorEn(e)}
              />
            </div>
            <div className="my-10">
              <label htmlFor="nameId"></label>
              <select
                name="nameId"
                id="nameId"
                defaultValue={childById?.nameId}
              >
                {parents.map((item) => (
                  <option value={item._id}>{item.title_uz}</option>
                ))}
              </select>
            </div>

            <div className="mb-10">
              {state.map((item) => (
                <div
                  className="flex justify-between items-center gap-10 mb-10"
                  key={item}
                >
                  <div className="flex flex-col gap-2 w-1/3">
                    <input
                      placeholder="Savol uz"
                      className="form-control"
                      type="text"
                      name={`savol_uz${item}`}
                    />
                    <textarea
                      placeholder="Javob uz"
                      className="form-control"
                      name={`javob_uz${item}`}
                      cols="5"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <input
                      placeholder="Savol ru"
                      className="form-control"
                      type="text"
                      name={`savol_ru${item}`}
                    />
                    <textarea
                      placeholder="Javob ru"
                      className="form-control"
                      name={`javob_ru${item}`}
                      cols="5"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <input
                      placeholder="Savol en"
                      className="form-control"
                      type="text"
                      name={`savol_en${item}`}
                    />
                    <textarea
                      placeholder="Javob en"
                      className="form-control"
                      name={`javob_en${item}`}
                      cols="5"
                      rows="5"
                    ></textarea>
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      const arr = state.filter((a) => a !== item);
                      setState(arr);
                    }}
                  >
                    <DeleteIcon />
                  </span>
                </div>
              ))}
              <div
                className="py-2 px-6 bg-red-800 text-white inline mt-10 cursor-pointer"
                onClick={() => setState([...state, state.length + 1])}
              >
                Qo'shish
              </div>
            </div>

            <button className="bg-blue-500 flex items-center justify-center w-full text-white py-2 font-bold">
              Saqlash
            </button>
          </form>
      </Spin>
    </div>
  );
};
