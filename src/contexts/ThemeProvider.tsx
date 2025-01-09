"use client";

import { createContext, useContext, PropsWithChildren } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
};

const theme: Theme = {
  colors: {
    primary: "#6200ea",
    secondary: "#03dac6",
    background: "#ffffff",
    text: "#000000",
  },
  fonts: {
    body: "Source Sans 3, sans-serif",
    heading: "Source Sans 3, sans-serif",
  },
};

const ThemeContext = createContext<Theme>(theme);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
