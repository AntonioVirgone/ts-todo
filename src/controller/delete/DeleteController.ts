import { IDeleteController } from "./IDeleteController";

export class DeleteController implements IDeleteController {
    delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteById(itemId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}