import path from "path";
import { IDeleteRepository } from "./IDeleteRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { TodoElementModel } from "../../model/TodoElement";
import { write } from "ts-av-common";

export class DeleteRepository implements IDeleteRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();

  async delete(userCode: string): Promise<void> {
    try {
      await write(`${path.join(__dirname, "../../../resources")}/${userCode}.json`, []);
    } catch (error) {
      console.error(error);
      throw new Error("Error deleted all items");
    }
  }

  async deleteById(userCode: string, itemId: string): Promise<void> {
    try {
      const items = await this.findRepository.findAll(userCode);
      const newItems: TodoElementModel[] = items.filter(
        (item) => item._id !== itemId
      );
      await write(`${path.join(__dirname, "../../../resources")}/${userCode}.json`, newItems);
    } catch (error) {
      console.error(error);
      throw new Error(`Error deleted item with id ${itemId}`);
    }
  }
}
