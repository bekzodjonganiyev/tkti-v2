import React, { useState } from "react";
const Context = React.createContext();

function Provider({ children }) {
  const [names, setNames] = useState();
  // const globalUrl = "http://localhost:5000";
  const globalUrl = "https://backend.tkti.uz";


  return (
    <>
      <Context.Provider
        value={{
          globalUrl,
          names, setNames,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, Provider };
