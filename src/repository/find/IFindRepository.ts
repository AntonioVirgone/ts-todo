import { TodoElementModel } from "../../model/TodoElementModel";

export interface IFindRepository {
  findAll(userCode: string): Promise<TodoElementModel[]>;
  findById(userCode: string, itemId: string): Promise<TodoElementModel>;
}
