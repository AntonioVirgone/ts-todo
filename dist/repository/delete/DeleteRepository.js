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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRepository = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const FindFromFileRepository_1 = require("../find/FindFromFileRepository");
class DeleteRepository {
    constructor() {
        this.findRepository = new FindFromFileRepository_1.FindFromFileRepository();
        this.filePath = path_1.default.join(__dirname, "../../../resources");
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.promises.writeFile(`${this.filePath}/todo.json`, JSON.stringify([]), "utf-8");
            }
            catch (error) {
                console.error(error);
                throw new Error("Error deleted all items");
            }
        });
    }
    deleteById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.findRepository.findAll();
            const newItems = items.filter(item => item._id !== itemId);
            yield fs_1.promises.writeFile(`${this.filePath}/todo.json`, JSON.stringify(newItems), "utf-8");
        });
    }
}
exports.DeleteRepository = DeleteRepository;
