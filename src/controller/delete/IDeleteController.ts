export interface IDeleteController {
    delete(): Promise<void>;
    deleteById(itemId: string): Promise<void>;
}