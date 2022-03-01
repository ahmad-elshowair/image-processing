"use strict";
/* eslint-disable prettier/prettier */
/* import the package modules that in use here */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_error = void 0;
/* express validation will save  errors and messages in array*/
const validate = __importStar(require("express-validator"));
/* */
const check_error = (req, res, next) => {
    // get validationResult(req) and check if it error free 
    if (validate.validationResult(req).isEmpty()) {
        next(); // move to the next middleware
    }
    else {
        // if there are errors will send them
        let errors = '';
        for (const error of validate.validationResult(req).array()) {
            errors = errors.concat(`${error.msg}`);
        }
        res.send(errors);
    }
};
exports.check_error = check_error;
