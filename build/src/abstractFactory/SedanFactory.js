"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sedan_1 = __importDefault(require("./Sedan"));
class SedanFactory {
    getCar() {
        return new Sedan_1.default('sedan');
    }
}
exports.default = SedanFactory;
