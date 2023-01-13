import React, {useCallback, useContext, useEffect, useState} from "react";

import "./Input.css";

import { Context } from "../../../context";

const Input = ({ nameUz = "name", nameRu = "name", nameEn = "name" }) => {
  const {setNames} = useContext(Context)

  const [state, setState] = useState({
    nameUz: "",
    nameRu: "",
    nameEn: "",
  })
  const handChange = useCallback((e) => {
    setState((prev) => ({...prev, [e.target.id]: e.target.value}))
  }) 

  useEffect(() => {
    setNames({...state})
  }, [state])
  
  return (
    <div className="input-component">
      <label htmlFor="nameUz">
        {nameUz} <br />
        <input type="text" id="nameUz" onInput={handChange} />
      </label>

      <label htmlFor="nameRu">
        {nameRu} <br />
        <input type="text" id="nameRu" onInput={handChange} />
      </label>

      <label htmlFor="nameEn">
        {nameEn} <br />
        <input type="text" id="nameEn" onInput={handChange} />
      </label>
    </div>
  );
};

export default Input;
