"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageError = void 0;
class MessageError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
        this.messageError = {
            status: status,
            message: message
        };
    }
    getMessageError() {
        return this.messageError;
    }
}
exports.MessageError = MessageError;
