"use strict";
exports.__esModule = true;
var LightOn = /** @class */ (function () {
    function LightOn() {
    }
    LightOn.prototype.handleLightState = function (ctx) {
        console.log('LIGHT IS ON');
        ctx.changeState(this);
    };
    return LightOn;
}());
exports["default"] = LightOn;
