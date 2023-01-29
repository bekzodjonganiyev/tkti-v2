import { useContext, useState, useEffect, useRef } from "react";

import "./Bolim.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";
import Table from "../../../components/admin/table/Table";

import { Context } from "../../../context";
import EditXodim from "../../../components/edit_xodim/EditXodim";

const Bolim = () => {
  const { globalUrl } = useContext(Context);
  const { imageRef } = useRef();
  const [type, setType] = useState("table");
  const [bolimData, setBolimData] = useState();
  const [bolimXodim, setBolimXodim] = useState();
  const [onEdit, setOnEdit] = useState({});
  const [editInput, setEditInput] = useState(null);
  let content = null;

  const props = {
    inputNames: {
      nameUz: "Bo'lim nomi Uz",
      nameRu: "Bo'lim nomi Ru",
      nameEn: "Bo'lim nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    textEditorNames2: {
      nameUz: "Bo'lim haqida Uz",
      nameRu: "Bo'lim haqida Ru",
      nameEn: "Bo'lim haqida En",
    },
    selectName: "select name",
    buttonName: "buttob name",
    url: "bm_data/add",
  };

  // FOR BO'LIM DATA
  const analyseNameTableHead = ["Tartib raqam", "Bo'lim nomi", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const bodyData = bolimData;
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
            onClick={() => deleteDepartment(item._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  // FOR BO'LIM XODIM
  const xodimTableHead = [
    "Tartib raqam",
    "Xodim ismi nomi",
    "Bo`limi",
    "Amallar",
  ];
  const renderXodimHead = (item, index) => <th key={index}>{item}</th>;
  const xodimTableBody = bolimXodim;
  const renderXodimBody = (item, index) => {
    return (
      <>
        {onEdit.open && onEdit.id === item._id ? (
          <tr
            key={index}
            style={{ cursor: "pointer", userSelect: "none" }}
            className="edit-table-row"
          >
            <td>
              <input
                className="table-edit-input"
                type="text"
                name="name_uz"
                onChange={handleChange}
              />
              <input
                className="table-edit-input"
                type="text"
                name="name_ru"
                onChange={handleChange}
              />
              <input
                className="table-edit-input"
                type="text"
                name="name_en"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className="table-edit-input"
                type="text"
                name="job_uz"
                onChange={handleChange}
              />
              <input
                className="table-edit-input"
                type="text"
                name="job_ru"
                onChange={handleChange}
              />
              <input
                className="table-edit-input"
                type="text"
                name="job_en"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className="table-edit-input"
                type="text"
                name="tell"
                onChange={handleChange}
              />
              <input
                className="table-edit-input"
                type="text"
                name="email"
                onChange={handleChange}
              />
              <input className="table-edit-input" type="file" ref={imageRef} />
            </td>

            <td>
              <select
                className=""
                name="bolim_id"
                onChange={handleChange}
                style={{ width: "200px", padding: "5px", marginTop:"-50px" }}
              >
                <option value="" hidden>
                  ...
                </option>
                {bolimData?.map((i) => (
                  <option value={i._id}>{i.title_uz}</option>
                ))}
              </select>
              <div style={{marginTop:"40px"}}>
                <button
                  className="event-btn edit"
                  onClick={() => {
                    putData(item._id);
                  }}
                >
                  <i className="fa fa-check"></i>
                </button>
                <button
                  className="event-btn delete"
                  onClick={() =>
                    setOnEdit({
                      open: false,
                      id: false,
                    })
                  }
                >
                  <i className="fa fa-x"></i>
                </button>
              </div>
            </td>
          </tr>
          // <EditXodim xodim={item} endpoint={`bm_hodim/${item._id}`} setOnEdit={setOnEdit}/>
        ) : (
          <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
            <td>{index + 1}</td>
            <td>{item.name_uz}</td>
            <td>{test(item.bolim_id)}</td>
            <td>
              <button
                className="event-btn edit"
                onClick={() => {
                  setOnEdit({
                    open: true,
                    id: item._id,
                  });
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="event-btn delete"
                onClick={() => deleteDepartmentEmployer(item._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        )}
      </>
    );
  };

  function getData() {
    fetch(`${globalUrl}/bm_data/all`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setBolimData(res.data);
      })
      .catch((err) => console.log(err));

    fetch(`${globalUrl}/bm_hodim/all`, {
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setBolimXodim(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteDepartment(id) {
    fetch(`${globalUrl}/bm_data/${id}`, {
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
        window.localStorage.setItem("token", "sss");
      });
  }

  function deleteDepartmentEmployer(id) {
    fetch(`${globalUrl}/bm_hodim/${id}`, {
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
      .catch((err) => console.log(err));
  }

  function test(id) {
    return bolimData?.find((i) => i._id === id)?.title_uz;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditInput((prev) => ({ ...prev, [name]: value }));
  }

  function validate (value) {
    if (value.length !== 0) {
      return true
    }
  }

  function putData(id) {

    console.log(editInput.keys())
    const formData = new FormData();
    Object.keys(editInput).forEach((i) => formData.append(i, editInput[i]));
    // formData.append("photo", imageRef.current.files[0]);

    fetch(`${globalUrl}/bm_hodim/${id}`, {
      method: "PUT",
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
  }

  useEffect(() => {
    getData();
  }, [type]);

  if (type === "table") {
    content = (
      <>
        <Table
          headData={analyseNameTableHead}
          renderHead={renderHead}
          bodyData={bodyData}
          renderBody={renderBody}
        />
        <br />
        <br />
        <p style={{ fontSize: "30px", textAlign: "center" }}>Xodimlar</p>
        <Table
          headData={xodimTableHead}
          renderHead={renderXodimHead}
          bodyData={xodimTableBody}
          renderBody={renderXodimBody}
        />
      </>
    );
  } else if (type === "addDepartmant") {
    content = (
      <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        textEditorNames2={props.textEditorNames2}
        selectName={props.selectName}
        buttomName={props.buttonName}
        hasSelect={false}
        url={props.url}
      />
    );
  } else if (type === "addEmployer") {
    content = (
      <XodimForm
        categoryId={"bolim_id"}
        categoryEndpoint={"bm_data/all"}
        employerEndpoint={"bm_hodim/add"}
      />
    );
  } else {
    content = (
      <FaoliyatForm
        catogoryId="bolim_id"
        url="bm_data/all"
        categoryLabel="Faoliyat Qo'shish"
      />
    );
  }

  console.log(editInput);
  return (
    <div>
      <FormHeader
        title="Bo'lim"
        event1="Bo'limlar jadvali"
        event2="Bo'lim qo`shish"
        event3="Xodim qo`shish"
        event4="Faoliyat qo`shish"
        handleEvent1={() => setType("table")}
        handleEvent2={() => setType("addDepartmant")}
        handleEvent3={() => setType("addEmployer")}
        handleEvent4={() => setType("addAction")}
      />
      {content}
    </div>
  );
};

export default Bolim;
