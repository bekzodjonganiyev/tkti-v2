import React, { useState, useEffect } from "react";
import draftToHtml from "draftjs-to-html";
import {convertToRaw, ContentState, convertFromHTML} from "draft-js"
import { useNavigate } from "react-router-dom";

const Context = React.createContext();

function Provider({ children }) {
  const navigate = useNavigate()
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem("lang")) || "uz");
  const [refresh, setRefresh] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [names, setNames] = useState();
  const [selectValue, setSelectValue] = useState();
  const [editorValue, setEditorValue] = useState();
  const globalUrl = "http://localhost:5000";
  // const globalUrl = "https://backend.tkti.uz";


  const time = (arg) => {
    const date = new Date(arg);
    const kun = String(date.getDate()).padStart(2, 0);
    const oy = String(date.getMonth() + 1).padStart(2, 0);
    const soat = String(date.getHours()).padStart(2,0);
    const minut = String(date.getMinutes()).padStart(2.0);
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

  const convertToHtml = (raw) => {
    return draftToHtml(convertToRaw(raw.getCurrentContent()));
  }

  const convertToEntityMap = (raw) => {
    const contentBlock = convertFromHTML(raw);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
      contentBlock.entityMap
    );
    return contentState;
  }

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", JSON.stringify(lang));
    }
  }, [lang]);

  const DataGetter = (setMyState, url) =>{
    fetch(`${globalUrl}/${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.success && setMyState({ data: data.data, isFetched: true })
      )
      .catch(() => setMyState({ error: true }));
  }

  function DataDeleter(url) {
    fetch(`${globalUrl}/${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.status === 401 || res.status === 498){
          localStorage.removeItem('token');
          navigate('/login')
        }
        if (!res.success) {
          alert(res.message + "❌");
        } else {
          alert(res.message + '👏');
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function DataPoster(url, body){
    fetch(`${globalUrl}/${url}`, {
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
      },
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.status === 401 || res.status === 498){
          localStorage.removeItem('token');
          navigate('/login')
        }
        if (!res.success) {
          alert(res.message + "❌");
        } else {
          alert(res.message);
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Context.Provider
        value={{
          globalUrl,
          DataGetter,
          DataDeleter,
          DataPoster,
          time,
          textSytles,
          convertToHtml,
          convertToEntityMap,
          names, setNames,
          editorValue, setEditorValue,
          refresh, setRefresh,
          lang, setLang,
          searchedData, setSearchedData,
          selectValue, setSelectValue,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, Provider };
