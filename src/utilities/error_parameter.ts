/* eslint-disable prettier/prettier */
/* import the package modules that in use here */

/* express validation will save  errors and messages in array*/
import * as validate from "express-validator";
import express from "express";


/* */
export const check_error = (
  req: express.Request,
  res: express.Response,
 next: express.NextFunction
): void => {
  // get validationResult(req) and check if it error free 
  if (validate.validationResult(req).isEmpty()) {
    next(); // move to the next middleware
  } else {
    // if there are errors will send them
    let errors = '';
    for (const error of validate.validationResult(req).array()) {
      errors = errors.concat(`${error.msg}`);
    }
    res.send(errors);
  }
};
