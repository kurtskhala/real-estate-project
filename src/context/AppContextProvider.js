import React, { createContext, useContext, useReducer } from "react";
import { appReducer, initialState } from "./appReducer";

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <appContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }

  throw new Error("app context error");
};

export default AppContextProvider;
