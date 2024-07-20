import { TodoElementModel } from "../../model/TodoElement";

export interface IFindService {
  findAll(): Promise<TodoElementModel[]>;

  findFileFromFile(): Promise<TodoElementModel[]>;
}
