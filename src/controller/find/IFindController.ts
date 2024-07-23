import { TodoElementModel } from "../../model/TodoElement";

export interface IFindController {
    findAll(): Promise<TodoElementModel[]>;
    findFromFile(): Promise<TodoElementModel[]>;
    findById(itemId: string): Promise<TodoElementModel>;
}