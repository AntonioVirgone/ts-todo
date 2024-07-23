import { TodoElementModel } from "../../model/TodoElement";
import { ICreateRepository } from "./ICreateRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { TodoStatus } from "../../model/TodoStatus";
import { write } from "../../utils/WriteFile";

export class CreateRepository implements ICreateRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();

  async create(item: TodoElementModel | TodoElementModel[]): Promise<void> {
    let data: TodoElementModel[] = await this.findRepository.findAll();
    if (Array.isArray(item)) {
      this.addMultipleItem(item, data);
    } else {
      this.addSingleItem(item, data);
    }
  }

  private async addSingleItem(
    item: TodoElementModel,
    data: TodoElementModel[]
  ) {
    try {
      data.push(this.updateItem(item));

      await write(data);
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }

  private async addMultipleItem(
    items: TodoElementModel[],
    data: TodoElementModel[]
  ) {
    try {
      const updatedItem = items.map((item) => this.updateItem(item));
      const concatenatedArray = data.concat(updatedItem);

      await write(concatenatedArray);
    } catch (error) {
      console.error(error);
      throw new Error("Error reading file");
    }
  }

  // Update item with id, status and create date time
  private updateItem(item: TodoElementModel) {
    return {
      ...item,
      _id: Math.random().toString(36),
      status: TodoStatus.PENDING,
      createdAt: new Date(),
    };
  }
}
