"use strict";
exports.__esModule = true;
var Admin = /** @class */ (function () {
    function Admin() {
        this.rootAccess = true;
    }
    Admin.prototype.checkAccess = function () {
        return this.rootAccess;
    };
    return Admin;
}());
exports["default"] = Admin;
