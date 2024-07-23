import { checkFileExists } from "../../utils/ReadFile";
import { ICreateListRepository } from "./ICreateListRepository";
import { createFile } from "../../utils/WriteFile";

export class CreateListRepository implements ICreateListRepository {
    async create(listName: string): Promise<void> {
        if (await checkFileExists(listName)) {
            throw new Error(`File ${listName}.json already exist`);
        }

        return await createFile(listName);
    }
}