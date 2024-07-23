import { IFindController } from "./IFindController";
import { IFindService } from "../../service/find/IFindService";
import { FindService } from "../../service/find/FindService";
import { TodoElementModel } from "../../model/TodoElement";
import { TodoStatus } from "../../model/TodoStatus";

export class FindController implements IFindController {
  private findService: IFindService = new FindService();

  async findAll(): Promise<TodoElementModel[]> {
    return await this.findService.findAll();
  }

  async findFromFile(): Promise<TodoElementModel[]> {
    return await this.findService.findFileFromFile();
  }

  async findById(itemId: string): Promise<TodoElementModel> {
    return {
      title: "Cucinare una cacca",
      description: "Mescolare la farina",
      _id: "0.jfd19cfndok",
      status: TodoStatus.PENDING,
      createdAt: new Date("2024-07-23T09:04:33.014Z"),
    };
  }
}
