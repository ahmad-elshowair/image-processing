"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_image = void 0;
/* eslint-disable prettier/prettier */
/* import package modules in use here */
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const check_image = (imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if the image exist
        const isImageExit = yield fs_extra_1.default.pathExists(path_1.default.resolve('processed_images', `${imageName}_${width}_${height}.jpg`));
        return isImageExit;
    }
    catch (error) {
        console.log("can't catch the image", error);
    }
});
exports.check_image = check_image;
