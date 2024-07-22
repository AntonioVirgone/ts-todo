import express, { Request, Response } from "express";
import { FindController } from "./controller/find/FindController";
import { IFindController } from "./controller/find/IFindController";
import { MessageError } from "./model/MessageError";
import { TodoElementModel } from "./model/TodoElement";
import { ICreateController } from "./controller/create/ICreateController";
import { CreateController } from "./controller/create/CreateController";

const app = express();
const port = 3010;
const findController: IFindController = new FindController();
const createController: ICreateController = new CreateController();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await findController.findAll();
    res.json(result);
  } catch (error) {
    const merrsageErro: MessageError = new MessageError(404, `File not found ${error}`);
    res.status(merrsageErro.getMessageError().status).json(merrsageErro);
  }
});

app.get("/json", async (req: Request, res: Response) => {
  try {
    const result = await findController.findFromFile();
    res.json(result);
  } catch (error) {
    const merrsageErro: MessageError = new MessageError(404, `File not found ${error}`);
    res.status(merrsageErro.getMessageError().status).json(merrsageErro);
  }
});

app.post("/", async (req: Request, res: Response) => {
  try {
    const item: TodoElementModel = req.body;
    const result = await createController.create(item);
    res.status(201).json({
      _id: result
    });
  } catch (error) {
    const merrsageErro: MessageError = new MessageError(400, `Input nota valid ${error}`);
    res.status(merrsageErro.getMessageError().status).json(merrsageErro);
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
