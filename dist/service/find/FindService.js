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
exports.FindService = void 0;
const FindFromFileRepository_1 = require("../../repository/find/FindFromFileRepository");
const FindRepository_1 = require("../../repository/find/FindRepository");
class FindService {
    constructor() {
        this.findRepository = new FindRepository_1.FindRepository();
        this.findFromFileRepository = new FindFromFileRepository_1.FindFromFileRepository();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findRepository.findAll();
        });
    }
    findFileFromFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findFromFileRepository.findAll();
        });
    }
}
exports.FindService = FindService;
