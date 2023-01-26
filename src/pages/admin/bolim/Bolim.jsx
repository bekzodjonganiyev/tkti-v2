import { useContext, useState, useEffect } from "react";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";
import Table from "../../../components/admin/table/Table";

import { Context } from "../../../context";

const Bolim = () => {
  const { globalUrl } = useContext(Context);
  const [type, setType] = useState("table");
  const [bolimData, setBolimData] = useState();
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


  useEffect(() => {
    getData();
  }, [type]);

  if (type === "table") {
    content = (
      <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={bodyData}
        renderBody={renderBody}
      />
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
