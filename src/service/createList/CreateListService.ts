import { CreateListRepository } from "../../repository/createList/CreatelistRepository";
import { ICreateListRepository } from "../../repository/createList/ICreatelistRepository";
import { ICreateListService } from "./ICreateListService";

export class CreateListService implements ICreateListService {
  createListRepository: ICreateListRepository = new CreateListRepository();

  async create(listName: string): Promise<void> {
    return await this.createListRepository.create(listName);
  }
}
