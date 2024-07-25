import path from "path";
import { createFile, checkFileExists } from "ts-av-common";
import { ICreateListRepository } from "./ICreateListRepository";

export class CreateListRepository implements ICreateListRepository {
    async create(listName: string): Promise<void> {
        if (await checkFileExists(listName)) {
            throw new Error(`File ${listName}.json already exist`);
        }

        return await createFile(`${path.join(__dirname, "../../../../resources")}/${listName}.json`);
    }
}