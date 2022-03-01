/* eslint-disable prettier/prettier */
/* import package modules in use here */
import sharp from "sharp";
import path from "path";

export const resize_image = async (imageName: string, width: number, height: number): Promise<void> => {
  try {
    
    await sharp(path.resolve('images', imageName + '.jpg')) // get the image
      .resize(width, height) // new dimensions of the image
      .toFile(
        // move the image to processed_images folder
        path.resolve(
          'processed_images',
          `${imageName}_${width}_${height}.jpg`
        )
      );
  } catch (error) {
    console.log(`the error occurred with resizing the image \n${error} `);
  }
}
