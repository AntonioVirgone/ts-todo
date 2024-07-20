import { TodoElementModel } from "../../model/TodoElement";

export interface IFindRepository {
  findAll(): TodoElementModel[];
}
