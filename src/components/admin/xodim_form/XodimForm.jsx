import React, { useCallback, useContext, useState } from "react";

import "./XodimForm.css";

import Button from "../../../components/admin/button/Button";

import { Context } from "../../../context";

const XodimForm = (props) => {
  const {
    nameLb,
    jobLb,
    telLabel,
    photoLabel,
    emailLabel,

    isSelect,
    selectLabel,
    options,

    isRectorat,
    //Rectorating propslari

    isFamousStudent,
    //mashxur studentning propslari
  } = props;

  const [inputValue, setInputValue] = useState();

  const handleChange = useCallback((e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  });

  console.log(inputValue);

  return (
    <form>
      {/* NAME */}
      <label htmlFor="nameUz">
        {nameLb.uz} <br />
        <input type="text" id="nameUz" onChange={handleChange} />
      </label>
      <label htmlFor="nameRu">
        {nameLb.ru} <br />
        <input type="text" id="nameRu" onChange={handleChange} />
      </label>
      <label htmlFor="nameEn">
        {nameLb.en} <br />
        <input type="text" id="nameEn" onChange={handleChange} />
      </label>

      {/* JOB */}
      <label htmlFor="jobUz">
        {jobLb.uz} <br />
        <input type="text" id="jobUz" onChange={handleChange} />
      </label>
      <label htmlFor="jobRu">
        {jobLb.ru} <br />
        <input type="text" id="jobRu" onChange={handleChange} />
      </label>
      <label htmlFor="jobEn">
        {jobLb.en} <br />
        <input type="text" id="jobEn" onChange={handleChange} />
      </label>

      {isFamousStudent && (
        <>
          {/* LOCATION OF JOB */}
          <label htmlFor="nameUz">
            {nameLb.uz} <br />
            <input type="text" id="nameUz" onChange={handleChange} />
          </label>
          <label htmlFor="nameRu">
            {nameLb.ru} <br />
            <input type="text" id="nameRu" onChange={handleChange} />
          </label>
          <label htmlFor="nameEn">
            {nameLb.en} <br />
            <input type="text" id="nameEn" onChange={handleChange} />
          </label>

          {/* KAFEDRA */}
          {/* FINISHED YEAR */}
        </>
      )}

      {isRectorat && (
        <>
          {/* ADDRESS */}
          {/* SHORTS */}
          {/* ACTIVITY OF LABOR */}
          {/* SCIENTIFIC DIRECTION */}
          {/* MAIN TASK */}
        </>
      )}

      {/* TEL NUMBER */}
      <label htmlFor="tel">
        Xodim telefon raqami <br />
        <input type="tel" id="tel" onChange={handleChange} />
      </label>

      {/* EMAIL OR CONTACT LINK */}
      <label htmlFor="email">
        Xodim emaili <br />
        <input type="email" id="email" onChange={handleChange} />
      </label>

      {isSelect && (
        <>
          {/* SELECT ...  */}
          <div>
            <span>Selectni title li</span>
            <select>
              <option value="">Xodim qayerda ishlaydi</option>
              {/* {
                    options.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                } */}
            </select>
          </div>
        </>
      )}

      {/* IMG */}
      <label htmlFor="photo">
        Xodim rasmi <br />
        <input type="file" id="photo" />
      </label>
      <Button
        name="Xodimni qo'shish"
        onClick={(e) => {
          e.preventDefault();
          console.log();
        }}
      />
    </form>
  );
};

export default XodimForm;
