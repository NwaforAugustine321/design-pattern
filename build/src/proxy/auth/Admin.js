"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor() {
        this.rootAccess = true;
    }
    checkAccess() {
        return this.rootAccess;
    }
}
exports.default = Admin;
