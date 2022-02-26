import React, { useState, createContext } from "react";

//
const AppContext = createContext<GlobalContext | null>(null);

export default AppContext;

type Props = {
  children: React.ReactNode;
};

//
export const AppProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme]: [string, Function] = useState("light-theme");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
