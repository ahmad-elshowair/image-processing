/* eslint-disable prettier/prettier */
import * as resize from '../../utilities/resize_image'
import * as fs from 'fs-extra'
import * as path from 'path'

describe('Test Image Resizing ', () => {
  it('resize function achieved', async () => {
    await resize.resize_image('palmtunnel', 200, 200);
    const imageExist = fs.existsSync(
      path.resolve('processed_images', 'palmtunnel_200_200.jpg')
    );
    expect(imageExist).toBeTruthy();
  });
});
