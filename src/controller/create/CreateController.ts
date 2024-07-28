import { Request, Response, NextFunction } from "express";
import { Auth } from "../../decorator/Auth";
import { CreateService } from "../../service/create/CreateService";
import { ICreateService } from "../../service/create/ICreateService";
import { ICreateController } from "./ICreateController";

export class CreateController implements ICreateController {
  private createService: ICreateService = new CreateService();

  @Auth
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { userCode } = req.params;

    console.log(`request body: ${req.body}`);

    return await this.createService.create(userCode, req.body);
  }
}
