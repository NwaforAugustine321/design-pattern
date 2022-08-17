"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const originator_1 = __importDefault(require("./originator"));
class MementoManager {
    constructor() {
        this.list = [];
        this.originator = new originator_1.default();
    }
    saveState(state) {
        this.originator.setState(state);
        this.list.push(this.originator.saveToMemento());
    }
    getState() {
        return this.originator.getSaveMemento(this.list.at(this.list.length - 2));
    }
}
exports.default = MementoManager;
