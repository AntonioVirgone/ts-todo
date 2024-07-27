import { TodoElementModel } from "../../model/TodoElementModel";

export interface ICreateService {
    create(userCode: string, item: TodoElementModel | TodoElementModel[]): Promise<void>;
}