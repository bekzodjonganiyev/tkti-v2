import { useContext, useState } from "react";

import TextEditor from "../text_editor/TextEditor";

import "./AddForm.css";

import Input from "../../../components/admin/input/Input";
import SelectType from "../../../components/admin/select_type/SelectType";
import Button from "../button/Button";

import { Context } from "../../../context";

const AddForm = (props) => {
  const { names, selectValue, globalUrl, convertToHtml } = useContext(Context);
  const {
    inputNames,
    selectName,
    buttonName,
    options,
    hasSelect,
    url,
  } = props;

  const [editorHaqida, setEditorHaqida] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const [editorMaqsad, setEditorMaqsad] = useState({
    uz: "",
    ru: "",
    en: "",
  });
  
 


  const obj = {
    title_uz: names?.nameUz,
    title_ru: names?.nameRu,
    title_en: names?.nameEn,
    haqida_uz: editorHaqida.uz,
    haqida_ru: editorHaqida.ru,
    haqida_en: editorHaqida.en,
    maqsad_uz: editorMaqsad.uz,
    maqsad_en: editorMaqsad.uz,
    maqsad_ru: editorMaqsad.uz,
  };

  const body = hasSelect
    ? JSON.stringify({ ...obj, fakultet_id: selectValue })
    : JSON.stringify(obj);

  function postData() {
    fetch(`${globalUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Token": localStorage.getItem("token"),
      },
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message  + " ❌");
        } else {
          alert(res.message);
          window.location.reload(true);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <form className="main-texteditor-form">
      <Input
        nameUz={inputNames.nameUz}
        nameRu={inputNames.nameRu}
        nameEn={inputNames.nameEn}
      />
      <hr />
      <TextEditor
          title={{
            uz: " haqida (UZ)",
            ru: " haqida(RU)",
            en: " haqida(EN)",
          }}
          // name={{ uz: "ebody_uz", ru: "ebody_ru", en: "ebody_en" }}
          value={{
            uz: editorHaqida.uz,
            ru: editorHaqida.ru,
            en: editorHaqida.en,
          }}
          handleValue={{
            uz: (e) => setEditorHaqida({ ...editorHaqida, uz: e }),
            ru: (e) => setEditorHaqida({ ...editorHaqida, ru: e }),
            en: (e) => setEditorHaqida({ ...editorHaqida, en: e }),
          }}
        />
      
      <hr />


      <TextEditor
          title={{
            uz: "maqsad va vazifasi (UZ)",
            ru: "maqsad va vazifasi (RU)",
            en: "maqsad va vazifasi (EN)",
          }}
          name={{ uz: "ebody_uz", ru: "ebody_ru", en: "ebody_en" }}
          value={{
            uz: editorMaqsad.uz,
            ru: editorMaqsad.ru,
            en: editorMaqsad.en,
          }}
          handleValue={{
            uz: (e) => setEditorMaqsad({ ...editorMaqsad, uz: e }),
            ru: (e) => setEditorMaqsad({ ...editorMaqsad, ru: e }),
            en: (e) => setEditorMaqsad({ ...editorMaqsad, en: e }),
          }}
        />

 

      {hasSelect && (
        <>
          <SelectType title={selectName} options={options} />
          <hr />
        </>
      )}

      <Button
        name={buttonName}
        onClick={(e) => {
          e.preventDefault();
          postData();
        }}
        />
        
    </form>
  );
};

export default AddForm;
