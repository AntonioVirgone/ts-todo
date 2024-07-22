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
exports.CreateController = void 0;
const CreateService_1 = require("../../service/create/CreateService");
class CreateController {
    constructor() {
        this.createService = new CreateService_1.CreateService();
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.createService.create(item);
        });
    }
}
exports.CreateController = CreateController;
