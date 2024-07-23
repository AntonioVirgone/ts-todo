import { TodoElementModel } from "../../model/TodoElement";
import { CreateRepository } from "../../repository/create/CreateRepository";
import { CreateService } from "../../service/create/CreateService";
import { ICreateService } from "../../service/create/ICreateService";
import { ICreateController } from "./ICreateController";

export class CreateController implements ICreateController {
  private createRepository: CreateRepository = new CreateRepository();
  private createService: ICreateService = new CreateService(
    this.createRepository
  );

  async create(items: TodoElementModel | TodoElementModel[]): Promise<void> {
    this.createService.create(items);
  }
}
