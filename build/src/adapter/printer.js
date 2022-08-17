"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Printer {
    constructor(printer) {
        this.printer = printer;
    }
    print() {
        this.printer.print();
    }
}
exports.default = Printer;
