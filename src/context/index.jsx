import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../services/http";

const Context = createContext();

function Provider({ children }) {
  const navigate = useNavigate()
  const [lang, setLang] = useState(localStorage.getItem("langText")?.toLowerCase() || "uz");
  const [searchedData, setSearchedData] = useState([]);
  const [paramsId, setParamsId] = useState(JSON.parse(localStorage.getItem("paramsId")) || {});


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

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", JSON.stringify(lang));
    }
  }, [lang]);

  useEffect(() => {
    if (paramsId) {
      console.log("first")
      localStorage.setItem("paramsId", JSON.stringify(paramsId));
    } else {
      navigate("/")
    }
  }, [paramsId]);

  const DataGetter = (setMyState, url) =>{
    fetch(`${baseURL}/${url}`, {
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
    fetch(`${baseURL}/${url}`, {
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
    fetch(`${baseURL}/${url}`, {
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
          DataGetter,
          DataDeleter,
          DataPoster,
          time,
          textSytles,
          lang, setLang,
          searchedData, setSearchedData,
          paramsId, setParamsId,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, Provider };
