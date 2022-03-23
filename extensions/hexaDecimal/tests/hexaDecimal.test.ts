import {hexaDecimal} from '../hexaDecimal';
import {Faker} from '../../..';

describe('hexaDecimal extension tests', () => {
  it('should generate hexaDecimals', () => {
    const fake = Faker();
    fake.extend('hexaDecimal', hexaDecimal);

    expect(typeof fake.hexaDecimal()).toBe('string');
    expect(fake.hexaDecimal().startsWith('0x')).toBe(true);
    expect(fake.hexaDecimal()).toHaveLength(3);
    expect(fake.hexaDecimal(2)).toHaveLength(4);
    expect(fake.hexaDecimal(10)).not.toBe(fake.hexaDecimal(10));
    expect(fake.seed(1).hexaDecimal(10)).toBe(fake.seed(1).hexaDecimal(10));
    expect(fake.seed(1).hexaDecimal(10)).not.toBe(
      fake.seed(1).unseed().hexaDecimal(10),
    );
  });
});
