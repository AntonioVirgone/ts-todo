"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteService = void 0;
class DeleteService {
    constructor(deleteRepository) {
        this.deleteRepository = deleteRepository;
    }
    delete() {
        return this.deleteRepository.delete();
    }
    deleteById(itemId) {
        return this.deleteRepository.deleteById(itemId);
    }
}
exports.DeleteService = DeleteService;
