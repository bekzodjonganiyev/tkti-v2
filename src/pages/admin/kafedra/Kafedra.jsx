import React, { useContext, useEffect, useState } from "react";

import "./Kafedra.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import { Yonalish } from "./Yonalish";
import Table from "../../../components/admin/table/Table";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";

import { Context } from "../../../context";

const Kafedra = () => {
  const { globalUrl } = useContext(Context);
  const [fakultet, setFakultet] = useState();
  const [kafedra, setKafedra] = useState();
  const [type, setType] = useState("table");
  let content = null;
  const props = {
    inputNames: {
      nameUz: "kafedra nomi Uz",
      nameRu: "kafedra nomi Ru",
      nameEn: "kafedra nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    textEditorNames2: {
      nameUz: "kafedra haqida Uz",
      nameRu: "kafedra haqida Ru",
      nameEn: "kafedra haqida En",
    },
    selectName: "Fakultetni tanlang",
    buttonName: "Saqlash",
    url: "kafedra_data/add",
  };

  const tableHead = ["Tartib raqam", "Kafedra nomi", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const bodyData = kafedra;
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
            onClick={() => deleteKafedra(item._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  function deleteKafedra(id) {
    fetch(`${globalUrl}/kafedra_data/${id}`, {
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

  function fetchFakultet() {
    fetch(`${globalUrl}/Fak_data/all`, {
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setFakultet(res.data);
      })
      .catch((err) => console.log(err));
  }

  function fetchKafedra() {
    fetch(`${globalUrl}/kafedra_data/all`, {
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setKafedra(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchFakultet();
    fetchKafedra();
  }, []);

  if (type === "table") {
    content = (
      <Table
        headData={tableHead}
        renderHead={renderHead}
        bodyData={bodyData}
        renderBody={renderBody}
      />
    );
  } else if (type === "addKafedra") {
    content = (
      <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        textEditorNames2={props.textEditorNames2}
        selectName={props.selectName}
        buttomName={props.buttonName}
        hasSelect={true}
        options={fakultet?.map((i) => ({ id: i._id, name: i.title_uz }))}
        url={props.url}
      />
    );
  } else if (type === "addEmployer") {
    content = (
      <>
        <XodimForm
          categoryId={"kafedra_id"}
          categoryEndpoint={"kafedra_data/all"}
          employerEndpoint={"kafedra_hodim/add"}
        />
        <br />
        <br />
        <strong>
          _______________________________________________________________________________________________________________________________________________________
        </strong>
        <br />
        <br />
        <Yonalish />
      </>
    );
  } else {
    content = (
      <FaoliyatForm
        catogoryId="kafedra_id"
        url="kafedra_data/all"
        categoryLabel="Faoliyat Qo'shish"
      />
    );
  }
  return (
    <div className="kafedra">
      <FormHeader
        title="Kafedra"
        event1="Kafedralar jadvali"
        event2="Kafedra qo`shish"
        event3="Xodim qo`shish"
        event4="Faoliyat qo`shish"
        handleEvent1={() => setType("table")}
        handleEvent2={() => setType("addKafedra")}
        handleEvent3={() => setType("addEmployer")}
        handleEvent4={() => setType("addAction")}
      />
      {/* <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        textEditorNames2={props.textEditorNames2}
        selectName={props.selectName}
        buttomName={props.buttonName}
        hasSelect={true}
        options={fakultet?.map((i) => ({ id: i._id, name: i.title_uz }))}
        url={props.url}
      />{" "}
      <br />
      <br />
      <h1>-----------------Kafedraga Faoliyat qo`shish----------------</h1>
      <br />
      <br />
      <FaoliyatForm
        catogoryId="kafedra_id"
        url="kafedra_data/all"
        categoryLabel="Faoliyat Qo'shish"
      />
      <br />
      <br />
      <h1>-----------------Barcha kafedralar jadvali----------------</h1>
      <br />
      <br />
      <Table
        headData={tableHead}
        renderHead={renderHead}
        bodyData={bodyData}
        renderBody={renderBody}
      />
      <br />
      <br />
      <h1>-----------------Xodim qo`shish----------------</h1>
      <br />
      <br />
      <XodimForm
        categoryId={"kafedra_id"}
        categoryEndpoint={"kafedra_data/all"}
        employerEndpoint={"kafedra_hodim/add"}
      />
      <br />
      <br />
      <h1>-----------------Yonalish qo`shish----------------</h1>
      <br />
      <br />
      <Yonalish /> */}
      {content}
    </div>
  );
};

export default Kafedra;
