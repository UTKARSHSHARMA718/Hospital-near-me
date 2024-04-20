import React, { createContext, useEffect, useState } from "react";
import { USER_CREDENTIAL } from "../constants/const";
import { jwtDecode } from "jwt-decode";

export const GlobalContext = createContext();

const initialState = {
  user: null,
};

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState);

  useEffect(() => {
    const userToken = localStorage?.getItem(USER_CREDENTIAL);
    if (userToken) {
      const userData = jwtDecode(userToken);
      setGlobalState((prev) => {
        return {
          ...prev,
          user: userData,
        };
      });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
