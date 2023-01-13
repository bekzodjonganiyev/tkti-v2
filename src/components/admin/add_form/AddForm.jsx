import React, { useContext } from "react";

import "./AddForm.css";

import Input from "../../../components/admin/input/Input";
import TextEditor from "../../../components/admin/text_editor/TextEditor";
import SelectType from "../../../components/admin/select_type/SelectType";
import Button from "../button/Button";

import { Context } from "../../../context";

const AddForm = (props) => {
  const {
    inputNames,
    textEditorNames1,
    textEditorNames2,
    selectName,
    buttonName,
    isNews,
    options
  } = props;

  const data = useContext(Context)

  return (
    <form className="main-texteditor-form">
      <Input
        nameUz={inputNames.nameUz}
        nameRu={inputNames.nameRu}
        nameEn={inputNames.nameEn}
      />
      <hr />
      <TextEditor
        nameUz={textEditorNames1.nameUz}
        nameRu={textEditorNames1.nameRu}
        nameEn={textEditorNames1.nameEn}
      />
      <hr />
      {!isNews && (
        <>
          <TextEditor
            nameUz={textEditorNames2.nameUz}
            nameRu={textEditorNames2.nameRu}
            nameEn={textEditorNames2.nameEn}
          />
          <hr />
        </>
      )}

      {!isNews && (
        <>
          <SelectType title={selectName} options={options}/>
          <hr />
        </>
      )}

      <Button
        name={buttonName}
        onClick={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      />
    </form>
  );
};

export default AddForm;
