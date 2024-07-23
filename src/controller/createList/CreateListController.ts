import { CreateListService } from "../../service/createList/CreateListService";
import { ICreateListService } from "../../service/createList/ICreateListService";
import { ICreateListController } from "./ICreateListController";

export class CreateListController implements ICreateListController {
    createListService: ICreateListService = new CreateListService();
    
    async create(listName: string): Promise<void> {
        return await this.createListService.create(listName);
    }
}