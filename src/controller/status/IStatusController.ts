import { NextFunction, Request, Response } from "express";

export interface IStatusController {
    back(req: Request, res: Response, next: NextFunction): Promise<void>;
    next(req: Request, res: Response, next: NextFunction): Promise<void>;
}