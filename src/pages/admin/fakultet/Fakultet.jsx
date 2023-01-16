import React, { useState } from "react";
import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";

import "./Fakultet.css";

const Fakultet = () => {
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
    url:"Fak_data/add"
  };
  
  return (
    <div>
      <FormHeader title="Fakultet" buttonName="+" />
      <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        textEditorNames2={props.textEditorNames2}
        selectName={props.selectName}
        buttomName={props.buttonName}
        hasSelect={false}
        url={props.url}
      />
    </div>
  );
};

export default Fakultet;
