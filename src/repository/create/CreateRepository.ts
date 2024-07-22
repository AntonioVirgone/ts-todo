import { TodoElementModel } from "../../model/TodoElement";
import { ICreateRepository } from "./ICreateRepository";

export class CreateRepository implements ICreateRepository {
    create(item: TodoElementModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
} 