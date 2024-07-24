import { TodoElementModel } from "../../model/TodoElement";
import { read } from "../../utils/ReadFile";
import { IFindRepository } from "./IFindRepository";

export class FindFromFileRepository implements IFindRepository {
  async findAll(userCode: string): Promise<TodoElementModel[]> {
    try {
      return JSON.parse(await read(userCode));
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }

  async findById(userCode: string, itemId: string): Promise<TodoElementModel> {
    try {
      const itemList: TodoElementModel[] = await JSON.parse(await read(userCode));
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
