export interface ICreateListService {
    create(listName: string): Promise<void>
}