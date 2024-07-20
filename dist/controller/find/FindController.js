"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindController = void 0;
const FindService_1 = require("../../service/find/FindService");
class FindController {
    constructor(app) {
        this.app = app;
        this.findService = new FindService_1.FindService();
    }
    findAll() {
        this.app.get("/", (req, res) => {
            res.send(this.findService.findAll());
        });
    }
}
exports.FindController = FindController;
