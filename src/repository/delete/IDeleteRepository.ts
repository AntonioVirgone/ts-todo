export interface IDeleteRepository {
    delete(): Promise<void>
    deleteById(itemId: string): Promise<void>
}