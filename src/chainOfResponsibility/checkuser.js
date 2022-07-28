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
var baseHandler_1 = require("./baseHandler");
var CheckUser = /** @class */ (function (_super) {
    __extends(CheckUser, _super);
    function CheckUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckUser.prototype.handler = function (name, password) {
        if (name !== 'austine' || password !== '321') {
            return 'database checking failed';
        }
        else {
            return _super.prototype.handler.call(this, name, password);
        }
    };
    return CheckUser;
}(baseHandler_1["default"]));
exports["default"] = CheckUser;
