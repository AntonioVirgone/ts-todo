import { TodoElementModel } from "../model/TodoElement";
import { TodoStatus } from "../model/TodoStatus";
import { IFindService } from "./IFindService";

export class FindService implements IFindService {
    findAll(): TodoElementModel[] {
        return [
            {
              _id: "abc",
              title: "Title 1",
              description: "lorem ipsum",
              status: TodoStatus.COMPLETED,
            },
          ]
    }
}