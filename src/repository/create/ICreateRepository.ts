import { TodoElementModel } from "../../model/TodoElementModel";

export interface ICreateRepository {
    create(userCode: string, item: TodoElementModel | TodoElementModel[]): Promise<void>
}