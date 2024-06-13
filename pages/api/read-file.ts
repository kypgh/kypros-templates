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

  const fullPath = path.join(process.cwd(), filePath);
  fs.readFile(fullPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading file" });
      return;
    }
    res.status(200).json({ content: data });
  });
}
