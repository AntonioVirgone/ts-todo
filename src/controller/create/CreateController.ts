import { TodoElementModel } from "../../model/TodoElement";
import { CreateService } from "../../service/create/CreateService";
import { ICreateService } from "../../service/create/ICreateService";
import { ICreateController } from "./ICreateController";

export class CreateController implements ICreateController {
  private createService: ICreateService = new CreateService();

  async create(items: TodoElementModel | TodoElementModel[]): Promise<void> {
    this.createService.create(items);
  }
}
