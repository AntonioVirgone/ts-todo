import { TodoElementModel } from "../../model/TodoElement";

export interface IFindService {
  findAll(): Promise<TodoElementModel[]>;

  findFileFromFile(userCode: string): Promise<TodoElementModel[]>;

  findById(userCode: string, itemId: string): Promise<TodoElementModel>;
}
