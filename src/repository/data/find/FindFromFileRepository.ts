import path from "path";
import { TodoElementModel } from "../../../model/TodoElement";
import { readFile } from "ts-av-common";
import { IFindRepository } from "./IFindRepository";

export class FindFromFileRepository implements IFindRepository {
  async findAll(userCode: string): Promise<TodoElementModel[]> {
    try {
      const filePath = await readFile(`${path.join(__dirname, "../../../../resources")}/${userCode}.json`);
      return JSON.parse(filePath);
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }

  async findById(userCode: string, itemId: string): Promise<TodoElementModel> {
    try {
      const itemList: TodoElementModel[] = await JSON.parse(await readFile(`${path.join(__dirname, "../../../../resources")}/${userCode}.json`));
      const itemListFiltered = itemList.filter((item) => item._id === itemId);

      if (itemListFiltered.length > 0) {
        return itemListFiltered[0];
      } else {
        throw new Error("Element not found");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }
}
