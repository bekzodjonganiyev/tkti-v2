import React, { useContext, useState } from "react";

import AddForm from "../../../components/admin/add_form/AddForm";
import FormHeader from "../../../components/admin/form _header/FormHeader";

const Yangilik = () => {
  const [inputNames, setInputNams] = useState({
    nameUz: "nameUz",
    nameRu: "nameRu",
    nameEn: "nameEn",
  });
  const [textEditorNames1, setTextEditorNames1] = useState({
    nameUz: "nameUz",
    nameRu: "nameRu",
    nameEn: "nameEn",
  });
  const [textEditorNames2, setTextEditorNames2] = useState({
    nameUz: "nameUz",
    nameRu: "nameRu",
    nameEn: "nameEn",
  });
  const [selectName, setSelectName] = useState("name");
  const [buttonName, setButtonName] = useState("name");

  return (
    <div>
      <FormHeader title="Yangilik" buttonName="Yangilik Qo'shish" />
      <AddForm
        inputNames={inputNames}
        textEditorNames1={textEditorNames1}
        textEditorNames2={textEditorNames2}
        selectName={selectName}
        buttonName={buttonName}
        isNews={true}
      />
    </div>
  );
};

export default Yangilik;
