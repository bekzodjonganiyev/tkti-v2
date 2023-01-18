import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";

const Bolim = () => {
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
  return (
    <div>
      <FormHeader title="Bo'limlar" buttonName="+" />
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
