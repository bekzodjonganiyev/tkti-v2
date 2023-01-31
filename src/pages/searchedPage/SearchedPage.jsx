import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./searchedPage.css";


import { Context } from "../../context";

const Result = () => {
  const navigate = useNavigate();

  const {  searchedData, globalUrl } = useContext(Context);
  return (
    <div>
      <div className="container">
        {searchedData && searchedData.length ? (
          searchedData.map((i, key) => (
            <div key={key} className="result">
              <h1>{i.title}</h1>
              <span>{i.yili}</span>
              <span>{i.talim_turi}</span>
              <span>{i.talim_darajasi}</span>
              <a download={true} href={`${globalUrl}/${i.photo}`}>
                Yuklab olish
              </a>
            </div>
          ))
        ) : (
          <h1>So'rovingiz b'oyicha malumotlar topilmadi</h1>
        )}
      </div>
    </div>
  );
};

export default Result;
