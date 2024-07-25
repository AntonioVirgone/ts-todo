import { TodoElementModel } from "../../model/TodoElement";
import { CreateRepository } from "../../repository/data/create/CreateRepository";
import { ICreateRepository } from "../../repository/data/create/ICreateRepository";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
    private createRepository: ICreateRepository = new CreateRepository();
    
    async create(userCode: string, item: TodoElementModel | TodoElementModel[]): Promise<void> {
        return await this.createRepository.create(userCode, item);
    }
}