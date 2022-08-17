"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Suv_1 = __importDefault(require("./Suv"));
class SuvFactory {
    getCar() {
        return new Suv_1.default('sedan');
    }
}
exports.default = SuvFactory;
