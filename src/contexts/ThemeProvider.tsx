"use client";

import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from "react";

export type Theme = {
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

type ThemeContextType = {
  theme: Theme;
  mode: "light" | "dark";
  toggleTheme: () => void;
};

const lightTheme: Theme = {
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

const darkTheme: Theme = {
  colors: {
    primary: "#bb86fc",
    secondary: "#03dac6",
    background: "#121212",
    text: "#ffffff",
  },
  fonts: lightTheme.fonts,
};

const defaultMode: "light" | "dark" = "light";
const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  mode: defaultMode,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      return defaultMode;
    }
    return defaultMode;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
