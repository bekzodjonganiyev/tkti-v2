import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/app.context";
import { baseURL } from "../../services/http";
import './style.css'
export const SillabusPage = () => {

    const {  searchedData } = useAppContext();
  return (
    <div> <div>
    <div className="container">
      {searchedData && searchedData.length ? (
        searchedData.map((i, key) => (
          <div key={key} className="result">
            <h1>{i.title}</h1>
            <span>{i.yili}</span>
            <span>{i.talim_turi}</span>
            <span>{i.talim_darajasi}</span>
            <a download={true} href={`${baseURL}/${i.photo}`}>
              Yuklab olish
            </a>
          </div>
        ))
      ) : (
        <h1>So'rovingiz b'oyicha malumotlar topilmadi</h1>
      )}
    </div>
  </div></div>
  )
}
