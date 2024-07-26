import { TodoElementModel } from "../../model/TodoElement";
import { Request, Response, NextFunction } from "express";

export interface IFindController {
    findAll(req: Request, res: Response, next: NextFunction): Promise<TodoElementModel[]>;
    findFromFile(req: Request, res: Response, next: NextFunction): Promise<TodoElementModel[]>;
    findById(req: Request, res: Response, next: NextFunction): Promise<TodoElementModel>;
}