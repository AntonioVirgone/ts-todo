import { Request, Response, NextFunction } from "express";
import { Auth } from "../../decorator/Auth";
import { DeleteService } from "../../service/delete/DeleteService";
import { IDeleteController } from "./IDeleteController";

export class DeleteController implements IDeleteController {
  private deleteService: DeleteService = new DeleteService();

  @Auth
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { userCode } = req.params;
    return await this.deleteService.delete(userCode);
  }

  @Auth
  async deleteById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { userCode, itemId } = req.params;
    return await this.deleteService.deleteById(userCode, itemId);
  }
}
