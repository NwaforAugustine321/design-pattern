"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memento_1 = __importDefault(require("./memento"));
class Originator {
    constructor() {
        this.state = '';
    }
    setState(state) {
        this.state = state;
    }
    saveToMemento() {
        return new memento_1.default(this.state);
    }
    getSaveMemento(memento) {
        return memento.getState();
    }
}
exports.default = Originator;
