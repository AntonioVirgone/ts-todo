"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FindController_1 = require("./controller/find/FindController");
const app = (0, express_1.default)();
const port = 3010;
const findController = new FindController_1.FindController(app);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
