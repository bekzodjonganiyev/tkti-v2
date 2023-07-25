import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { DeleteIcon } from "../../assets/icons";
import { useParams } from "react-router-dom";

export const LidershipEditForm = ({ childById, parents, putChild, loading }) => {
  const { id } = useParams()
  const [editorUz, setEditorUz] = useState("");
  const [editorRu, setEditorRu] = useState("");
  const [editorEn, setEditorEn] = useState("");
  
  const [editorMehnatUz, setEditorMehnatUz] = useState("");
  const [editorMehnatRu, setEditorMehnatRu] = useState("");
  const [editorMehnatEn, setEditorMehnatEn] = useState("");

  const [ilmiyYonalishUz, setIlmiyYonalishUz] = useState("");
  const [ilmiyYonalishRu, setIlmiyYonalishRu] = useState("");
  const [ilmiyYonalishEn, setIlmiyYonalishEn] = useState("");

  const [asosiyVazifaUz, setAsosiyVazifaUz] = useState("");
  const [asosiyVazifaRu, setAsosiyVazifaRu] = useState("");
  const [asosiyVazifaEn, setAsosiyVazifaEn] = useState("");

  const [state, setState] = useState([]);

  const filterData = parents?.filter(item => item?._id === id)

  console.log(filterData[0]);

  const editorInit = {
    min_height: 400,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste wordcount",
      "codesample code",
      "autoresize",
    ],
    codesample_languages: [
      { text: "HTML/XML", value: "markup" },
      { text: "JavaScript", value: "javascript" },
      { text: "CSS", value: "css" },
      { text: "PHP", value: "php" },
    ],
    toolbar:
      "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample code",
  };

  const submit = (e) => {
    e.preventDefault();

    const fmData = new FormData();
    fmData.append("name_uz", e.target.name_uz.value);
    fmData.append("name_ru", e.target.name_ru.value);
    fmData.append("name_en", e.target.name_en.value);
    fmData.append("job_uz", e.target.job_uz.value);
    fmData.append("job_ru", e.target.job_ru.value);
    fmData.append("job_en", e.target.job_en.value);
    fmData.append("tel", e.target.tel.value);
    fmData.append("qisqacha_uz", editorUz);
    fmData.append("qisqacha_ru", editorRu);
    fmData.append("qisqacha_en", editorEn);
    fmData.append("mehnat_faoliyat_uz", editorMehnatUz);
    fmData.append("mehnat_faoliyat_ru", editorMehnatRu);
    fmData.append("mehnat_faoliyat_en", editorMehnatEn);
    fmData.append("ilmiy_yonlaish_uz", ilmiyYonalishUz);
    fmData.append("ilmiy_yonlaish_ru", ilmiyYonalishRu);
    fmData.append("ilmiy_yonlaish_en", ilmiyYonalishEn);
    fmData.append("asosiy_vazifa_uz", asosiyVazifaUz);
    fmData.append("asosiy_vazifa_ru", asosiyVazifaRu);
    fmData.append("asosiy_vazifa_en", asosiyVazifaEn);

    putChild(fmData);
  };



  useEffect(() => {
    if (filterData?.length) {
      setEditorUz(filterData[0]?.qisqacha_uz);
      setEditorRu(filterData[0]?.qisqacha_ru);
      setEditorEn(filterData[0]?.qisqacha_en);

      setEditorMehnatUz(filterData[0]?.mehnat_faoliyat_uz);
      setEditorMehnatRu(filterData[0]?.mehnat_faoliyat_ru);
      setEditorMehnatEn(filterData[0]?.mehnat_faoliyat_en);

      setIlmiyYonalishUz(filterData[0]?.ilmiy_yonlaish_uz);
      setIlmiyYonalishRu(filterData[0]?.ilmiy_yonlaish_ru);
      setIlmiyYonalishEn(filterData[0]?.ilmiy_yonlaish_en);

      setAsosiyVazifaUz(filterData[0]?.asosiy_vazifa_uz);
      setAsosiyVazifaRu(filterData[0]?.asosiy_vazifa_ru);
      setAsosiyVazifaEn(filterData[0]?.asosiy_vazifa_en);
    }
  }, [filterData]);


  const func = (e) => {
    e.preventDefault();
    state.forEach((a) =>
      console.log(
        `${a}) ${e.target[`savol_uz${a}`].value} - ${
          e.target[`javob_uz${a}`].value
        }`
      )
    );
  };

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          <form onSubmit={submit} className="pb-10">
            <div className="flex flex-col gap-1 mb-5">

              <label htmlFor="name_uz">F.I.Sh (UZ)</label>
              <input
                type="text"
                id="name_uz"
                name="name_uz"
                defaultValue={filterData[0]?.name_uz}
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="title_ru">F.I.Sh (RU)</label>
              <input
                type="text"
                id="name_ru"
                name="name_ru"
                defaultValue={filterData[0]?.name_ru}
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="title_en">F.I.Sh (EN)</label>
              <input
                type="text"
                id="name_en"
                name="name_en"
                defaultValue={filterData[0]?.name_en}
              />
            </div>

           
            
            {/* =-------------------- JOB --------------------------= */}
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="job_uz">Lavozim (UZ)</label>
              <input
                type="text"
                id="job_uz"
                name="job_uz"
                defaultValue={filterData[0]?.job_uz}
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="job_ru">Lavozim (RU)</label>
              <input
                type="text"
                id="job_ru"
                name="job_ru"
                defaultValue={filterData[0]?.job_ru}
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="job_en">Lavozim (EN)</label>
              <input
                type="text"
                id="job_en"
                name="job_en"
                defaultValue={filterData[0]?.job_en}
              />
            </div>


             {/* =------------- TEL ------------------= */}
             <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="tel">Tel</label>
              <input
                type="text"
                id="tel"
                name="tel"
                defaultValue={filterData[0]?.tel}
              />
            </div>



            {/* =---------------- QISQACHA -------------------------= */}
            <div className="mt-10">
              <span>Qisqacha ma'lumot (UZ)</span>
              <Editor
                init={editorInit}
                value={editorUz}
                onEditorChange={(e) => setEditorUz(e)}
              />
            </div>
            <div className="mt-10">
              <span>Qisqacha ma'lumot (RU)</span>
              <Editor
                init={editorInit}
                value={editorRu}
                onEditorChange={(e) => setEditorRu(e)}
              />
            </div>
            <div className="mt-10">
              <span>Qisqacha ma'lumot (EN)</span>
              <Editor
                init={editorInit}
                value={editorEn}
                onEditorChange={(e) => setEditorEn(e)}
              />
            </div>


            {/* =---------------- MEHNAT FAOLIYAT -------------------------= */}
            <div className="mt-10">
              <span>Mehnat faoliyat (UZ)</span>
              <Editor
                init={editorInit}
                value={editorMehnatUz}
                onEditorChange={(e) => setEditorMehnatUz(e)}
              />
            </div>
            <div className="mt-10">
              <span>Mehnat faoliyat (RU)</span>
              <Editor
                init={editorInit}
                value={editorMehnatRu}
                onEditorChange={(e) => setEditorMehnatRu(e)}
              />
            </div>
            <div className="mt-10">
              <span>Mehnat faoliyat (EN)</span>
              <Editor
                init={editorInit}
                value={editorMehnatEn}
                onEditorChange={(e) => setEditorMehnatEn(e)}
              />
            </div>


            {/* =---------------- ILMIY YO'NALISH -------------------------= */}
            <div className="mt-10">
              <span>Ilmiy yo'nalish (UZ)</span>
              <Editor
                init={editorInit}
                value={ilmiyYonalishUz}
                onEditorChange={(e) => setIlmiyYonalishUz(e)}
              />
            </div>
            <div className="mt-10">
              <span>Ilmiy yo'nalish (RU)</span>
              <Editor
                init={editorInit}
                value={ilmiyYonalishRu}
                onEditorChange={(e) => setIlmiyYonalishRu(e)}
              />
            </div>
            <div className="mt-10">
              <span>Ilmiy yo'nalish (EN)</span>
              <Editor
                init={editorInit}
                value={ilmiyYonalishEn}
                onEditorChange={(e) => setIlmiyYonalishEn(e)}
              />
            </div>

            {/* =---------------- ASOSIY VAZIFA -------------------------= */}
            <div className="mt-10">
              <span>Asosiy vazifa (UZ)</span>
              <Editor
                init={editorInit}
                value={asosiyVazifaUz}
                onEditorChange={(e) => setAsosiyVazifaUz(e)}
              />
            </div>
            <div className="mt-10">
              <span>Asosiy vazifa (RU)</span>
              <Editor
                init={editorInit}
                value={asosiyVazifaRu}
                onEditorChange={(e) => setAsosiyVazifaRu(e)}
              />
            </div>
            <div className="mt-10">
              <span>Asosiy vazifa (EN)</span>
              <Editor
                init={editorInit}
                value={asosiyVazifaEn}
                onEditorChange={(e) => setAsosiyVazifaEn(e)}
              />
            </div>


