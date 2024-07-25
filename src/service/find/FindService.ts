import { TodoElementModel } from "../../model/TodoElement";
import { FindFromFileRepository } from "../../repository/data/find/FindFromFileRepository";
import { FindRepository } from "../../repository/data/find/FindRepository";
import { IFindRepository } from "../../repository/data/find/IFindRepository";
import { IFindService } from "./IFindService";

export class FindService implements IFindService {
  private findRepository: IFindRepository = new FindRepository();
  private findFromFileRepository: IFindRepository = new FindFromFileRepository();

  async findAll(): Promise<TodoElementModel[]> {
    return await this.findRepository.findAll("");
  }

  async findFileFromFile(userCode: string): Promise<TodoElementModel[]> {
    return await this.findFromFileRepository.findAll(userCode);
  }

  async findById(userCode: string, itemId: string): Promise<TodoElementModel> {
    return await this.findFromFileRepository.findById(userCode, itemId);
  }
}
