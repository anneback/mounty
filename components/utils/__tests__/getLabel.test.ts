import { getLabel } from '@/components/utils/getLabel';

describe('getLabel', () => {
  describe('when endGame', () => {
    it('should return Prize', () => {
      const actual = getLabel(0, null, 0, null, true);
      expect(actual).toBe('🏆\nPrize');
    });
    it('should return Nothing', () => {
      const actual = getLabel(0, null, 1, null, true);
      expect(actual).toBe('Nothing');
    });
  });
  describe('when Not endGame', () => {
    it('should return Guessed', () => {
      const actual = getLabel(1, 1, 0, null, false);
      expect(actual).toBe('Guessed');
    });
    it('should return Nothing', () => {
      const actual = getLabel(0, null, 0, 0, false);
      expect(actual).toBe('Nothing');
    });
    it('should return ?', () => {
      const actual = getLabel(null, null, 0, null, false);
      expect(actual).toBe('?');
    });
  });
});
