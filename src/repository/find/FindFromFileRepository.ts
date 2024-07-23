import { TodoElementModel } from "../../model/TodoElement";
import { TodoStatus } from "../../model/TodoStatus";
import { read } from "../../utils/ReadFile";
import { IFindRepository } from "./IFindRepository";

export class FindFromFileRepository implements IFindRepository {
  async findAll(): Promise<TodoElementModel[]> {
    try {
      return JSON.parse(await read());
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }

  async findById(itemId: string): Promise<TodoElementModel> {
    return {
      _id: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date(),
    };
  }
}
