"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindResourceImpl = void 0;
const FindService_1 = require("../../service/find/FindService");
class FindResourceImpl {
    constructor() {
        this.findService = new FindService_1.FindService();
        /*
        find() {
          this.app.get("/json", (req: Request, res: Response) => {
            const repository = new FindFromFileRepository();
            repository.findByFile("todo.json")
          })
        }
          */
    }
    findAll() {
        return this.findService.findAll();
    }
}
exports.FindResourceImpl = FindResourceImpl;
