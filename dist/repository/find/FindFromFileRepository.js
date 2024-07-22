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
exports.FindFromFileRepository = void 0;
const ReadFile_1 = require("../../utils/ReadFile");
class FindFromFileRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return JSON.parse(yield (0, ReadFile_1.read)());
            }
            catch (error) {
                console.error(error);
                throw new Error("Error reading file");
            }
        });
    }
}
exports.FindFromFileRepository = FindFromFileRepository;
