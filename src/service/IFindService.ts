import { TodoElementModel } from "../model/TodoElement";

export interface IFindService {
  findAll(): TodoElementModel[];
}
