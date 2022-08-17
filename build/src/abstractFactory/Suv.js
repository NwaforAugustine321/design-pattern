"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Suv {
    constructor(name) {
        this.engine = '';
        this.name = name;
    }
    setEngine(type) {
        this.engine = type;
    }
    getDescription() {
        return `${this.name} with ${this.engine} engine`;
    }
}
exports.default = Suv;
