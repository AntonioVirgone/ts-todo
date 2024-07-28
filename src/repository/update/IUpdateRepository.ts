import { TodoElementModel } from "../../model/TodoElementModel";

export interface IUpdateRepository {
    update(userCode: string, itemList: TodoElementModel[]): Promise<void>;
}