import { IFindController } from "./IFindController";
import { IFindService } from "../../service/find/IFindService";
import { FindService } from "../../service/find/FindService";
import { TodoElementModel } from "../../model/TodoElement";

export class FindController implements IFindController {
  private findService: IFindService = new FindService();

  async findAll(): Promise<TodoElementModel[]> {    
    return await this.findService.findAll();
  }
  
  async findFromFile(): Promise<TodoElementModel[]> {
    return await this.findService.findFileFromFile();
  }
}
