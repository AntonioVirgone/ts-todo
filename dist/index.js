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
const express_1 = __importDefault(require("express"));
const FindController_1 = require("./controller/find/FindController");
const CreateController_1 = require("./controller/create/CreateController");
const DeleteController_1 = require("./controller/delete/DeleteController");
const CreateListController_1 = require("./controller/createList/CreateListController");
const ts_av_common_1 = require("ts-av-common");
const app = (0, express_1.default)();
const port = 3010;
const findController = new FindController_1.FindController();
const createController = new CreateController_1.CreateController();
const createListController = new CreateListController_1.CreateListController();
const deleteController = new DeleteController_1.DeleteController();
app.use(express_1.default.json());
// GET
app.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findAll(req, res, next);
        res.status(200).json(result);
    }
    catch (error) {
        const merrsageError = new ts_av_common_1.MessageError(404, `File not found ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
app.get("/user/:userCode", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findFromFile(req, res, next);
        res.status(200).json(result);
    }
    catch (error) {
        const merrsageError = new ts_av_common_1.MessageError(404, `File not found ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
app.get("/user/:userCode/item/:itemId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findById(req, res, next);
        res.status(200).json(result);
    }
    catch (error) {
        const merrsageError = new ts_av_common_1.MessageError(404, `Resource not found ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
// POST
app.post("/user/:userCode", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createController.create(req, res, next);
        res.status(201).json();
    }
    catch (error) {
        const merrsageError = new ts_av_common_1.MessageError(400, `Input nota valid ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
app.post("/user/:userCode/list", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createListController.create(req, res, next);
        res.status(201).json();
    }
    catch (error) {
        const merrsageError = new ts_av_common_1.MessageError(409, `Create list failed ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
// DELETE
app.delete("/user/:userCode", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteController.delete(req, res, next);
        res.status(200).json();
    }
    catch (error) {
        const messageError = new ts_av_common_1.MessageError(403, `Delete all element failed ${error}`);
        res.status(messageError.getMessageError().status).json(messageError);
    }
}));
app.delete("/user/:userCode/item/:itemId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteController.deleteById(req, res, next);
        res.status(200).json();
    }
    catch (error) {
        const messageError = new ts_av_common_1.MessageError(403, `Delete element failed ${error}`);
    }
}));
app.listen(port, () => {
    console.log(`Server ts-todo is running at http://localhost:${port}`);
});
