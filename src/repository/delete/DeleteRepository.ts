import { IDeleteRepository } from "./IDeleteRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { TodoElementModel } from "../../model/TodoElement";
import { writeFile } from "../../utils/WriteFile";

export class DeleteRepository implements IDeleteRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();

  async delete(): Promise<void> {
    try {
      await writeFile([]);
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
      await writeFile(newItems);
    } catch (error) {
      console.error(error);
      throw new Error(`Error deleted item with id ${itemId}`);
    }
  }
}
