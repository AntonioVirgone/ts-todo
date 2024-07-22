import { TodoElementModel } from "../../model/TodoElement";
import { ICreateController } from "./ICreateController";

export class CreateController implements ICreateController {
  async create(item: TodoElementModel): Promise<TodoElementModel> {
    return item;
  }
}
