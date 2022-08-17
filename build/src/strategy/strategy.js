"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Strategy {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    sort() {
        return this.strategy.sort();
    }
}
exports.default = Strategy;
