import path from "path";
import { promises as fs } from "fs";
import { TodoElementModel } from "../../model/TodoElement";
import { ICreateRepository } from "./ICreateRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { TodoStatus } from "../../model/TodoStatus";

export class CreateRepository implements ICreateRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();

  async create(item: TodoElementModel): Promise<void> {
    const filePath = path.join(__dirname, "../../../resources");
    try {
      const newItem = {
        ...item,
        _id: Math.random().toString(36),
        status: TodoStatus.PENDING,
        createdAt: new Date(),
      };
      let data: TodoElementModel[] = await this.findRepository.findAll();
      data.push(newItem);

      await fs.writeFile(
        `${filePath}/todo.json`,
        JSON.stringify(data),
        "utf-8"
      );
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }
}
