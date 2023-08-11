import React, {useCallback, useContext, useEffect, useState} from "react";

import "./Input.css";
import { Context } from "../../../../context";


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
    <div style={{ width: '100%' }} className="input-component mb-10">
      <label htmlFor="nameUz">
        {nameUz} <br />
        <input className="form-control" type="text" id="nameUz" onInput={handChange} />
      </label>

      <label htmlFor="nameRu">
        {nameRu} <br />
        <input className="form-control" type="text" id="nameRu" onInput={handChange} />
      </label>

      <label htmlFor="nameEn">
        {nameEn} <br />
        <input className="form-control" type="text" id="nameEn" onInput={handChange} />
      </label>
    </div>
  );
};

export default Input;
