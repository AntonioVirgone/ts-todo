import { TodoElementModel } from "../../model/TodoElementModel";
import { TodoStatus } from "../../model/TodoStatus";
import { IFindRepository } from "./IFindRepository";

export class FindRepository implements IFindRepository {
  async findAll(): Promise<TodoElementModel[]> {
    return [
      {
        _id: "abc",
        userCode: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
        createdAt: new Date(),
      },
    ];
  }

  async findById(itemId: string): Promise<TodoElementModel> {
    return {
      _id: "abc",
      userCode: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date(),
    };
  }
}
