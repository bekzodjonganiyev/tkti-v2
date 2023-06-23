import { createContext, useContext, useEffect, useState } from "react";

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

  return (
    <AppContext.Provider value={{ idForFetch, setIdForFetch,searchedData, setSearchedData, }}>
        
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
