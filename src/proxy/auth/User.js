"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User() {
        this.rootAccess = false;
    }
    User.prototype.checkAccess = function () {
        return this.rootAccess;
    };
    return User;
}());
exports["default"] = User;
