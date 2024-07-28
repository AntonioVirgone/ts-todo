import path from "path";
import { ICreateRepository } from "./ICreateRepository";
import { FindFromFileRepository } from "../find/FindFromFileRepository";
import { write, generateRandomString } from "ts-av-common";
import { TodoElementModel } from "../../model/TodoElementModel";
import { TodoStatus } from "../../model/TodoStatus";
import { ROUTE_FILE } from "../../config/Resources";

export class CreateRepository implements ICreateRepository {
  private findRepository: FindFromFileRepository = new FindFromFileRepository();

  async create(
    userCode: string,
    item: TodoElementModel | TodoElementModel[]
  ): Promise<void> {
    let data: TodoElementModel[] = await this.findRepository.findAll(userCode);
    if (Array.isArray(item)) {
      return await this.addMultipleItem(userCode, item, data);
    } else {
      return await this.addSingleItem(userCode, item, data);
    }
  }

  private async addSingleItem(
    userCode: string,
    item: TodoElementModel,
    data: TodoElementModel[]
  ) {
    try {
      data.push(this.updateItem(item));

      await write(`${path.join(__dirname, ROUTE_FILE)}/${userCode}.json`, data);
    } catch (error) {
      console.error(error);
      throw new Error("Error writting file");
    }
  }

  private async addMultipleItem(
    userCode: string,
    items: TodoElementModel[],
    data: TodoElementModel[]
  ) {
    try {
      const updatedItem = items.map((item) => this.updateItem(item));
      const concatenatedArray = data.concat(updatedItem);

      await write(`${path.join(__dirname, ROUTE_FILE)}/${userCode}.json`, concatenatedArray);
    } catch (error) {
      console.error(error);
      throw new Error("Error writting file");
    }
  }

  // Update item with id, status and create date time
  private updateItem(item: TodoElementModel) {
    return {
      ...item,
      _id: generateRandomString(36),
      status: TodoStatus.PENDING,
      createdAt: new Date(),
    };
  }
}
