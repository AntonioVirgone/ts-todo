"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindResourceImpl = void 0;
const FindService_1 = require("../../service/find/FindService");
const FindRepository_1 = require("../../repository/find/FindRepository");
class FindResourceImpl {
    constructor(app) {
        this.app = app;
        this.findService = new FindService_1.FindService();
    }
    findAll() {
        this.app.get("/", (req, res) => {
            res.send(this.findService.findAll());
        });
    }
    find() {
        this.app.get("/json", (req, res) => {
            const repository = new FindRepository_1.FindFromFileRepository();
            repository.findByFile("todo.json");
        });
    }
}
exports.FindResourceImpl = FindResourceImpl;
