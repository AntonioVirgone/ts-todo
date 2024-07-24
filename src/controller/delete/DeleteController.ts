import { DeleteRepository } from "../../repository/delete/DeleteRepository";
import { DeleteService } from "../../service/delete/DeleteService";
import { IDeleteController } from "./IDeleteController";

export class DeleteController implements IDeleteController {
  private deleteRepository: DeleteRepository = new DeleteRepository();
  private deleteService: DeleteService = new DeleteService(
    this.deleteRepository
  );

  async delete(userCode: string): Promise<void> {
    return await this.deleteService.delete(userCode);
  }

  async deleteById(userCode: string, itemId: string): Promise<void> {
    return await this.deleteService.deleteById(userCode, itemId); 
  }
}
