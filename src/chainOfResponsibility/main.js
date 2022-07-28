"use strict";
exports.__esModule = true;
var checkuser_1 = require("./checkuser");
var loginvalidation_1 = require("./loginvalidation");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.authServicehandler = function () {
        var login = new loginvalidation_1["default"]();
        var checkuser = new checkuser_1["default"]();
        login.setNextHandler(checkuser);
        return login;
    };
    return Main;
}());
exports["default"] = Main;
