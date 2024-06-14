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
    const rootPath = process.cwd();
    const fullPath = path.join(rootPath, filePath);

    console.log("rootPath", rootPath);
    console.log("fullPath", fullPath);

    // Log directory structure for debugging
    console.log("Directory structure at rootPath:");
    console.log(fs.readdirSync(rootPath).join(", "));

    // Check if 'public' directory exists and log its contents
    const publicPath = path.join(rootPath, "public");
    if (fs.existsSync(publicPath)) {
      console.log("Directory structure at publicPath:");
      console.log(fs.readdirSync(publicPath).join(", "));
    }

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      console.log("File does not exist:", fullPath);
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
