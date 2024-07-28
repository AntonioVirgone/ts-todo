import { TodoElementModel } from "../../model/TodoElementModel";
import { TodoStatus } from "../../model/TodoStatus";
import { CreateRepository } from "../../repository/create/CreateRepository";
import { ICreateRepository } from "../../repository/create/ICreateRepository";
import { DeleteRepository } from "../../repository/delete/DeleteRepository";
import { IDeleteRepository } from "../../repository/delete/IDeleteRepository";
import { FindFromFileRepository } from "../../repository/find/FindFromFileRepository";
import { IFindRepository } from "../../repository/find/IFindRepository";
import { IStatusRepository } from "../../repository/status/IStatusRepository";
import { StatusRepository } from "../../repository/status/StatusRepository";
import { IStatusService } from "./IStatusService";

export class StatusService implements IStatusService {
  findRepository: IFindRepository = new FindFromFileRepository();
  statusRepository: IStatusRepository = new StatusRepository();
  deletRepository: IDeleteRepository = new DeleteRepository();
  createRepository: ICreateRepository = new CreateRepository();

  async back(userCode: string, itemId: string): Promise<void> {
    const result = await this.findRepository.findById(userCode, itemId);

    let newStatus: TodoStatus;

    switch (result.status) {
      case TodoStatus.IN_PROGRESS:
        return;
      case TodoStatus.PENDING:
        newStatus = TodoStatus.IN_PROGRESS;
        break;
      case TodoStatus.COMPLETED:
        newStatus = TodoStatus.PENDING;
        break;
    }

    // fare update dello status su lista
    const itemListUpdated: TodoElementModel[] =
      await this.statusRepository.changeStatus(userCode, itemId, newStatus);

    // remove list to file
    this.deletRepository.delete(userCode);

    // add list updated to file
    this.createRepository.create(userCode, itemListUpdated);
  }

  async next(userCode: string, itemId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
