import { IDeleteRepository } from "./IDeleteRepository";

export class DeleteRepository implements IDeleteRepository {
    delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteById(itemId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}