export interface ICreateListController {
    create(listName: string): Promise<void>;
}