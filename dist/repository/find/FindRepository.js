"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFromFileRepository = void 0;
const TodoStatus_1 = require("../../model/TodoStatus");
class FindFromFileRepository {
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
exports.FindFromFileRepository = FindFromFileRepository;
