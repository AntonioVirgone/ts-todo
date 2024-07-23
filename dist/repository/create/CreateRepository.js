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
exports.CreateRepository = void 0;
const FindFromFileRepository_1 = require("../find/FindFromFileRepository");
const TodoStatus_1 = require("../../model/TodoStatus");
const WriteFile_1 = require("../../utils/WriteFile");
class CreateRepository {
    constructor() {
        this.findRepository = new FindFromFileRepository_1.FindFromFileRepository();
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.findRepository.findAll();
            if (Array.isArray(item)) {
                this.addMultipleItem(item, data);
            }
            else {
                this.addSingleItem(item, data);
            }
        });
    }
    addSingleItem(item, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                data.push(this.updateItem(item));
                yield (0, WriteFile_1.write)(data);
            }
            catch (error) {
                console.error(error);
                throw new Error("Error reading file");
            }
        });
    }
    addMultipleItem(items, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedItem = items.map((item) => this.updateItem(item));
                const concatenatedArray = data.concat(updatedItem);
                yield (0, WriteFile_1.write)(concatenatedArray);
            }
            catch (error) {
                console.error(error);
                throw new Error("Error reading file");
            }
        });
    }
    // Update item with id, status and create date time
    updateItem(item) {
        return Object.assign(Object.assign({}, item), { _id: Math.random().toString(36), status: TodoStatus_1.TodoStatus.PENDING, createdAt: new Date() });
    }
}
exports.CreateRepository = CreateRepository;
