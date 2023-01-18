import React from "react";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";

const Elon = () => {
  const props = {
    inputNames: {
      nameUz: "Yangilik nomi Uz",
      nameRu: "Yangilik nomi Ru",
      nameEn: "Yangilik nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    buttonName: "Saqlash",
    url: "elon/add",
  };
  return (
    <div>
      <FormHeader title="Elon" buttonName="+" />
      <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        buttomName={props.buttonName}
        hasSelect={false}
        isNews={true}
        url={props.url}
      />{" "}
    </div>
  );
};

export default Elon;
