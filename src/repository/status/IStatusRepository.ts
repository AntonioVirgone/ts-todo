import { TodoElementModel } from "../../model/TodoElementModel";
import { TodoStatus } from "../../model/TodoStatus";

export interface IStatusRepository {
  changeStatus(
    userCode: string,
    itemId: string,
    status: TodoStatus
  ): Promise<TodoElementModel[]>;
}
