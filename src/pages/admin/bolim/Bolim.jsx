import { useContext, useState, useEffect, useRef } from "react";

import "./Bolim.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";
import EditXodim from "../../../components/admin/edit_xodim/EditXodim";
import Table from "../../../components/admin/table/Table";

import { Context } from "../../../context";

const Bolim = () => {
  const { globalUrl } = useContext(Context);
  const [type, setType] = useState("table");
  const [bolimData, setBolimData] = useState();
  const [bolimXodim, setBolimXodim] = useState();
  const [onEdit, setOnEdit] = useState({});
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
  const renderXodimBody = (item, index) => {
    return (
      <>
        {onEdit.open && onEdit.id === item._id ? (
          <EditXodim
            xodim={item}
            endpoint={`bm_hodim/${item._id}`}
            setOnEdit={setOnEdit}
            position={"bolim_id"}
            optionsEndpoint={"bm_data/all"}
          />
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

  async function getData() {
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

  useEffect(() => {
    getData();
  }, []);

  if (type === "table") {
    content = (
      <>
        {bolimData && (
          <Table
            headData={analyseNameTableHead}
            renderHead={renderHead}
            bodyData={bolimData}
            renderBody={renderBody}
            limit={10}
          />
        )}
        <br />
        <br />
        <p style={{ fontSize: "30px", textAlign: "center" }}>Xodimlar</p>
        {bolimXodim && (
          <Table
            headData={xodimTableHead}
            renderHead={renderXodimHead}
            bodyData={bolimXodim}
            renderBody={renderXodimBody}
            limit={10}
          />
        )}
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
