import { TodoElementModel } from "../../model/TodoElement";

export interface ICreateService {
    create(userCode: string, item: TodoElementModel | TodoElementModel[]): Promise<void>;
}