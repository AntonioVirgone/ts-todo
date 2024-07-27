import { TodoElementModel } from "../../model/TodoElementModel";
import { CreateRepository } from "../../repository/create/CreateRepository";
import { ICreateRepository } from "../../repository/create/ICreateRepository";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
    private createRepository: ICreateRepository = new CreateRepository();
    
    async create(userCode: string, item: TodoElementModel | TodoElementModel[]): Promise<void> {
        return await this.createRepository.create(userCode, item);
    }
}