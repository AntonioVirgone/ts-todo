import path from "path";
import { promises as fs } from "fs";
import { IDeleteRepository } from "./IDeleteRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { TodoElementModel } from "../../model/TodoElement";

export class DeleteRepository implements IDeleteRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();
  private filePath = path.join(__dirname, "../../../resources");

  async delete(): Promise<void> {

    try {
      await fs.writeFile(`${this.filePath}/todo.json`, JSON.stringify([]), "utf-8");
    } catch (error) {
      console.error(error);
      throw new Error("Error deleted all items");
    }
  }

  async deleteById(itemId: string): Promise<void> {
    const items = await this.findRepository.findAll();
    const newItems: TodoElementModel[] = items.filter(item => item._id !== itemId);
    await fs.writeFile(`${this.filePath}/todo.json`, JSON.stringify(newItems), "utf-8");
  }
}
