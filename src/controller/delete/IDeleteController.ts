export interface IDeleteController {
    delete(userCode: string): Promise<void>;
    deleteById(userCode: string, itemId: string): Promise<void>;
}