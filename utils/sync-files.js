// sync-files.js
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const copyFile = promisify(fs.copyFile);

async function syncComponentsToPublic() {
  try {
    const configPath = path.join(process.cwd(), "config/sync-config.json");
    const { filesToSync } = require(configPath);

    for (let { source, destination } of filesToSync) {
      const srcPath = path.join(process.cwd(), source);
      const destPath = path.join(process.cwd(), destination);

      console.log(`Syncing ${srcPath} to ${destPath}`);
      await copyFile(srcPath, destPath);
    }

    console.log("Components synced to public folder successfully!");
  } catch (error) {
    console.error("Error syncing components to public folder:", error);
  }
}

syncComponentsToPublic();
