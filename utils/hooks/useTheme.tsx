import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import colors from "@/config/colors";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [_theme, _setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && _setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = _theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    _setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: _theme, toggleTheme }}>
      <StyledThemeProvider theme={colors[_theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { theme: themeName, toggleTheme } = context;

  return { theme: colors[themeName], themeName, toggleTheme };
};
