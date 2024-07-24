import { TodoElementModel } from "../../model/TodoElement";

export interface ICreateController {
  create(userCode: string, item: TodoElementModel | TodoElementModel[]): Promise<void>;
}
