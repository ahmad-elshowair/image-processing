"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const express_1 = __importDefault(require("express"));
const resizeImageRoute_1 = __importDefault(require("./routes/resizeImageRoute"));
/* initialize an instance of application */
const app = (0, express_1.default)();
/* initialize the port */
const port = 5000;
/* the main endpoint */
app.use('/api', resizeImageRoute_1.default);
app.listen(port, () => {
    console.log(`the server on localhost: ${port}`);
});
/* send message to the user */
app.use('/', (req, res) => {
    res.send(`welcome there ! \n 
    the request work on api/resize..... \n
    use imageName & width & height \n
    existing images are['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']`);
});
exports.default = app;
