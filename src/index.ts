import express, { Request, Response } from "express";
import { FindController } from "./controller/find/FindController";
import { IFindController } from "./controller/find/IFindController";

const app = express();
const port = 3010;
const findController: IFindController = new FindController(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
