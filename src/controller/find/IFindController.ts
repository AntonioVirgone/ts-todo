import { Request, Response, NextFunction } from "express";
import { TodoElementModel } from "../../model/TodoElementModel";

export interface IFindController {
    findAll(req: Request, res: Response, next: NextFunction): Promise<TodoElementModel[]>;
    findFromFile(req: Request, res: Response, next: NextFunction): Promise<TodoElementModel[]>;
    findById(req: Request, res: Response, next: NextFunction): Promise<TodoElementModel>;
}