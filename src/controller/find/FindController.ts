import { IFindController } from "./IFindController";
import { IFindService } from "../../service/find/IFindService";
import { FindService } from "../../service/find/FindService";
import { TodoElementModel } from "../../model/TodoElement";

export class FindController implements IFindController {
  private findService: IFindService = new FindService();

  async findAll(): Promise<TodoElementModel[]> {
    return await this.findService.findAll();
  }

  async findFromFile(userCode: string): Promise<TodoElementModel[]> {
    return await this.findService.findFileFromFile(userCode);
  }

  async findById(userCode: string, itemId: string): Promise<TodoElementModel> {
    return await this.findService.findById(userCode, itemId);
  }
}
