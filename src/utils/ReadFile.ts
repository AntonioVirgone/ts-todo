import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(__dirname, "../../resources");

export async function read() {
  console.log(__dirname);
  console.log(filePath);
  
  return await fs.readFile(`${filePath}/todo.json`, "utf-8");
}
