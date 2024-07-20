"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindService = void 0;
const FindRepository_1 = require("../../repository/find/FindRepository");
class FindService {
    constructor() {
        this.repository = new FindRepository_1.FindFromFileRepository();
    }
    findAll() {
        return this.repository.findAll();
    }
}
exports.FindService = FindService;
