import { TodoElementModel } from "../../model/TodoElement";
import { TodoStatus } from "../../model/TodoStatus";
import { IFindRepository } from "./IFindRepository";

export class FindFromFileRepository implements IFindRepository {
    findAll(): TodoElementModel[] {
        return [
            {
              _id: "abc",
              title: "Title 1",
              description: "lorem ipsum",
              status: TodoStatus.COMPLETED,
            },
          ];
    }
    
}