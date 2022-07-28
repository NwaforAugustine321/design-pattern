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
var Loginvalidation = /** @class */ (function (_super) {
    __extends(Loginvalidation, _super);
    function Loginvalidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loginvalidation.prototype.handler = function (name, password) {
        if (name !== 'austine' || password !== '321') {
            return 'validation failed';
        }
        else {
            return _super.prototype.handler.call(this, name, password);
        }
    };
    return Loginvalidation;
}(baseHandler_1["default"]));
exports["default"] = Loginvalidation;
