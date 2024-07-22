import { IDeleteRepository } from "./IDeleteRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { TodoElementModel } from "../../model/TodoElement";
import { write } from "../../utils/WriteFile";

export class DeleteRepository implements IDeleteRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();

  async delete(): Promise<void> {
    try {
      await write([]);
    } catch (error) {
      console.error(error);
      throw new Error("Error deleted all items");
    }
  }

  async deleteById(itemId: string): Promise<void> {
    try {
      const items = await this.findRepository.findAll();
      const newItems: TodoElementModel[] = items.filter(
        (item) => item._id !== itemId
      );
      await write(newItems);
    } catch (error) {
      console.error(error);
      throw new Error(`Error deleted item with id ${itemId}`);
    }
  }
}
