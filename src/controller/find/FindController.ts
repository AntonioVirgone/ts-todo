import { Application, Request, Response } from "express";
import { TodoStatus } from "../../model/TodoStatus";
import { IFindController } from "./IFindController";

export class FindController implements IFindController {
  constructor(private app: Application) {}

  findAll() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send([
        {
          _id: "abc",
          title: "Title 1",
          description: "lorem ipsum",
          status: TodoStatus.COMPLETED,
        },
      ]);
    });
  }
}
