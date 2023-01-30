import React, { useContext, useEffect, useState } from "react";

import "./Fakultet.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import Table from "../../../components/admin/table/Table";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";
import EditXodim from "../../../components/admin/edit_xodim/EditXodim";

import { Context } from "../../../context";

const Fakultet = () => {
  const { globalUrl } = useContext(Context);
  const [fakultetData, setFakultetData] = useState();
  const [faklutetEmployers, setFaklutetEmployers] = useState();
  const [onEdit, setOnEdit] = useState({});
  const [type, setType] = useState("table");
  const props = {
    inputNames: {
      nameUz: "fakultet nomi Uz",
      nameRu: "fakultet nomi Ru",
      nameEn: "fakultet nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    textEditorNames2: {
      nameUz: "fakultet haqida Uz",
      nameRu: "fakultet haqida Ru",
      nameEn: "fakultet haqida En",
    },
    selectName: "select name",
    buttonName: "buttob name",
    url: "Fak_data/add",
  };
  let content = null;

  // FOR DATA
  const analyseNameTableHead = ["Tartib raqam", "Fakultet nomi", "Amallar"];
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
            onClick={() => deleteFakultet(item._id)}
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
            endpoint={`Fak_hodim/${item._id}`}
            setOnEdit={setOnEdit}
            position={"fakultet_id"}
            optionsEndpoint={"Fak_data/all"}
            key={index}
          />
        ) : (
          <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
            <td>{index + 1}</td>
            <td>{item.name_uz}</td>
            <td>{test(item.fakultet_id)}</td>
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
                onClick={() => deleteFakultetEmployer(item._id)}
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
    fetch(`${globalUrl}/Fak_data/all`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFakultetData(res.data);
      })
      .catch((err) => console.log(err));

    fetch(`${globalUrl}/Fak_hodim/all`, {
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFaklutetEmployers(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteFakultet(id) {
    fetch(`${globalUrl}/Fak_data/${id}`, {
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

  function deleteFakultetEmployer(id) {
    fetch(`${globalUrl}/Fak_hodim/${id}`, {
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
    return fakultetData?.find((i) => i._id === id)?.title_uz;
  }

  useEffect(() => {
    getData();
  }, [type]);

  if (type === "table") {
    content = (
      <>
        {fakultetData && (
          <Table
            headData={analyseNameTableHead}
            renderHead={renderHead}
            bodyData={fakultetData}
            renderBody={renderBody}
            limit={10}
          />
        )}
        <br />
        <br />
        <p style={{ fontSize: "30px", textAlign: "center" }}>Xodimlar</p>
        {faklutetEmployers && (
          <Table
            headData={employerTableHead}
            renderHead={renderemployerTableHead}
            bodyData={faklutetEmployers}
            renderBody={renderEmployerTableBody}
            limit={10}
          />
        )}
      </>
    );
  } else if (type === "addFaculty") {
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
        categoryId={"fakultet_id"}
        categoryEndpoint={"Fak_data/all"}
        employerEndpoint={"Fak_hodim/add"}
      />
    );
  } else {
    content = (
      <FaoliyatForm
        catogoryId="fakultet_id"
        url="Fak_data/all"
        categoryLabel="Faoliyat Qo'shish"
      />
    );
  }

  return (
    <>
      <FormHeader
        title="Fakultet"
        event1="Fakultetlar jadvali"
        event2="Fakultet qo`shish"
        event3="Xodim qo`shish"
        event4="Faoliyat qo`shish"
        handleEvent1={() => setType("table")}
        handleEvent2={() => setType("addFaculty")}
        handleEvent3={() => setType("addEmployer")}
        handleEvent4={() => setType("addAction")}
      />
      {content}
    </>
  );
};

export default Fakultet;
