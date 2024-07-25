import { Auth } from "../../decorator/Auth";
import { DeleteService } from "../../service/delete/DeleteService";
import { IDeleteController } from "./IDeleteController";

export class DeleteController implements IDeleteController {
  private deleteService: DeleteService = new DeleteService();

  @Auth
  async delete(userCode: string): Promise<void> {
    return await this.deleteService.delete(userCode);
  }

  @Auth
  async deleteById(userCode: string, itemId: string): Promise<void> {
    return await this.deleteService.deleteById(userCode, itemId); 
  }
}
