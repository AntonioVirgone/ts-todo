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
const app = (0, express_1.default)();
const port = 3010;
const findController = new FindController_1.FindController();
findController.findAll();
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findAll();
        res.send(result);
    }
    catch (error) {
        res.status(404).send(`File not found ${error}`);
    }
}));
app.get("/json", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield findController.findFromFile();
        res.send(result);
    }
    catch (error) {
        res.status(404).send(`File not found. Error: ${error}`);
    }
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
