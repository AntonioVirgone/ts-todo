import { IFindController } from "./IFindController";
import { IFindService } from "../../service/find/IFindService";
import { FindService } from "../../service/find/FindService";
import { TodoElementModel } from "../../model/TodoElement";
import { FindRepository } from "../../repository/find/FindRepository";
import { FindFromFileRepository } from "../../repository/find/FindFromFileRepository";

export class FindController implements IFindController {
  private findRepository: FindRepository = new FindRepository();
  private findFromFileRepository: FindFromFileRepository =
    new FindFromFileRepository();
    
  private findService: IFindService = new FindService(this.findRepository);
  private findFromFileService: IFindService = new FindService(
    this.findFromFileRepository
  );

  async findAll(): Promise<TodoElementModel[]> {
    return await this.findService.findAll();
  }

  async findFromFile(): Promise<TodoElementModel[]> {
    return await this.findFromFileService.findFileFromFile();
  }
}
