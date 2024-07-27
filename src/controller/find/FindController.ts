import { IFindController } from "./IFindController";
import { IFindService } from "../../service/find/IFindService";
import { FindService } from "../../service/find/FindService";
import { Auth } from "../../decorator/Auth";
import { Request, Response, NextFunction } from "express";
import { TodoElementModel } from "../../model/TodoElementModel";

export class FindController implements IFindController {
  private findService: IFindService = new FindService();

  @Auth
  async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<TodoElementModel[]> {
    return await this.findService.findAll();
  }

  @Auth
  async findFromFile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<TodoElementModel[]> {
    const { userCode } = req.params;
    return await this.findService.findFileFromFile(userCode);
  }

  @Auth
  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<TodoElementModel> {
    const { userCode, itemId } = req.params;
    return await this.findService.findById(userCode, itemId);
  }
}
