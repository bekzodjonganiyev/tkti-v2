import React from "react";
import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";

const Bolim = () => {
  const props = {
    inputNames: {
      nameUz: "Markaz nomi Uz",
      nameRu: "Markaz nomi Ru",
      nameEn: "Markaz nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    textEditorNames2: {
      nameUz: "Markaz haqida Uz",
      nameRu: "Markaz haqida Ru",
      nameEn: "Markaz haqida En",
    },
    selectName: "select name",
    buttonName: "buttob name",
    url:"markaz_data/add"
  };
  return (
    <div>
      <FormHeader title="Markaz" buttonName="+" />
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

export default Bolim;
