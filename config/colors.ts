import { DefaultTheme } from "styled-components";

type Colors = {
  light: DefaultTheme;
  dark: DefaultTheme;
  [key: string]: DefaultTheme;
};

// when adding a new color, make sure to add it to the DefaultTheme interface in styled.d.ts

const colors: Colors = {
  dark: {
    background: "#121212",
    middleground: "#181818",
    primary: "#404040",
    secondary: "#282828",
    textPrimary: "#ffffff",
    textSecondary: "#b3b3b3",
  },
  light: {
    background: "#f5f5f5",
    middleground: "#e0e0e0",
    primary: "#ffffff",
    secondary: "#f0f0f0",
    textPrimary: "#000000",
    textSecondary: "#4d4d4d",
  },
};

export default colors;
