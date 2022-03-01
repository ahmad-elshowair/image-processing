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
/* eslint-disable prettier/prettier */
const validate = __importStar(require("../../utilities/validate"));
describe('Test validation image', () => {
    describe('check image name', () => {
        it('check image name to be defined', () => {
            expect(validate.image_name_check).toBeDefined();
        });
    });
    describe('check image width ', () => {
        it('check image width to defined', () => {
            expect(validate.width_check).toBeDefined();
        });
    });
    describe('check image height ', () => {
        it('check image height to defined', () => {
            expect(validate.height_check).toBeDefined();
        });
    });
});
