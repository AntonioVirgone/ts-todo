import { TodoStatus } from "./TodoStatus"

export type TodoElementModel = {
    readonly _id: string,
    title: string,
    description: string,
    status: TodoStatus
}