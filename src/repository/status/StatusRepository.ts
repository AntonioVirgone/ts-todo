import { readFile } from "ts-av-common";
import { ROUTE_FILE } from "../../config/Resources";
import { TodoElementModel } from "../../model/TodoElementModel";
import { TodoStatus } from "../../model/TodoStatus";
import { IStatusRepository } from "./IStatusRepository";
import path from "path";

export class StatusRepository implements IStatusRepository {
  async changeStatus(
    userCode: string,
    itemId: string,
    status: TodoStatus
  ): Promise<TodoElementModel[]> {
    try {
      const itemList: TodoElementModel[] = await JSON.parse(
        await readFile(`${path.join(__dirname, ROUTE_FILE)}/${userCode}.json`)
      );
      itemList.forEach((item, index, list) => {
        if (item._id === itemId) {
          list[index].status = status;
        }
      });

      return itemList;
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }
}
