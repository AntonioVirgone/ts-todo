import { TodoElementModel } from "../../model/TodoElement";

export interface ICreateService {
    create(item: TodoElementModel | TodoElementModel[]): Promise<void>;
}