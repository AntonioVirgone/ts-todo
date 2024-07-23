import { TodoElementModel } from "../../model/TodoElement";
import { CreateRepository } from "../../repository/create/CreateRepository";
import { ICreateRepository } from "../../repository/create/ICreateRepository";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
    private createRepository: ICreateRepository = new CreateRepository();
    
    async create(item: TodoElementModel | TodoElementModel[]): Promise<void> {
        return await this.createRepository.create(item);
    }
}