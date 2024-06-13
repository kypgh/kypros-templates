import { useTheme } from "@/utils/hooks/useTheme";
import { Prism } from "react-syntax-highlighter";
import {
  coldarkCold,
  atomDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

interface SyntaxHighlighterProps {
  children: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children }) => {
  const { themeName } = useTheme();
  const theme = themeName === "dark" ? atomDark : coldarkCold;
  return (
    <Prism language="javascript" style={theme}>
      {children}
    </Prism>
  );
};

export default SyntaxHighlighter;
