import { createContext } from "react";

export const someContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = "Esse é o valor do CONTEXTO";

  return (
    <someContext.Provider value={{ contextValue }}>
      {children}
    </someContext.Provider>
  );
};
