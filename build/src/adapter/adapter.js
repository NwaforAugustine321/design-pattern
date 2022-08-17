"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    print() {
        const translate = this.adaptee.printPaper();
        console.log(`${translate} --- printed in english`);
    }
}
exports.default = Adapter;
