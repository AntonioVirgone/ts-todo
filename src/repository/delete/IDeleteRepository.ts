export interface IDeleteRepository {
    delete(userCode: string): Promise<void>
    deleteById(userCode: string, itemId: string): Promise<void>
}