import express, { Request, Response } from "express";
import { FindController } from "./controller/find/FindController";
import { IFindController } from "./controller/find/IFindController";
import { FindFromFileRepository } from "./repository/find/FindFromFileRepository";
import { FindRepository } from "./repository/find/FindRepository";

const app = express();
const port = 3010;
const findController: IFindController = new FindController();

findController.findAll();

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await findController.findAll();
    res.send(result);
  } catch (error) {
    res.status(404).send(`File not found ${error}`);
  }
});

app.get("/json", async (req: Request, res: Response) => {
  try {
    const result = await findController.findFromFile();
    res.send(result);
  } catch (error) {
    res.status(404).send(`File not found. Error: ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
