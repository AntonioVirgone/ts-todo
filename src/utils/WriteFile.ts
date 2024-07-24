import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(__dirname, "../../resources");

export async function createFile(fileName: string) {
  await fs.writeFile(`${filePath}/${fileName}.json`, JSON.stringify([]), "utf-8")
}

export async function write<T>(fileName: string, items: T[]) {
    await fs.writeFile(
        `${filePath}/${fileName}.json`,
        JSON.stringify(items),
        "utf-8"
      );
}