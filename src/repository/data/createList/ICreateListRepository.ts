export interface ICreateListRepository {
    create(listName: string): Promise<void>;
}