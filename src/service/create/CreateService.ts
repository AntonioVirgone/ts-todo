import { TodoElementModel } from "../../model/TodoElement";
import { ICreateRepository } from "../../repository/create/ICreateRepository";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
    createRepository: ICreateRepository;

    constructor(createRepository: ICreateRepository) {
        this.createRepository = createRepository;
    }

    async create(item: TodoElementModel): Promise<void> {
        return await this.createRepository.create(item);
    }
}