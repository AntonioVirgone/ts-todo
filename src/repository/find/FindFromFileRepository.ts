import { TodoElementModel } from "../../model/TodoElement";
import { read } from "../../utils/ReadFile";
import { IFindRepository } from "./IFindRepository";

export class FindFromFileRepository implements IFindRepository {
  async findAll(): Promise<TodoElementModel[]> {
    console.log("find from file");
    
    try {
      return JSON.parse(await read());
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }
}
