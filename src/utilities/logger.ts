/* eslint-disable prettier/prettier */
/* import package modules in use here */
import express from "express";
import path from "path";
import * as checkImage from "./is_image_exist";
import * as resize from "./resize_image";

/* create a middleware to run and pass the queries to the routes that request will receive */
export const logger = async (req: express.Request, res: express.Response): Promise<void> => {

  /* initialize the query parameters */
  const typeOfWidth = req.query.width as unknown as string;
  const width: number = parseInt(typeOfWidth);
  const typeOfHeight = req.query.height as unknown as string;
  const height: number = parseInt(typeOfHeight);
  const imageName = req.query.imageName as unknown as string; 
  

  /*other way of initializing query parameters but come up with errors can't fix them yet */
// const {imageName, width, height} = req.query;
  try {
    // check if the image exist
    const existImage: boolean | undefined = await checkImage.check_image(
      imageName ,
      width ,
      height
    );
    // if not exist wait for the resizing
    if (!existImage) await resize.resize_image(imageName as string , width, height);

    // send the image
    res.sendFile(
      path.resolve(
        'processed_images',
        `${imageName}_${width}_${height}.jpg`
      )
    );
  } catch (error) {
    console.log(`the occurred with logger \n ${error}`);
    res.status(404).send('no image with that name \n');
  }
};
