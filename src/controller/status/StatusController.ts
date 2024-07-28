import { Request, Response, NextFunction } from "express";
import { IStatusController } from "./IStatusController";
import { IStatusService } from "../../service/status/IStatusService";
import { UpdateStatusBackService } from "../../service/status/UpdateStatusBackService";
import { UpdateStatusNextService } from "../../service/status/UpdateStatusNextService";

export class StatusController implements IStatusController {
    statusService: IStatusService | undefined;

    async back(req: Request, res: Response, next: NextFunction): Promise<void> {
        this.statusService = new UpdateStatusBackService();
        const { userCode, itemId } = req.params;
        return await this.statusService.changeStatus(userCode, itemId);
    }

    async next(req: Request, res: Response, next: NextFunction): Promise<void> {
        this.statusService = new UpdateStatusNextService();
        const { userCode, itemId } = req.params;
        return await this.statusService.changeStatus(userCode, itemId);
    }
    
}