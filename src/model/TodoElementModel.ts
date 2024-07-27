import { TodoStatus } from "./TodoStatus";

export type TodoElementModel = {
  readonly _id: string;
  userCode: string;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: Date;
};
