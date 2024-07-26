import {Request, Response, NextFunction} from 'express';

export interface IDeleteController {
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteById(req: Request, res: Response, next: NextFunction): Promise<void>;
}