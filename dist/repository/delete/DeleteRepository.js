"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRepository = void 0;
const FindFromFileRepository_1 = require("../find/FindFromFileRepository");
const WriteFile_1 = require("../../utils/WriteFile");
class DeleteRepository {
    constructor() {
        this.findRepository = new FindFromFileRepository_1.FindFromFileRepository();
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, WriteFile_1.write)([]);
            }
            catch (error) {
                console.error(error);
                throw new Error("Error deleted all items");
            }
        });
    }
    deleteById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.findRepository.findAll();
                const newItems = items.filter((item) => item._id !== itemId);
                yield (0, WriteFile_1.write)(newItems);
            }
            catch (error) {
                console.error(error);
                throw new Error(`Error deleted item with id ${itemId}`);
            }
        });
    }
}
exports.DeleteRepository = DeleteRepository;
