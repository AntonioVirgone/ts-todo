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
import { IUpdateRepository } from "../../repository/update/IUpdateRepository";
import { UpdateRepository } from "../../repository/update/UpdateRepository";
import { IStatusService } from "./IStatusService";

export class StatusService implements IStatusService {
  findRepository: IFindRepository = new FindFromFileRepository();
  statusRepository: IStatusRepository = new StatusRepository();
  updateRepository: IUpdateRepository = new UpdateRepository();

  async back(userCode: string, itemId: string): Promise<void> {
    const result = await this.findRepository.findById(userCode, itemId);

    let newStatus: TodoStatus;

    switch (result.status) {
      case TodoStatus.PENDING:
        return;
      case TodoStatus.IN_PROGRESS:
        newStatus = TodoStatus.PENDING;
        break;
      case TodoStatus.COMPLETED:
        newStatus = TodoStatus.IN_PROGRESS;
        break;
    }

    await this.updateStatus(userCode, itemId, newStatus);
  }

  async next(userCode: string, itemId: string): Promise<void> {
    const result = await this.findRepository.findById(userCode, itemId);

    let newStatus: TodoStatus;

    switch (result.status) {
      case TodoStatus.PENDING:
        newStatus = TodoStatus.IN_PROGRESS;
        break;
      case TodoStatus.IN_PROGRESS:
        newStatus = TodoStatus.COMPLETED;
        break;
      case TodoStatus.COMPLETED:
        return;
    }

    await this.updateStatus(userCode, itemId, newStatus);
  }

  private async updateStatus(
    userCode: string,
    itemId: string,
    status: TodoStatus
  ) {
    // fare update dello status su lista
    const itemListUpdated: TodoElementModel[] =
      await this.statusRepository.changeStatus(userCode, itemId, status);

    await this.updateRepository.update(userCode, itemListUpdated);
  }
}
