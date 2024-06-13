import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface SyntaxHighlighter extends SyntaxHighlighterProps {
  children: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  children,
  ...rest
}) => {
  return (
    <Prism
      {...rest}
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        borderRadius: "7px",
      }}
    >
      {children}
    </Prism>
  );
};

export default SyntaxHighlighter;
