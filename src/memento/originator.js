"use strict";
exports.__esModule = true;
var memento_1 = require("./memento");
var Originator = /** @class */ (function () {
    function Originator() {
        this.state = '';
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.saveToMemento = function () {
        return new memento_1["default"](this.state);
    };
    Originator.prototype.getSaveMemento = function (memento) {
        return memento.getState();
    };
    return Originator;
}());
exports["default"] = Originator;
