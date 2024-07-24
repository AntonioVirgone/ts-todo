import { TodoElementModel } from "../../model/TodoElement";

export interface IFindRepository {
  findAll(userCode: string): Promise<TodoElementModel[]>;
  findById(userCode: string, itemId: string): Promise<TodoElementModel>;
}
