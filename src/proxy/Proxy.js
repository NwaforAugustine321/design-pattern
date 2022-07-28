"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Main_1 = require("./auth/Main");
var Command_1 = require("./Command");
var ProxyDesignPattern = /** @class */ (function (_super) {
    __extends(ProxyDesignPattern, _super);
    function ProxyDesignPattern(user) {
        var _this = _super.call(this) || this;
        _this.isAdmin = false;
        _this.isAdmin = new Main_1["default"]().getUser(user).checkAccess();
        return _this;
    }
    ProxyDesignPattern.prototype.run = function () {
        if (this.isAdmin) {
            _super.prototype.run.call(this);
        }
        else {
            console.log('ACCESS IS NOT GRANTED');
        }
    };
    return ProxyDesignPattern;
}(Command_1["default"]));
exports["default"] = ProxyDesignPattern;
