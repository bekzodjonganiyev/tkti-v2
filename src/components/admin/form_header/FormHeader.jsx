import React from "react";

import "./FormHeader.css";

const FormHeader = ({ title = "sahifa nomi", buttonName = "Button name",  }) => {
  return (
    <div className="form-header">
      <h1>{title}</h1>
      <div className="">
        <button>{buttonName}</button>
        <button>{buttonName}</button>
        <button>{buttonName}</button>
      </div>
    </div>
  );
};

export default FormHeader;
