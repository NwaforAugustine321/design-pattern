"use strict";
exports.__esModule = true;
var originator_1 = require("./originator");
var MementoManager = /** @class */ (function () {
    function MementoManager() {
        this.list = [];
        this.originator = new originator_1["default"]();
    }
    MementoManager.prototype.saveState = function (state) {
        this.originator.setState(state);
        this.list.push(this.originator.saveToMemento());
    };
    MementoManager.prototype.getState = function () {
        return this.originator.getSaveMemento(this.list.at(this.list.length - 2));
    };
    return MementoManager;
}());
exports["default"] = MementoManager;
