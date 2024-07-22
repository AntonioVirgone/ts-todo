import { TodoElementModel } from "../../model/TodoElement";
import { ICreateController } from "./ICreateController";

export class CreateController implements ICreateController {
    async create(item: TodoElementModel): Promise<string> {
        return Math.random().toString(16).substring(8);
    }
}