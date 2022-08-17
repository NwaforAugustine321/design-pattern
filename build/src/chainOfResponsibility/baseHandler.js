"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseHandler {
    constructor() {
        this.nexthandler = null;
    }
    setNextHandler(handler) {
        this.nexthandler = handler;
        return handler;
    }
    handler(name, password) {
        if (this.nexthandler === null) {
            return 'authetication completed successfully';
        }
        return this.nexthandler.handler(name, password);
    }
}
exports.default = BaseHandler;
