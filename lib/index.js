"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var joi = require('joi');
var Validator = /** @class */ (function () {
    function Validator() {
        this.validator = joi;
    }
    Validator.prototype.isEmail = function (email) {
        if (!email) {
            return false;
        }
        var schema = this.validator.string().email();
        var result = schema.validate(email);
        return result.error ? false : true;
    };
    Validator.prototype.isString = function (value) {
        var schema = this.validator.string();
        var result = schema.validate(value);
        return result.error ? false : true;
    };
    Validator.prototype.has = function (data, key) {
        return data[key];
    };
    return Validator;
}());
exports.Validator = Validator;
