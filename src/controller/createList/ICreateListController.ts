import {Request, Response, NextFunction} from 'express';

export interface ICreateListController {
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
}