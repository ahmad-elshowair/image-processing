/* eslint-disable prettier/prettier */
import * as validate from '../../utilities/validate';

describe('Test validation image', () => {
  describe('check image name', () => {
    it('check image name to be defined', () => {
      expect(validate.image_name_check).toBeDefined();
    });
  });

  describe('check image width ', () => {
    it('check image width to defined', () => {
      expect(validate.width_check).toBeDefined();
    });
  });

  describe('check image height ', () => {
    it('check image height to defined', () => {
      expect(validate.height_check).toBeDefined();
    });
  });
});
