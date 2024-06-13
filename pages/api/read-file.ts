// pages/api/read-file.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  content?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { filePath } = req.query;

  if (typeof filePath !== "string") {
    res.status(400).json({ error: "Invalid file path" });
    return;
  }

  try {
    // Construct the full path
    const rootPath = process.cwd(); // This might need adjustment in a serverless environment like Vercel
    const fullPath = path.join(rootPath, filePath as string);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      res.status(404).json({ error: "File not found" });
      return;
    }

    // Read file contents
    const fileContent = await fs.promises.readFile(fullPath, "utf-8");

    res.status(200).json({ content: fileContent });
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Error reading file" });
  }
}
