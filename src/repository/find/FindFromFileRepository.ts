import { TodoElementModel } from "../../model/TodoElement";
import { IFindRepository } from "./IFindRepository";
import { promises as fs } from "fs";
import path from "path";

export class FindFromFileRepository implements IFindRepository {
  async findAll(): Promise<TodoElementModel[]> {
    const filePath = path.join(__dirname, "../../../resources");
    try {
      const data = await fs.readFile(`${filePath}/todo.json`, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }
}
