import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
    deleteById(itemId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}