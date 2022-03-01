/* eslint-disable prettier/prettier */
import * as imageExist from '../../utilities/is_image_exist';

describe('Test image exist utilities', () => {
  it("should be false when there is  no check_image('santamonica', 1000, 1000)", async () => { 
    const isExist = await imageExist.check_image('santamonica', 1000, 1000);
    expect(isExist).toBe(false);
  });
});
