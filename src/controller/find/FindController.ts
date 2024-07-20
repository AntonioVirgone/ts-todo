import { Application, Request, Response } from "express";
import { IFindController } from "./IFindController";
import { IFindService } from "../../service/IFindService";
import { FindService } from "../../service/FindService";

export class FindController implements IFindController {
  private findService: IFindService = new FindService();
  constructor(private app: Application) {}

  findAll() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send(this.findService.findAll());
    });
  }
}
