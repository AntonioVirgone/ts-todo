import { TodoElementModel } from "../../model/TodoElement";

export interface IFindController {
    [x: string]: any;
    findAll(): Promise<TodoElementModel[]>;
    findFromFile(): Promise<TodoElementModel[]>;
}