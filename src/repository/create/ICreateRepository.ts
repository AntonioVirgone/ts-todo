import { TodoElementModel } from "../../model/TodoElement";

export interface ICreateRepository {
    create(userCode: string, item: TodoElementModel | TodoElementModel[]): Promise<void>
}