import { TodoElementModel } from "../../model/TodoElement";

export interface IFindRepository {
  findAll(): Promise<TodoElementModel[]>;
  findById(itemId: string): Promise<TodoElementModel>;
}
