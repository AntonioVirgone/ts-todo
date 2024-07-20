import { TodoElementModel } from "../../model/TodoElement";
import { IFindRepository } from "./IFindRepository";
import { readFile } from "fs";
import path from "path";

export class FindFromFileRepository implements IFindRepository {
  async findAll(): Promise<TodoElementModel[]> {
    const filePath = path.join(__dirname, "../../../resources");

    return new Promise((resolve, reject) => {
      readFile(`${filePath}/todo.json`, "utf-8", (err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log(`read file -> ${result}`);
        resolve(JSON.parse(result));
      });
    });
  }
}
