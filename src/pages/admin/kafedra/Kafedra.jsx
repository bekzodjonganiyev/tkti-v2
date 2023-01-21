import React, { useContext, useEffect, useState } from "react";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";


import { Context } from "../../../context";

const Kafedra = () => {
  const {globalUrl} = useContext(Context)
  const [fakultet, setFakultet] = useState();
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

  useEffect(() => {
    async function fetchFakultet() {
      fetch(`${globalUrl}//Fak_data/all`, {
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          setFakultet(res.data);
        })
        .catch((err) => console.log(err));
    }
    fetchFakultet();
  }, []);
  return (
    <div>
      <FormHeader title="Kafedra" buttonName="Kafedra Qo'shish" />
      <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        textEditorNames2={props.textEditorNames2}
        selectName={props.selectName}
        buttomName={props.buttonName}
        hasSelect={true}
        options={fakultet?.map((i) => ({ id: i._id, name: i.title_uz }))}
        url={props.url}
      />{" "}
      <br /><br />
      <h1>-----------------Kafedraga Faoliyat qo`shish------------------</h1>
      <br /><br />
      <FaoliyatForm catogoryId="kafedra_id" url="kafedra_data/all" categoryLabel="Faoliyat Qo'shish"/>

    </div>
  );
};

export default Kafedra;
