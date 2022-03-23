import {pattern} from '../pattern';
import {Faker} from '../../..';

describe('pattern extension tests', () => {
  it('should generate patterns', () => {
    const fake = Faker();
    const testPattern = '#?*ABC';
    fake.extend('pattern', pattern);

    const result = fake.pattern(testPattern);

    expect(typeof result).toBe('string');
    expect(result).toHaveLength(testPattern.length);
    expect(isNaN(Number(result.at(0)))).toBe(false);
    expect(isNaN(Number(result.at(1)))).toBe(true);
    expect(['string', 'number'].includes(typeof result.at(2))).toBe(true);
    expect(result.substring(3)).toBe('ABC');

    expect(fake.pattern(testPattern)).not.toBe(fake.pattern(testPattern));
    expect(fake.seed(1).pattern(testPattern)).toBe(
      fake.seed(1).pattern(testPattern),
    );
    expect(fake.seed(1).pattern(testPattern)).not.toBe(
      fake.seed(1).unseed().pattern(testPattern),
    );
  });
});
