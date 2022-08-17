"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Adaptee {
    constructor(printerName) {
        this.printerName = printerName;
    }
    printPaper() {
        return this.printerName;
    }
}
exports.default = Adaptee;
