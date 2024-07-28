import path from "path";
import { readFile } from "ts-av-common";
import { IFindRepository } from "./IFindRepository";
import { TodoElementModel } from "../../model/TodoElementModel";
import { ROUTE_FILE } from "../../config/Resources";

export class FindFromFileRepository implements IFindRepository {
  async findAll(userCode: string): Promise<TodoElementModel[]> {
    try {
      const filePath = await readFile(
        `${path.join(__dirname, ROUTE_FILE)}/${userCode}.json`
      );
      return JSON.parse(filePath);
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }

  async findById(userCode: string, itemId: string): Promise<TodoElementModel> {
    try {
      console.log(itemId);
      
      console.log(`${path.join(__dirname, ROUTE_FILE)}/${userCode}.json`);
      
      const itemList: TodoElementModel[] = await JSON.parse(
        await readFile(`${path.join(__dirname, ROUTE_FILE)}/${userCode}.json`)
      );

      console.log(`list ${JSON.stringify(itemList)}`);
      
      const itemListFiltered = itemList.filter((item) => item._id === itemId);

      console.log(`list filtered ${JSON.stringify(itemListFiltered)}`);

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
