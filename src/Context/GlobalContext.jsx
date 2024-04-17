import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const initialState = {
  user: null,
};

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
