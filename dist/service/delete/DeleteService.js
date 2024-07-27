"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteService = void 0;
const DeleteRepository_1 = require("../../repository/delete/DeleteRepository");
class DeleteService {
    constructor() {
        this.deleteRepository = new DeleteRepository_1.DeleteRepository();
    }
    delete(userCode) {
        return this.deleteRepository.delete(userCode);
    }
    deleteById(userCode, itemId) {
        return this.deleteRepository.deleteById(userCode, itemId);
    }
}
exports.DeleteService = DeleteService;
