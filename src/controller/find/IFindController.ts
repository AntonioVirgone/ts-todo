import { TodoElementModel } from "../../model/TodoElement";
import { Request, Response, NextFunction } from "express";

export interface IFindController {
    findAll(): Promise<TodoElementModel[]>;
    findFromFile(req: Request, res: Response, next: NextFunction): Promise<TodoElementModel[]>;
    findById(userCode: string, itemId: string): Promise<TodoElementModel>;
}