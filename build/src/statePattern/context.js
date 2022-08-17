"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lightOff_1 = __importDefault(require("./lightOff"));
class Context {
    constructor() {
        this.state = new lightOff_1.default();
    }
    changeState(sta) {
        this.state = sta;
    }
    getState() {
        return this.state;
    }
}
exports.default = Context;
