import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    background: string;
    middleground: string;
    textPrimary: string;
    textSecondary: string;
  }
}
