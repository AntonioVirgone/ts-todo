"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const Auth_1 = require("../../decorator/Auth");
class FindController {
    constructor() {
        this.findService = new FindService_1.FindService();
    }
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findService.findAll();
        });
    }
    findFromFile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userCode } = req.params;
            return yield this.findService.findFileFromFile(userCode);
        });
    }
    findById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userCode, itemId } = req.params;
            return yield this.findService.findById(userCode, itemId);
        });
    }
}
exports.FindController = FindController;
__decorate([
    Auth_1.Auth,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], FindController.prototype, "findAll", null);
__decorate([
    Auth_1.Auth,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], FindController.prototype, "findFromFile", null);
__decorate([
    Auth_1.Auth,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], FindController.prototype, "findById", null);
