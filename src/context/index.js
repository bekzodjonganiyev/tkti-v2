import React, { useState } from "react";
import { useEffect } from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem("lang")) || "uz");
  const [refresh, setRefresh] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [textEditorBodyUz, setTextEditorBodyUz] = useState();
  const [textEditorBodyRu, setTextEditorBodyRu] = useState();
  const [textEditorBodyEn, setTextEditorBodyEn] = useState();
  const [names, setNames] = useState();
  const [selectValue, setSelectValue] = useState();
  const globalUrl = "http://localhost:5000";

  const time = (arg) => {
    const date = new Date(arg);
    const kun = String(date.getDate()).padStart(2, 0);
    const oy = String(date.getMonth() + 1).padStart(2, 0);
    const yil = date.getFullYear();

    return `${kun}.${oy}.${yil}`;
  };

  const textSytles = (size, weight) => {
    return {
      fontWeight: `${weight || 500}`,
      fontSize: `${size || 20}px`,
      color: "#02307D",
    };
  };

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", JSON.stringify(lang));
    }
  }, [lang]);

  return (
    <>
      <Context.Provider
        value={{
          names, setNames,
          refresh, setRefresh,
          lang, setLang,
          time, globalUrl,
          textSytles,
          searchedData, setSearchedData,
          textEditorBodyUz, setTextEditorBodyUz,
          textEditorBodyRu, setTextEditorBodyRu,
          textEditorBodyEn, setTextEditorBodyEn,
          selectValue, setSelectValue
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, Provider };