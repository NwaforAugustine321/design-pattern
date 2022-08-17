"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseHandler_1 = __importDefault(require("./baseHandler"));
class Loginvalidation extends baseHandler_1.default {
    handler(name, password) {
        if (name !== 'austine' || password !== '321') {
            return 'validation failed';
        }
        else {
            return super.handler(name, password);
        }
    }
}
exports.default = Loginvalidation;
