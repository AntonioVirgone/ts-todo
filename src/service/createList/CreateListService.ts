import { CreateListRepository } from "../../repository/data/createList/CreateListRepository";
import { ICreateListRepository } from "../../repository/data/createList/ICreateListRepository";
import { ICreateListService } from "./ICreateListService";

export class CreateListService implements ICreateListService {
  createListRepository: ICreateListRepository = new CreateListRepository();

  async create(listName: string): Promise<void> {
    return await this.createListRepository.create(listName);
  }
}
