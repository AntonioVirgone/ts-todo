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
const MessageError_1 = require("./model/MessageError");
const CreateController_1 = require("./controller/create/CreateController");
const DeleteController_1 = require("./controller/delete/DeleteController");
const app = (0, express_1.default)();
const port = 3010;
const findController = new FindController_1.FindController();
const createController = new CreateController_1.CreateController();
const deleteController = new DeleteController_1.DeleteController();
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findAll();
        res.json(result);
    }
    catch (error) {
        const merrsageError = new MessageError_1.MessageError(404, `File not found ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
app.get("/json", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findFromFile();
        res.json(result);
    }
    catch (error) {
        const merrsageError = new MessageError_1.MessageError(404, `File not found ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createController.create(req.body);
        res.status(201).json();
    }
    catch (error) {
        const merrsageError = new MessageError_1.MessageError(400, `Input nota valid ${error}`);
        res.status(merrsageError.getMessageError().status).json(merrsageError);
    }
}));
app.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteController.delete();
        res.send(200).json();
    }
    catch (error) {
        const messageError = new MessageError_1.MessageError(403, `Delete all element failed ${error}`);
        res.status(messageError.getMessageError().status).json(messageError);
    }
}));
app.delete("/:itemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { itemId } = req.params;
        yield deleteController.deleteById(itemId);
        res.status(200).json();
    }
    catch (error) {
        const messageError = new MessageError_1.MessageError(403, `Delete element failed ${error}`);
    }
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
