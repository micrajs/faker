import {hexadecimal} from '../hexadecimal';
import {Faker} from '../../..';

describe('hexadecimal extension tests', () => {
  it('should generate hexadecimals', () => {
    const fake = Faker();
    fake.extend({hexadecimal});

    expect(typeof fake.hexadecimal()).toBe('string');
    expect(fake.hexadecimal().startsWith('0x')).toBe(true);
    expect(fake.hexadecimal()).toHaveLength(3);
    expect(fake.hexadecimal(2)).toHaveLength(4);
    expect(fake.hexadecimal(10)).not.toBe(fake.hexadecimal(10));
    expect(fake.seed(1).hexadecimal(10)).toBe(fake.seed(1).hexadecimal(10));
    expect(fake.seed(1).hexadecimal(10)).not.toBe(
      fake.seed(1).unseed().hexadecimal(10),
    );
  });
});
