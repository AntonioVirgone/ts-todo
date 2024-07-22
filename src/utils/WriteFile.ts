import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(__dirname, "../../../resources");

export async function write<T>(items: T[]) {
    await fs.writeFile(
        `${filePath}/todo.json`,
        JSON.stringify(items),
        "utf-8"
      );
}