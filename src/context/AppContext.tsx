'use client';
import React, { useState, createContext } from 'react';

interface GlobalContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const AppContext = createContext<GlobalContext | null>(null);

export default AppContext;

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('light-theme');

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
