import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(__dirname, "../../../resources");

export async function read() {
  return await fs.readFile(`${filePath}/todo.json`, "utf-8");
}
