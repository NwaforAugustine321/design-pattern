"use strict";
exports.__esModule = true;
var lightOff_1 = require("./lightOff");
var Context = /** @class */ (function () {
    function Context() {
        this.state = new lightOff_1["default"]();
    }
    Context.prototype.changeState = function (sta) {
        this.state = sta;
    };
    Context.prototype.getState = function () {
        return this.state;
    };
    return Context;
}());
exports["default"] = Context;
