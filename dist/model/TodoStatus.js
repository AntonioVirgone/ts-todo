"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatus = void 0;
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    TodoStatus[TodoStatus["PENDING"] = 1] = "PENDING";
    TodoStatus[TodoStatus["COMPLETED"] = 2] = "COMPLETED";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
