import path from "path";
import { createFile, checkFileExists } from "ts-av-common";
import { ICreateListRepository } from "./ICreateListRepository";
import { ROUTE_FILE } from "../../config/Resources";

export class CreateListRepository implements ICreateListRepository {
    async create(listName: string): Promise<void> {
        if (await checkFileExists(listName)) {
            throw new Error(`File ${listName}.json already exist`);
        }

        return await createFile(`${path.join(__dirname, ROUTE_FILE)}/${listName}.json`);
    }
}