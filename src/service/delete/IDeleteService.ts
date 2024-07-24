export interface IDeleteService {
    delete(userCode: string): Promise<void>;
    deleteById(userCode: string, itemId: string): Promise<void>
}