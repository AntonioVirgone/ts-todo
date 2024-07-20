"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindController = void 0;
const TodoStatus_1 = require("../../model/TodoStatus");
class FindController {
    constructor(app) {
        this.app = app;
    }
    findAll() {
        this.app.get("/", (req, res) => {
            res.send([
                {
                    _id: "abc",
                    title: "Title 1",
                    description: "lorem ipsum",
                    status: TodoStatus_1.TodoStatus.COMPLETED,
                },
            ]);
        });
    }
}
exports.FindController = FindController;
