import { TodoElementModel } from "../../model/TodoElement";

export interface ICreateRepository {
    create(item: TodoElementModel | TodoElementModel[]): Promise<void>
}