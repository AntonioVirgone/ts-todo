import { TodoElementModel } from "../../model/TodoElement";
import { IFindRepository } from "../../repository/find/IFindRepository";
import { IFindService } from "./IFindService";

export class FindService implements IFindService {
  private findRepository: IFindRepository;

  constructor(findRepository: IFindRepository) {
    this.findRepository = findRepository;
  }

  async findAll(): Promise<TodoElementModel[]> {
    return await this.findRepository.findAll();
  }

  async findFileFromFile(): Promise<TodoElementModel[]> {
    return await this.findRepository.findAll();
  }
}
