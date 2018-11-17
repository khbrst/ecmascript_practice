import { should } from "chai";

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      should().equal([1, 2, 3].indexOf(4), -1);
    });
  });
});