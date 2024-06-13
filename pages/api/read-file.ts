import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  content?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { filePath } = req.query;

  if (typeof filePath !== "string") {
    res.status(400).json({ error: "Invalid file path" });
    return;
  }

  // Normalize the path to prevent directory traversal attacks
  const normalizedPath = path
    .normalize(filePath)
    .replace(/^(\.\.(\/|\\|$))+/, "");
  const fullPath = path.join(process.cwd(), normalizedPath);

  console.log("Requested filePath:", filePath);
  console.log("Normalized path:", normalizedPath);
  console.log("Full path:", fullPath);

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    res.status(404).json({ error: "File not found" });
    return;
  }

  fs.readFile(fullPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading file" });
      return;
    }
    res.status(200).json({ content: data });
  });
}
