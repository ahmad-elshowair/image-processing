/* eslint-disable prettier/prettier */
/* import package modules in use here */
import express from "express";
import * as validate from "../utilities/validate";
import * as error_para from "../utilities/error_parameter";
import * as logger from "../utilities/logger";

/* initialize touters */
const route = express.Router();

/* the api router to work  with request of resize image */
route.get(
  "/resize",
  validate.image_name_check, 
  validate.width_check,
  validate.height_check,
  error_para.check_error,
  logger.logger
);
export default route;