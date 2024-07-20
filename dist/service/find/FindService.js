"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindService = void 0;
const TodoStatus_1 = require("../../model/TodoStatus");
class FindService {
    findAll() {
        return [
            {
                _id: "abc",
                title: "Title 1",
                description: "lorem ipsum",
                status: TodoStatus_1.TodoStatus.COMPLETED,
            },
        ];
    }
}
exports.FindService = FindService;
