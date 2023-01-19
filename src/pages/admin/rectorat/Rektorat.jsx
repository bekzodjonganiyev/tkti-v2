import React, { useState, useRef, useContext } from 'react'
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "./Rektorat.css"
import FormHeader from '../../../components/admin/form_header/FormHeader'
import Button from '../../../components/admin/button/Button';

import { Context } from '../../../context';

const Rektorat = () => {
  const imageRef = useRef()
  const { globalUrl } = useContext(Context)
  const [inputValue, setrInputValue] = useState({})

  const [qisqachaUz, setQisqachaUz] = useState(EditorState.createEmpty());
  const [qisqachaRu, setQisqachaRu] = useState(EditorState.createEmpty());
  const [qisqachaEn, setQisqachaEn] = useState(EditorState.createEmpty());

  const [mehnatFaoliyatiUz, setMehnatFaoliyatiUz] = useState(EditorState.createEmpty());
  const [mehnatFaoliyatiRu, setMehnatFaoliyatiRu] = useState(EditorState.createEmpty());
  const [mehnatFaoliyatiEn, setMehnatFaoliyatiEn] = useState(EditorState.createEmpty());

  const [ilmiyYonalishUz, setIlmiyYonalishUz] = useState(EditorState.createEmpty());
  const [ilmiyYonalishRu, setIlmiyYonalishRu] = useState(EditorState.createEmpty());
  const [ilmiyYonalishEn, setIlmiyYonalishEn] = useState(EditorState.createEmpty());

  const [asosiyVazifaUz, setAsosiyVazifaUz] = useState(EditorState.createEmpty());
  const [asosiyVazifaRu, setAsosiyVazifaRu] = useState(EditorState.createEmpty());
  const [asosiyVazifaEn, setAsosiyVazifaEn] = useState(EditorState.createEmpty());

  const handleChange = (e) => {
    const {name, value} = e.target
    setrInputValue(prev => ({...prev, [name]: value}))
  }

  const convertToHtml = (raw) => {
    return JSON.stringify(draftToHtml(convertToRaw(raw.getCurrentContent())));
  };

  function postData(e) {
    e.preventDefault()

    const formData = new FormData()
    Object.keys(inputValue).forEach(i => (
      formData.append(i, inputValue[i])
    ))
    formData.append("qisqacha_uz", convertToHtml(qisqachaUz))
    formData.append("qisqacha_ru", convertToHtml(qisqachaRu))
    formData.append("qisqacha_en", convertToHtml(qisqachaEn))
    formData.append("mehnat_faoliyat_uz", convertToHtml(mehnatFaoliyatiUz))
    formData.append("mehnat_faoliyat_ru", convertToHtml(mehnatFaoliyatiRu))
    formData.append("mehnat_faoliyat_en", convertToHtml(mehnatFaoliyatiEn))
    formData.append("ilmiy_yonlaish_uz", convertToHtml(ilmiyYonalishUz))
    formData.append("ilmiy_yonlaish_ru", convertToHtml(ilmiyYonalishRu))
    formData.append("ilmiy_yonlaish_en", convertToHtml(ilmiyYonalishEn))
    formData.append("asosiy_vazifa_uz", convertToHtml(asosiyVazifaUz))
    formData.append("asosiy_vazifa_ru", convertToHtml(asosiyVazifaRu))
    formData.append("asosiy_vazifa_en", convertToHtml(asosiyVazifaEn))
    for (let i = 0; i < imageRef.current.files.length; i++) {
      formData.append("photo", imageRef.current.files[i])
    }

    fetch(`${globalUrl}/rektorat/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Token": localStorage.getItem("token")
      },
      body: formData
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  //   for (var pair of formData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  // }
  }

  return (
    <div className='rektotar'>
      <FormHeader title="Rektorat" buttonName="+"/>
      <form className="rektorat-form" onSubmit={postData}>
         {/* Ismi */}
         <div className='inputs'>
          <label htmlFor="nameUZ">
            Fio(UZ) <br />
            <input type="text" id="nameUZ" name="name_uz" onChange={handleChange}/>
          </label>

          <label htmlFor="nameRU">
            Fio(UZ) <br />
            <input type="text" id="nameRU" name="name_ru" onChange={handleChange}/>
          </label>

          <label htmlFor="nameEN">
            Fio(UZ) <br />
            <input type="text" id="nameEN" name="name_en" onChange={handleChange}/>
          </label>
        </div>

        {/* Lvozim */}
        <div className='inputs'>
          <label htmlFor="lavUZ">
            Lavozim(UZ) <br />
            <input type="text" id="lavUZ" name="job_uz" onChange={handleChange}/>
          </label>

          <label htmlFor="lavRU">
            Lavozim(RU) <br />
            <input type="text" id="lavRU" name="job_ru" onChange={handleChange}/>
          </label>

          <label htmlFor="lavEN">
            Lavozim(EN) <br />
            <input type="text" id="lavEN" name="job_en" onChange={handleChange}/>
          </label>
        </div>

        {/* Qabul vaqtlari*/}
        <div className='inputs'>
          <label htmlFor="ishJoyiUZ">
            Qabul vaqtlari(UZ) <br />
            <input type="text" id="ishJoyiUZ" name="address_uz" onChange={handleChange}/>
          </label>

          <label htmlFor="ishJoyiRU">
            Qabul vaqtlari(RU) <br />
            <input type="text" id="ishJoyiRU" name="address_ru" onChange={handleChange}/>
          </label>

          <label htmlFor="ishJoyiEN">
            Qabul vaqtlari(EN) <br />
            <input type="text" id="ishJoyiEN" name="address_en" onChange={handleChange}/>
          </label>
        </div>

        {/* Qisqacha malumotlar */}
        <div>
          <span className="textEditorName">Qisqacha Malumot(UZ)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={qisqachaUz}
            onEditorStateChange={(a) => setQisqachaUz(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Qisqacha Malumot(RU)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={qisqachaRu}
            onEditorStateChange={(a) => setQisqachaRu(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Qisqacha Malumot(EN)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={qisqachaEn}
            onEditorStateChange={(a) => setQisqachaEn(a)}
          />
        </div>

        {/* Mehnat Faoliayti */}
        <div>
          <span className="textEditorName">Mehnat Faoliayti(UZ)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={mehnatFaoliyatiUz}
            onEditorStateChange={(a) => setMehnatFaoliyatiUz(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Mehnat Faoliayti(RU)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={mehnatFaoliyatiRu}
            onEditorStateChange={(a) => setMehnatFaoliyatiRu(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Mehnat Faoliayti(EN)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={mehnatFaoliyatiEn}
            onEditorStateChange={(a) => setMehnatFaoliyatiEn(a)}
          />
        </div>

        {/* Ilmiy Yonalishlari */}
        <div>
          <span className="textEditorName">Ilmiy Yonalishlari(UZ)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={ilmiyYonalishUz}
            onEditorStateChange={(a) => setIlmiyYonalishUz(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Ilmiy Yonalishlari(RU)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={ilmiyYonalishRu}
            onEditorStateChange={(a) => setIlmiyYonalishRu(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Ilmiy Yonalishlari(EN)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={ilmiyYonalishEn}
            onEditorStateChange={(a) => setIlmiyYonalishEn(a)}
          />
        </div>

        {/* Asosiy Vazifa */}
        <div>
          <span className="textEditorName">Asosiy Vazifa(UZ)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={asosiyVazifaUz}
            onEditorStateChange={(a) => setAsosiyVazifaUz(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Asosiy Vazifa(RU)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={asosiyVazifaRu}
            onEditorStateChange={(a) => setAsosiyVazifaRu(a)}
          />
        </div>
        <div>
          <span className="textEditorName">Asosiy Vazifa(EN)</span>
          <Editor
            wrapperClassName="text-editor-wrapper"
            editorClassName="text-editor-body"
            toolbarClassName="text-editor-toolbar"
            editorState={asosiyVazifaEn}
            onEditorStateChange={(a) => setAsosiyVazifaEn(a)}
          />
        </div>

        {/* Telefon va Email */}
        <div className='tel-email inputs'>
          <label htmlFor="telNumber">
            Telefon raqami <br />
            <input type="tel" id="telNumber" name="tel" onChange={handleChange}/>
          </label>
          <label htmlFor="email">
            Email pochta <br />
            <input type="tel" id="email" name="link" onChange={handleChange}/>
          </label>
          <label htmlFor="image">
            Rasm yuklash <br />
            <input type="file" id="image" multiple ref={imageRef}/>
          </label>
        </div>
        
        <Button name='Saqlash' />
      </form>
    </div>
  )
}

export default Rektorat