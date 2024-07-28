import path from "path";
import { TodoElementModel } from "../../model/TodoElementModel";
import { ROUTE_FILE } from "../../config/Resources";
import { IUpdateRepository } from "./IUpdateRepository";
import { write } from "ts-av-common";

export class UpdateRepository implements IUpdateRepository {
  async update(userCode: string, itemList: TodoElementModel[]): Promise<void> {
    try {
      await write(
        `${path.join(__dirname, ROUTE_FILE)}/${userCode}.json`,
        itemList
      );
    } catch (error) {
      console.error(error);
      throw new Error("Error writting file");
    }
  }
}
