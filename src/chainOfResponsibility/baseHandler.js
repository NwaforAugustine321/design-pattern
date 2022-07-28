"use strict";
exports.__esModule = true;
var BaseHandler = /** @class */ (function () {
    function BaseHandler() {
        this.nexthandler = null;
    }
    BaseHandler.prototype.setNextHandler = function (handler) {
        this.nexthandler = handler;
        return handler;
    };
    BaseHandler.prototype.handler = function (name, password) {
        if (this.nexthandler === null) {
            return 'authetication completed successfully';
        }
        return this.nexthandler.handler(name, password);
    };
    return BaseHandler;
}());
exports["default"] = BaseHandler;
