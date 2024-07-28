import { Request, Response, NextFunction } from "express";
import { IStatusController } from "./IStatusController";
import { IStatusService } from "../../service/status/IStatusService";
import { StatusService } from "../../service/status/StatusService";

export class StatusController implements IStatusController {
    statusService: IStatusService = new StatusService();

    async back(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { userCode, itemId } = req.params;
        return await this.statusService.back(userCode, itemId);
    }

    async next(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { userCode, itemId } = req.params;
        return await this.statusService.next(userCode, itemId);
    }
    
}