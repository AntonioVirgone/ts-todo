import { DeleteRepository } from "../../repository/delete/DeleteRepository";
import { IDeleteRepository } from "../../repository/delete/IDeleteRepository";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  private deleteRepository: IDeleteRepository = new DeleteRepository();

  delete(userCode: string): Promise<void> {
    return this.deleteRepository.delete(userCode);
  }

  deleteById(userCode: string, itemId: string): Promise<void> {
    return this.deleteRepository.deleteById(userCode, itemId);
  }
}
