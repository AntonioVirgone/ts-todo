import { TodoElementModel } from "../../model/TodoElement";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
    create(item: TodoElementModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}