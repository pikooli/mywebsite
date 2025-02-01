'use client';
import React, { useState, createContext, useEffect } from 'react';
import { DARK_THEME, LIGHT_THEME } from '@/constants';

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
  const [theme, setTheme] = useState(LIGHT_THEME);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setTheme(isDarkMode ? DARK_THEME : LIGHT_THEME);
  }, []);

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
