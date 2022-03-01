/* eslint-disable prettier/prettier */
/* import package modules in use here */
import fs from "fs-extra";
import path from "path";


export const check_image = async (
  imageName: string,
  width: number,
  height: number
): Promise<boolean | undefined> => {
  try {
    // check if the image exist
    const isImageExit: boolean = await fs.pathExists(
      path.resolve(
        'processed_images',
        `${imageName}_${width}_${height}.jpg`
      )
    );
    return isImageExit;
  } catch (error) {
    console.log("can't catch the image", error);
  }
};
