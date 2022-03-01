/* eslint-disable prettier/prettier */
/* import package modules that I use for validation */
import * as validate from "express-validator";


/* check image's file name is exist with two messages*/
export const image_name_check: validate.ValidationChain = validate
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
export const width_check: validate.ValidationChain = validate
  .query('width')
  .exists()
  .withMessage('required width \n')
  .toInt()
  .isInt()
  .withMessage('the width have to be a number \n');


  /* check the height of the image is exist and it is number with two messages */
export const height_check: validate.ValidationChain = validate
  .query('height')
  .exists()
  .withMessage('required height \n')
  .toInt()
  .isInt()
  .withMessage('the height have to be a number \n');