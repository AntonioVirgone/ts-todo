import { Auth } from "../../decorator/Auth";
import { CreateListService } from "../../service/createList/CreateListService";
import { ICreateListService } from "../../service/createList/ICreateListService";
import { ICreateListController } from "./ICreateListController";

export class CreateListController implements ICreateListController {
    createListService: ICreateListService = new CreateListService();
    
    @Auth
    async create(listName: string): Promise<void> {
        return await this.createListService.create(listName);
    }
}