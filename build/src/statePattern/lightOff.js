"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightOff {
    handleLightState(ctx) {
        console.log('LIGHT IS OFF');
        ctx.changeState(this);
    }
}
exports.default = LightOff;
