"use strict";
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
exports.height_check = exports.width_check = exports.image_name_check = void 0;
/* eslint-disable prettier/prettier */
/* import package modules that I use for validation */
const validate = __importStar(require("express-validator"));
/* check image's file name is exist with two messages*/
exports.image_name_check = validate
    .query('imageName')
    .exists()
    .withMessage('required image name')
    .isIn([
    'encenadaport',
    'fjord',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica',
])
    .withMessage("the image isn't there");
/* check the width is it exist and it is number with two messages */
exports.width_check = validate
    .query('width')
    .exists()
    .withMessage('required width \n')
    .toInt()
    .isInt()
    .withMessage('the width have to be a number \n');
/* check the height of the image is exist and it is number with two messages */
exports.height_check = validate
    .query('height')
    .exists()
    .withMessage('required height \n')
    .toInt()
    .isInt()
    .withMessage('the height have to be a number \n');
