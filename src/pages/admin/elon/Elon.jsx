import React, { useContext, useEffect, useRef, useState } from "react";


import "../yangilik/Yangilik.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import Input from "../../../components/admin/input/Input";
import Button from "../../../components/admin/button/Button";
import Table from "../../../components/admin/table/Table";
import ModalWindow from "../../../components/admin/modal-window/ModalWindow";

import { Context } from "../../../context";
import { Fetchers } from "../../../services/fetchRequests";
import TextEditor from "../../../components/admin/text_editor/TextEditor";

const Elon = () => {
  const imgRef = useRef();
  const { globalUrl, names, convertToHtml } = useContext(Context);
  const [type, setType] = useState("table");
  const [data, setData] = useState();
  const [onEdit, setOnEdit] = useState({});
  let content = null;
  const [editor, setEditor] = useState({
    uz: JSON.parse(localStorage.getItem("body_uz")) ?? "",
    ru: JSON.parse(localStorage.getItem("body_ru")) ?? "",
    en: JSON.parse(localStorage.getItem("body_en")) ?? "",
  });

  const analyseNameTableHead = ["Tartib raqam", "Elon nomi", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const bodyData = data;
  const renderBody = (item, index) => {
    return (
      <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>
          <button
            className="event-btn edit"
            onClick={() =>
              setOnEdit({
                open: true,
                id: item._id,
                name: item.title_uz,
              })
            }
          >
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
    fetch(`${globalUrl}/elon/all`, {
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
    formData.append("body_uz", editor.uz);
    formData.append("body_ru", editor.ru);
    formData.append("body_en", editor.en);
    formData.append("title_uz", names?.nameUz);
    formData.append("title_ru", names?.nameRu);
    formData.append("title_en", names?.nameEn);
    formData.append("date", e.target.date.value);
    formData.append("photo", e.target.photo.files[0]);
    Fetchers.addData("elon/add", formData, true).then((res) => {
      if (!res.success) {
        alert(res.message + "❌");
      } else {
        alert(res.message);
        window.location.reload(false);
      }
    });
  }
  function deleteYangilik(id) {
    fetch(`${globalUrl}/elon/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + "❌");
        } else {
          alert("Malumotlar o'chirildi");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(editor);
  }, [editor]);

  if (type === "table") {
    content = (
      <>
        {data && (
          <Table
            headData={analyseNameTableHead}
            renderHead={renderHead}
            bodyData={bodyData}
            renderBody={renderBody}
          />
        )}
      </>
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
        {/* ELON HAQIDA BATAFSIL */}
        <TextEditor
          title={{
            uz: "Elon haqida batafsil(UZ)",
            ru: "Elon haqida batafsil(RU)",
            en: "Elon haqida batafsil(EN)",
          }}
          name={{ uz: "body_uz", ru: "body_ru", en: "body_en" }}
          value={{
            uz: editor.uz,
            ru: editor.ru,
            en: editor.en,
          }}
          handleValue={{
            uz: (e) => setEditor({ ...editor, uz: e }),
            ru: (e) => setEditor({ ...editor, ru: e }),
            en: (e) => setEditor({ ...editor, en: e }),
          }}
        />
        <div className="file">
          <label htmlFor="forImg">
            <input
              className="form-control"
              type="file"
              id="forImg"
              name="photo"
              accept="image/png, image/gif, image/jpeg"
              ref={imgRef}
            />
          </label>
        </div>
        <div className="file">
          <label htmlFor="forDate">
            <input
              type="date"
              id="forDate"
              name="date"
              className="form-control"
            />
          </label>
        </div>

        <Button name="Saqlash" />
      </form>
    );
  }
  return (
    <div className="yangilik">
      {onEdit.open && (
        <ModalWindow
          id={onEdit.id}
          url={"elon"}
          name={onEdit.name}
          closeModal={() => setOnEdit({ open: false })}
        />
      )}
      <FormHeader
        title="Elon"
        event1="Elonlar jadvali"
        event2="Elon qo'shish"
        handleEvent1={() => setType("table")}
        handleEvent2={() => setType("addNew")}
      />
      {content}
    </div>
  );
};
export default Elon;
