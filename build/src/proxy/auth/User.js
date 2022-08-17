"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor() {
        this.rootAccess = false;
    }
    checkAccess() {
        return this.rootAccess;
    }
}
exports.default = User;
