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
const app = (0, express_1.default)();
const port = 3010;
const findController = new FindController_1.FindController();
const createController = new CreateController_1.CreateController();
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findAll();
        res.json(result);
    }
    catch (error) {
        const merrsageErro = new MessageError_1.MessageError(404, `File not found ${error}`);
        res.status(merrsageErro.getMessageError().status).json(merrsageErro);
    }
}));
app.get("/json", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findFromFile();
        res.json(result);
    }
    catch (error) {
        const merrsageErro = new MessageError_1.MessageError(404, `File not found ${error}`);
        res.status(merrsageErro.getMessageError().status).json(merrsageErro);
    }
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = req.body;
        const result = yield createController.create(item);
        res.status(201).json(result._id);
    }
    catch (error) {
        const merrsageErro = new MessageError_1.MessageError(400, `Input nota valid ${error}`);
        res.status(merrsageErro.getMessageError().status).json(merrsageErro);
    }
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
