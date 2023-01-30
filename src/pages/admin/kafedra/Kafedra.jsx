import React, { useContext, useEffect, useState } from "react";

import "./Kafedra.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import { Yonalish } from "./Yonalish";
import Table from "../../../components/admin/table/Table";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";
import EditXodim from "../../../components/admin/edit_xodim/EditXodim";

import { Context } from "../../../context";

const Kafedra = () => {
  const { globalUrl } = useContext(Context);
  const [fakultet, setFakultet] = useState();
  const [kafedra, setKafedra] = useState();
  const [kafedraEmployers, setKafedraEmployers] = useState();
  const [onEdit, setOnEdit] = useState({});
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

  // FOR DATA
  const tableHead = ["Tartib raqam", "Kafedra nomi", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
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

  // FOR EMPLOYERS
  const employerTableHead = ["Tartib raqam", "Ismi", "Fakulteti", "Amallar"];
  const renderemployerTableHead = (item, index) => <th key={index}>{item}</th>;
  const renderEmployerTableBody = (item, index) => {
    return (
      <>
        {onEdit.open && onEdit.id === item._id ? (
          <EditXodim
            xodim={item}
            endpoint={`kafedra_hodim/${item._id}`}
            setOnEdit={setOnEdit}
            position={"kafedra_id"}
            optionsEndpoint={"kafedra_data/all"}
            key={index}
          />
        ) : (
          <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
            <td>{index + 1}</td>
            <td>{item.name_uz}</td>
            <td>{test(item.kafedra_id)}</td>
            <td>
              <button
                className="event-btn edit"
                onClick={() => {
                  setOnEdit({
                    open: true,
                    id: item._id,
                  });
                  console.log("Ochildi",item)
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="event-btn delete"
                onClick={() => deleteKafedraEmployer(item._id)}
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
    fetch(`${globalUrl}/kafedra_data/all`, {
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setKafedra(res.data);
      })
      .catch((err) => console.log(err));

    fetch(`${globalUrl}/Fak_data/all`, {
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setFakultet(res.data);
      })
      .catch((err) => console.log(err));

    fetch(`${globalUrl}/kafedra_hodim/all`, {
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setKafedraEmployers(res.data);
      })
      .catch((err) => console.log(err));
  }

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

  function deleteKafedraEmployer(id) {
    fetch(`${globalUrl}/kafedra_hodim/${id}`, {
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
    return kafedra?.find((i) => i._id === id)?.title_uz;
  }

  useEffect(() => {
    getData();
  }, []);

  if (type === "table") {
    content = (
      <>
      {kafedra && (
        <Table
          headData={tableHead}
          renderHead={renderHead}
          bodyData={kafedra}
          renderBody={renderBody}
          limit={10}
        />
      )}
      <br />
      <br />
      <p style={{ fontSize: "30px", textAlign: "center" }}>Xodimlar</p>
      {kafedraEmployers && (
        <Table
          headData={employerTableHead}
          renderHead={renderemployerTableHead}
          bodyData={kafedraEmployers}
          renderBody={renderEmployerTableBody}
          limit={10}
        />
      )}
    </>
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
      {content}
    </div>
  );
};

export default Kafedra;
