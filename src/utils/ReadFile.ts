import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(__dirname, "../../resources");

export async function read(fileName: string) {
  return await fs.readFile(`${filePath}/${fileName}.json`, "utf-8");
}

export async function checkFileExists(fileName: string): Promise<boolean> {
  try {
    await fs.access(`${filePath}/${fileName}.json`);
    return true;
  } catch (err) {
    return false;
  }
}
