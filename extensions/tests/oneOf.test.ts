import {oneOf} from '../oneOf';
import {Faker} from '../..';

describe('oneOf extension tests', () => {
  it('should generate oneOf the options', () => {
    const spy = vi.fn();
    const fake = Faker();
    fake.extend('oneOf', oneOf);

    fake.oneOf(spy);
    expect(spy).toHaveBeenCalledWith(fake);
    expect(fake.oneOf('string')).toBe('string');
    expect(fake.seed(1).oneOf(24, (fake) => fake.number(0, 42))).toBe(
      fake.seed(1).oneOf(24, (fake) => fake.number(0, 42)),
    );
  });
});
