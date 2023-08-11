import React, { useState } from "react";
const Context = React.createContext();

function Provider({ children }) {
  const [names, setNames] = useState();
  const [ refresh, setRefresh ] = useState(false)
  const globalUrl = "https://backend.tkti.uz";

  return (
    <>
      <Context.Provider
        value={{
          globalUrl,
          names, setNames,
          refresh, setRefresh
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, Provider };
