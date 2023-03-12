import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormHeader from "../../../components/admin/form_header/FormHeader";
import Table from "../../../components/admin/table/Table";
import TextEditor from "../../../components/admin/text_editor/TextEditor";
import { Context } from "../../../context/";

const XalqaroAloqa = () => {
  const { globalUrl } = useContext(Context);
  const [edit, setEdit] = useState({});
  const [editor, setEditor] = useState({
    uz: "",
    ru: "",
    en: "",
  });
  const [fetchedData, setFetchedData] = useState([]);
  const [status, setStatus] = useState("read");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBody = {
      title_uz: e.target.title_uz.value,
      title_ru: e.target.title_ru.value,
      title_en: e.target.title_en.value,
      body_uz: editor.uz,
      body_ru: editor.ru,
      body_en: editor.en,
    };
    const res = await fetch(`${globalUrl}/xalqaro_aloqa/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(newBody),
    });

    const parsed = await res.json();
    if (parsed.status === 200) {
      alert("Qo'shildi");
      window.location.reload();
    }
  };
  const handleSubmitEdit = async (e, id) => {
    e.preventDefault();
    const newBody = {
      title_uz: e.target.title_uz.value,
      title_ru: e.target.title_ru.value,
      title_en: e.target.title_en.value,
      body_uz: editor.uz,
      body_ru: editor.ru,
      body_en: editor.en,
    };
    const res = await fetch(`${globalUrl}/xalqaro_aloqa/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(newBody),
    });

    const parsed = await res.json();
    if (parsed.status === 200) {
      alert("Qo'shildi");
      window.location.reload();
    }
  };
  const getData = async () => {
    const res = await fetch(`${globalUrl}/xalqaro_aloqa/all`, {
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    const parsed = await res.json();
    setFetchedData(parsed.data.reverse());
  };
  const deleteData = async (id) => {
    const res = await fetch(`${globalUrl}/xalqaro_aloqa/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    const parsed = await res.json();
    if (parsed.status === 200) {
      alert("O'chirildi");
      window.location.reload();
    }
  };

  const analyseNameTableHead = ["Tartib raqam", "Sarlavha", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const bodyData = fetchedData;
  const renderBody = (item, index) => {
    return (
      <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>
          <button
            className="event-btn edit"
            onClick={
              () => {
                setEdit({
                  open: true,
                  obj: item,
                });
                setEditor({uz: item.body_uz, ru: item.body_ru, en: item.body_en})
              }
            }
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="event-btn delete"
            onClick={() => deleteData(item._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    getData();
    setEditor({uz: "", ru: "", en: ""})
  }, [status]);

  const content =
    status === "read" ? (
      <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={bodyData}
        renderBody={renderBody}
      />
    ) : (
      <form
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="title_uz" style={{ width: "95%", margin: "0 auto" }}>
          Mavzu nima? UZ
          <input
            type="text"
            name="title_uz"
            id="title_uz"
            className="form-control"
          />
        </label>
        <label htmlFor="title_ru" style={{ width: "95%", margin: "0 auto" }}>
          Mavzu nima? RU
          <input
            type="text"
            name="title_ru"
            id="title_ru"
            className="form-control"
          />
        </label>
        <label htmlFor="title_en" style={{ width: "95%", margin: "0 auto" }}>
          Mavzu nima? EN
          <input
            type="text"
            name="title_en"
            id="title_en"
            className="form-control"
          />
        </label>
        <TextEditor
          title={{
            uz: "Batafsil malumot kiriting (UZ)",
            ru: "Batafsil malumot kiriting (RU)",
            en: "Batafsil malumot kiriting (EN)",
          }}
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
        <button
          className="form-control"
          style={{ width: "95%", margin: "0 auto" }}
        >
          Saqlash
        </button>
      </form>
    );
  return (
    <div>
      {edit.open && (
        <div className="modal-window">
          <div className="modal-inner">
            <div className="modal-header">
              <h1>
                <span style={{ color: "red" }}>{edit.obj.title_uz}</span> ni
                tahrirlang
              </h1>
              <button onClick={() => setEdit({})}>
                <i className="fa fa-x"></i>
              </button>
            </div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
              onSubmit={(e) => handleSubmitEdit(e, edit.obj._id)}
            >
              <label
                htmlFor="title_uz"
                style={{ width: "95%", margin: "0 auto" }}
              >
                Mavzu nima? UZ
                <input
                  type="text"
                  name="title_uz"
                  id="title_uz"
                  className="form-control"
                  defaultValue={edit.obj.title_uz}
                />
              </label>
              <label
                htmlFor="title_ru"
                style={{ width: "95%", margin: "0 auto" }}
              >
                Mavzu nima? RU
                <input
                  type="text"
                  name="title_ru"
                  id="title_ru"
                  className="form-control"
                  defaultValue={edit.obj.title_ru}
                />
              </label>
              <label
                htmlFor="title_en"
                style={{ width: "95%", margin: "0 auto" }}
              >
                Mavzu nima? EN
                <input
                  type="text"
                  name="title_en"
                  id="title_en"
                  className="form-control"
                  defaultValue={edit.obj.title_en}
                />
              </label>
              <TextEditor
                title={{
                  uz: "Batafsil malumot kiriting (UZ)",
                  ru: "Batafsil malumot kiriting (RU)",
                  en: "Batafsil malumot kiriting (EN)",
                }}
                name={{
                  uz: "xalqaro_body_uz",
                  ru: "xalqaro_body_ru",
                  en: "xalqaro_body_en",
                }}
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
              <button
                className="form-control"
                style={{ width: "95%", margin: "0 auto" }}
              >
                Saqlash
              </button>
            </form>
          </div>
        </div>
      )}
      <FormHeader
        title={"Xalqaro aloqa"}
        event2="Qo'shish"
        handleEvent2={() => setStatus("create")}
        event1="Barchasi"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default XalqaroAloqa;
