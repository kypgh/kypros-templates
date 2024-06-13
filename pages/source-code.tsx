import React, { useState, useEffect } from "react";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useSearchParams } from "next/navigation";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

interface FileViewerProps {
  filePath: string;
}

const FileViewer: React.FC<FileViewerProps> = () => {
  const params = useSearchParams();

  const [fileContent, setFileContent] = useState<string>("");

  useEffect(() => {
    const filePath = params.get("filePath");
    if (!filePath) {
      return;
    }
    const fetchFileContent = async () => {
      try {
        const response = await fetch(`/api/read-file?filePath=${filePath}`);
        const data = await response.json();
        if (data.content) {
          setFileContent(data.content);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error fetching file content:", error);
      }
    };

    fetchFileContent();
  }, [params]);

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {fileContent || "Nothing here... 🤷‍♂️"}
    </SyntaxHighlighter>
  );
};

export default FileViewer;
