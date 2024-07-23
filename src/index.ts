import express, { Request, Response } from "express";
import { FindController } from "./controller/find/FindController";
import { IFindController } from "./controller/find/IFindController";
import { MessageError } from "./model/MessageError";
import { ICreateController } from "./controller/create/ICreateController";
import { CreateController } from "./controller/create/CreateController";
import { IDeleteController } from "./controller/delete/IDeleteController";
import { DeleteController } from "./controller/delete/DeleteController";

const app = express();
const port = 3010;
const findController: IFindController = new FindController();
const createController: ICreateController = new CreateController();
const deleteController: IDeleteController = new DeleteController();

app.use(express.json());

// GET
app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await findController.findAll();
    res.status(200).json(result);
  } catch (error) {
    const merrsageError: MessageError = new MessageError(404, `File not found ${error}`);
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

app.get("/json", async (req: Request, res: Response) => {
  try {
    const result = await findController.findFromFile();
    res.status(200).json(result);
  } catch (error) {
    const merrsageError: MessageError = new MessageError(404, `File not found ${error}`);
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

app.get("/:item", async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params
    const result = await findController.findById(itemId)
    res.status(200).json(result);
  } catch (error) {
    const merrsageError: MessageError = new MessageError(404, `Resource not found ${error}`);
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
})

// POST
app.post("/", async (req: Request, res: Response) => {
  try {
    await createController.create(req.body);
    res.status(201).json();
  } catch (error) {
    const merrsageError: MessageError = new MessageError(400, `Input nota valid ${error}`);
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

// DELETE
app.delete("/", async (req: Request, res: Response) => {
  try {
    await deleteController.delete();
    res.status(200).json();
  } catch (error) {
    const messageError: MessageError = new MessageError(403, `Delete all element failed ${error}`);
    res.status(messageError.getMessageError().status).json(messageError);
  }
});

app.delete("/:itemId", async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;
    await deleteController.deleteById(itemId);
    res.status(200).json();
  } catch (error) {
    const messageError: MessageError = new MessageError(403, `Delete element failed ${error}`)
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
