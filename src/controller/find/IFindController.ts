import { TodoElementModel } from "../../model/TodoElement";

export interface IFindController {
    findAll(): Promise<TodoElementModel[]>;
    findFromFile(userCode: string): Promise<TodoElementModel[]>;
    findById(userCode: string, itemId: string): Promise<TodoElementModel>;
}