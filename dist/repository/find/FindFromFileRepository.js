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
exports.FindFromFileRepository = void 0;
const path_1 = __importDefault(require("path"));
const ts_av_common_1 = require("ts-av-common");
class FindFromFileRepository {
    findAll(userCode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filePath = yield (0, ts_av_common_1.readFile)(`${path_1.default.join(__dirname, "../../../resources")}/${userCode}.json`);
                return JSON.parse(filePath);
            }
            catch (error) {
                console.error(error);
                throw new Error("Error reading file");
            }
        });
    }
    findById(userCode, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itemList = yield JSON.parse(yield (0, ts_av_common_1.readFile)(`${path_1.default.join(__dirname, "../../../resources")}/${userCode}.json`));
                const itemListFiltered = itemList.filter((item) => item._id === itemId);
                if (itemListFiltered.length > 0) {
                    return itemListFiltered[0];
                }
                else {
                    throw new Error("Element not found");
                }
            }
            catch (error) {
                console.error(error);
                throw new Error("Error reading file");
            }
        });
    }
}
exports.FindFromFileRepository = FindFromFileRepository;
