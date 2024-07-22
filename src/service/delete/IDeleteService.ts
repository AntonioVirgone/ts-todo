export interface IDeleteService {
    delete(): Promise<void>;
    deleteById(itemId: string): Promise<void>
}