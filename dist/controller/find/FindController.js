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
exports.FindController = void 0;
const FindService_1 = require("../../service/find/FindService");
const FindRepository_1 = require("../../repository/find/FindRepository");
const FindFromFileRepository_1 = require("../../repository/find/FindFromFileRepository");
class FindController {
    constructor() {
        this.findRepository = new FindRepository_1.FindRepository();
        this.findFromFileRepository = new FindFromFileRepository_1.FindFromFileRepository();
        this.findService = new FindService_1.FindService(this.findRepository);
        this.findFromFileService = new FindService_1.FindService(this.findFromFileRepository);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findService.findAll();
        });
    }
    findFromFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findFromFileService.findFileFromFile();
        });
    }
}
exports.FindController = FindController;
