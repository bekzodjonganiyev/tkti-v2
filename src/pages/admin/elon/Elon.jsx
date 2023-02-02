import React, { useContext, useEffect, useRef, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../yangilik/Yangilik.css";
import FormHeader from "../../../components/admin/form_header/FormHeader";
import Input from "../../../components/admin/input/Input";
import Button from "../../../components/admin/button/Button";
import Table from "../../../components/admin/table/Table";
import { Context } from "../../../context";
import ModalWindow from "../../../components/admin/modal-window/ModalWindow";
const Elon = () => {
  const imgRef = useRef();
  const { time, globalUrl, names, convertToHtml } = useContext(Context);
  const [type, setType] = useState("table");
  const [data, setData] = useState();
  const [onEdit, setOnEdit] = useState({});
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
                name: item.title_uz
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
    formData.append("body_uz", convertToHtml(asosiyVazifaUz));
    formData.append("body_ru", convertToHtml(asosiyVazifaRu));
    formData.append("body_en", convertToHtml(asosiyVazifaEn));
    formData.append("title_uz", names?.nameUz);
    formData.append("title_ru", names?.nameRu);
    formData.append("title_en", names?.nameEn);
    formData.append("date", e.target.date.value);
    formData.append("photo", e.target.photo.files[0]);
    fetch(`${globalUrl}/elon/add`, {
      method: "POST",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + "❌");
        } else {
          alert(res.message);
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));

    console.log(formData);
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
        <div className="file">
          <label htmlFor="forImg">
            <input
              type="file"
              id="forImg"
              name="photo"
              accept="image/png, image/gif, image/jpeg"
              ref={imgRef}
            />
          </label>
        </div>
        <div>
          <label htmlFor="forDate">
            <input type="date" id="forDate" name="date" />
          </label>
        </div>

        <Button name="Saqlash" />
      </form>
    );
  }
  return (
    <div className="yangilik">
      {
        onEdit.open && (
          <ModalWindow id={onEdit.id} url={"elon"} name={onEdit.name} closeModal={() => setOnEdit({open: false})}/>
        )
      }
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
