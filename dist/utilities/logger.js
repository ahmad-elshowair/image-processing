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
exports.logger = void 0;
const path_1 = __importDefault(require("path"));
const checkImage = __importStar(require("./is_image_exist"));
const resize = __importStar(require("./resize_image"));
/* create a middleware to run and pass the queries to the routes that request will receive */
const logger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* initialize the query parameters */
    const typeOfWidth = req.query.width;
    const width = parseInt(typeOfWidth);
    const typeOfHeight = req.query.height;
    const height = parseInt(typeOfHeight);
    const imageName = req.query.imageName;
    /*other way of initializing query parameters but come up with errors can't fix them yet */
    // const {imageName, width, height} = req.query;
    try {
        // check if the image exist
        const existImage = yield checkImage.check_image(imageName, width, height);
        // if not exist wait for the resizing
        if (!existImage)
            yield resize.resize_image(imageName, width, height);
        // send the image
        res.sendFile(path_1.default.resolve('processed_images', `${imageName}_${width}_${height}.jpg`));
    }
    catch (error) {
        console.log(`the occurred with logger \n ${error}`);
        res.status(404).send('no image with that name \n');
    }
});
exports.logger = logger;
