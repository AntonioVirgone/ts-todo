import {Request, Response, NextFunction} from 'express';
import { Auth } from "../../decorator/Auth";
import { CreateListService } from "../../service/createList/CreateListService";
import { ICreateListService } from "../../service/createList/ICreateListService";
import { ICreateListController } from "./ICreateListController";

export class CreateListController implements ICreateListController {
    createListService: ICreateListService = new CreateListService();
    
    @Auth
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { userCode } = req.params;
        return await this.createListService.create(userCode);
    }
}