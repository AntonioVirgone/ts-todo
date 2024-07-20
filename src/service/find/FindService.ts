import { TodoElementModel } from "../../model/TodoElement";
import { FindFromFileRepository } from "../../repository/find/FindRepository";
import { IFindRepository } from "../../repository/find/IFindRepository";
import { IFindService } from "./IFindService";

export class FindService implements IFindService {
  private repository: IFindRepository = new FindFromFileRepository();

  findAll(): TodoElementModel[] {
    return this.repository.findAll();
  }
}
