"use strict";
exports.__esModule = true;
var LightOff = /** @class */ (function () {
    function LightOff() {
    }
    LightOff.prototype.handleLightState = function (ctx) {
        console.log('LIGHT IS OFF');
        ctx.changeState(this);
    };
    return LightOff;
}());
exports["default"] = LightOff;
