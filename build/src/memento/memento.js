"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Memento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
exports.default = Memento;