{/* 
            <div className="my-10">
              <label htmlFor="nameId"></label>
              <select
                name="nameId"
                id="nameId"
                defaultValue={filterData[0]?.nameId}
              >
                {parents.map((item) => (
                  <option value={item._id}>{item.title_uz}</option>
                ))}
              </select>
            </div> */}

            {/* <div className="mb-10">
              {state.map((item) => (
                <div
                  className="flex justify-between items-center gap-10 mb-10"
                  key={item}
                >
                  <div className="flex flex-col gap-2 w-1/3">
                    <input
                      placeholder="Savol uz"
                      className="form-control"
                      type="text"
                      name={`savol_uz${item}`}
                    />
                    <textarea
                      placeholder="Javob uz"
                      className="form-control"
                      name={`javob_uz${item}`}
                      cols="5"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <input
                      placeholder="Savol ru"
                      className="form-control"
                      type="text"
                      name={`savol_ru${item}`}
                    />
                    <textarea
                      placeholder="Javob ru"
                      className="form-control"
                      name={`javob_ru${item}`}
                      cols="5"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <input
                      placeholder="Savol en"
                      className="form-control"
                      type="text"
                      name={`savol_en${item}`}
                    />
                    <textarea
                      placeholder="Javob en"
                      className="form-control"
                      name={`javob_en${item}`}
                      cols="5"
                      rows="5"
                    ></textarea>
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      const arr = state.filter((a) => a !== item);
                      setState(arr);
                    }}
                  >
                    <DeleteIcon />
                  </span>
                </div>
              ))}
              <div
                className="py-2 px-6 bg-red-800 text-white inline mt-10 cursor-pointer"
                onClick={() => setState([...state, state.length + 1])}
              >
                Qo'shish
              </div>
            </div> */}

            <button className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold">
              Saqlash
            </button>
          </form>
        </>
      )}
    </div>
  );
};
