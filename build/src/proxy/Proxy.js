"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = __importDefault(require("./auth/Main"));
const Command_1 = __importDefault(require("./Command"));
class ProxyDesignPattern extends Command_1.default {
    constructor(user) {
        super();
        this.isAdmin = false;
        this.isAdmin = new Main_1.default().getUser(user).checkAccess();
    }
    run() {
        if (this.isAdmin) {
            super.run();
        }
        else {
            console.log('ACCESS IS NOT GRANTED');
        }
    }
}
exports.default = ProxyDesignPattern;
