import { createContext, useContext, useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import i18next from "i18next";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [searchedData, setSearchedData] = useState([]);
  const [idForFetch, setIdForFetch] = useState(
    localStorage.getItem("fetcherId") || ""
  );

  // TODO - fetchrId bu getById qilish uchun dataning id si, uni localstorageda saqlash yaxshi ish emas
  useEffect(() => {
    if (idForFetch) {
      localStorage.setItem("fetcherId", idForFetch);
    } else {
      localStorage.removeItem("token");
    }
  }, [idForFetch]);

  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === "/") window.location.href = "/uz"
    let pathnameLang = "uz";
    if (pathname.split("/")[1] === "uz") pathnameLang = "uz";
    if (pathname.split("/")[1] === "ru") pathnameLang = "ru";
    if (pathname.split("/")[1] === "en") pathnameLang = "en";
    i18next.changeLanguage(pathnameLang);
  }, [])
''
  return (
    <AppContext.Provider value={{ idForFetch, setIdForFetch,searchedData, setSearchedData, }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
