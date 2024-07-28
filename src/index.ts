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
import { IStatusController } from "./controller/status/IStatusController";
import { StatusController } from "./controller/status/StatusController";

const app = express();
const port = 3010;
const findController: IFindController = new FindController();
const createController: ICreateController = new CreateController();
const createListController: ICreateListController = new CreateListController();
const deleteController: IDeleteController = new DeleteController();
const statusController: IStatusController = new StatusController();

app.use(express.json());

// GET
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  await findController
    .findAll(req, res, next)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      const merrsageError: MessageError = new MessageError(
        404,
        `File not found ${error}`
      );
      res.status(merrsageError.getMessageError().status).json(merrsageError);
    });
});

app.get(
  "/user/:userCode",
  async (req: Request, res: Response, next: NextFunction) => {
    await findController
      .findFromFile(req, res, next)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        const merrsageError: MessageError = new MessageError(
          404,
          `File not found ${error}`
        );
        res.status(merrsageError.getMessageError().status).json(merrsageError);
      });
  }
);

app.get(
  "/user/:userCode/item/:itemId",
  async (req: Request, res: Response, next: NextFunction) => {
    await findController
      .findById(req, res, next)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        const merrsageError: MessageError = new MessageError(
          404,
          `Resource not found ${error}`
        );
        res.status(merrsageError.getMessageError().status).json(merrsageError);
      });
  }
);

// POST
app.post(
  "/user/:userCode",
  async (req: Request, res: Response, next: NextFunction) => {
    await createController
      .create(req, res, next)
      .then(() => {
        res.status(201).json();
      })
      .catch((error) => {
        const merrsageError: MessageError = new MessageError(
          400,
          `Input not valid ${error}`
        );
        res.status(merrsageError.getMessageError().status).json(merrsageError);
      });
  }
);

app.post(
  "/user/:userCode/list",
  async (req: Request, res: Response, next: NextFunction) => {
    await createListController
      .create(req, res, next)
      .then(() => {
        res.status(201).json();
      })
      .catch((error) => {
        const merrsageError: MessageError = new MessageError(
          409,
          `Create list failed ${error}`
        );
        res.status(merrsageError.getMessageError().status).json(merrsageError);
      });
  }
);

// DELETE
app.delete(
  "/user/:userCode",
  async (req: Request, res: Response, next: NextFunction) => {
    await deleteController
      .delete(req, res, next)
      .then(() => {
        res.status(200).json();
      })
      .catch((error) => {
        const messageError: MessageError = new MessageError(
          403,
          `Delete all element failed ${error}`
        );
        res.status(messageError.getMessageError().status).json(messageError);
      });
  }
);

app.delete(
  "/user/:userCode/item/:itemId",
  async (req: Request, res: Response, next: NextFunction) => {
    await deleteController
      .deleteById(req, res, next)
      .then(() => {
        res.status(200).json();
      })
      .catch((error) => {
        const messageError: MessageError = new MessageError(
          403,
          `Delete element failed ${error}`
        );
        res.status(messageError.getMessageError().status).json(messageError);
      });
  }
);

// PATCH

// back status
app.patch(
  "/user/:userCode/item/:itemId/status/back",
  async (req: Request, res: Response, next: NextFunction) => {
    await statusController
      .back(req, res, next)
      .then(() => {
        res.status(200).json();
      })
      .catch((error) => {
        const messageError: MessageError = new MessageError(
          403,
          `Change status failed ${error}`
        );
        res.status(messageError.getMessageError().status).json(messageError);
      });
  }
);

// next status
app.patch(
  "/user/:userCode/item/:itemId/status/next",
  async (req: Request, res: Response, next: NextFunction) => {
    await statusController
      .next(req, res, next)
      .then(() => {
        res.status(200).json();
      })
      .catch((error) => {
        const messageError: MessageError = new MessageError(
          403,
          `Change status failed ${error}`
        );
        res.status(messageError.getMessageError().status).json(messageError);
      });
  }
);

app.listen(port, () => {
  console.log(`Server ts-todo is running at http://localhost:${port}`);
});
