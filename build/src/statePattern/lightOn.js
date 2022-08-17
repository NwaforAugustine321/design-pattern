"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightOn {
    handleLightState(ctx) {
        console.log('LIGHT IS ON');
        ctx.changeState(this);
    }
}
exports.default = LightOn;
