import { TodoElementModel } from "../../model/TodoElement";

export interface ICreateController {
  create(item: TodoElementModel): Promise<TodoElementModel>;
}
