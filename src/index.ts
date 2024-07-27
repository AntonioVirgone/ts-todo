import express, { NextFunction, Request, Response } from "express";
import { FindController } from "./controller/find/FindController";
import { IFindController } from "./controller/find/IFindController";
import { ICreateController } from "./controller/create/ICreateController";
import { CreateController } from "./controller/create/CreateController";
import { IDeleteController } from "./controller/delete/IDeleteController";
import { DeleteController } from "./controller/delete/DeleteController";
import { ICreateListController } from "./controller/createList/ICreateListController";
import { CreateListController } from "./controller/createList/CreateListController";
import { MessageError } from "ts-av-common";

const app = express();
const port = 3010;
const findController: IFindController = new FindController();
const createController: ICreateController = new CreateController();
const createListController: ICreateListController = new CreateListController();
const deleteController: IDeleteController = new DeleteController();

app.use(express.json());

// GET
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await findController.findAll(req, res, next);
    res.status(200).json(result);
  } catch (error) {
    const merrsageError: MessageError = new MessageError(
      404,
      `File not found ${error}`
    );
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

app.get(
  "/user/:userCode",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await findController.findFromFile(req, res, next);
      res.status(200).json(result);
    } catch (error) {
      const merrsageError: MessageError = new MessageError(
        404,
        `File not found ${error}`
      );
      res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
  }
);

app.get(
  "/user/:userCode/item/:itemId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await findController.findById(req, res, next);
      res.status(200).json(result);
    } catch (error) {
      const merrsageError: MessageError = new MessageError(
        404,
        `Resource not found ${error}`
      );
      res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
  }
);

// POST
app.post(
  "/user/:userCode",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await createController.create(req, res, next);
      res.status(201).json();
    } catch (error) {
      const merrsageError: MessageError = new MessageError(
        400,
        `Input nota valid ${error}`
      );
      res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
  }
);

app.post(
  "/user/:userCode/list",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await createListController.create(req, res, next);
      res.status(201).json();
    } catch (error) {
      const merrsageError: MessageError = new MessageError(
        409,
        `Create list failed ${error}`
      );
      res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
  }
);

// DELETE
app.delete(
  "/user/:userCode",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await deleteController.delete(req, res, next);
      res.status(200).json();
    } catch (error) {
      const messageError: MessageError = new MessageError(
        403,
        `Delete all element failed ${error}`
      );
      res.status(messageError.getMessageError().status).json(messageError);
    }
  }
);

app.delete(
  "/user/:userCode/item/:itemId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await deleteController.deleteById(req, res, next);
      res.status(200).json();
    } catch (error) {
      const messageError: MessageError = new MessageError(
        403,
        `Delete element failed ${error}`
      );
    }
  }
);

app.listen(port, () => {
  console.log(`Server ts-todo is running at http://localhost:${port}`);
});
