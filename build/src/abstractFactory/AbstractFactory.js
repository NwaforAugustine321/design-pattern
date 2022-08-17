"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractFactory {
    getVehicle(factory) {
        return factory.getCar();
    }
}
exports.default = AbstractFactory;
