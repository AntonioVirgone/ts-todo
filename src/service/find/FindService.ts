import { TodoElementModel } from "../../model/TodoElement";
import { FindFromFileRepository } from "../../repository/find/FindFromFileRepository";
import { FindRepository } from "../../repository/find/FindRepository";
import { IFindRepository } from "../../repository/find/IFindRepository";
import { IFindService } from "./IFindService";

export class FindService implements IFindService {
  private findRepository: IFindRepository = new FindRepository();
  private findFromFileRepository: IFindRepository = new FindFromFileRepository();

  async findAll(): Promise<TodoElementModel[]> {
    return await this.findRepository.findAll();
  }

  async findFileFromFile(): Promise<TodoElementModel[]> {
    return await this.findFromFileRepository.findAll();
  }
}
