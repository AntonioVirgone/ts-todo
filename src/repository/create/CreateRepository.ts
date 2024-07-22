import { TodoElementModel } from "../../model/TodoElement";
import { ICreateRepository } from "./ICreateRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { TodoStatus } from "../../model/TodoStatus";
import { write } from "../../utils/WriteFile";

export class CreateRepository implements ICreateRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();

  async create(item: TodoElementModel): Promise<void> {
    try {
      const newItem = {
        ...item,
        _id: Math.random().toString(36),
        status: TodoStatus.PENDING,
        createdAt: new Date(),
      };
      let data: TodoElementModel[] = await this.findRepository.findAll();
      data.push(newItem);

      await write(data);
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }
}
