import {FakerCore} from '../FakerCore';

describe('Faker tests', () => {
  it('should generate numbers', () => {
    const fake = new FakerCore();

    expect(typeof fake.number()).toBe('number');
    expect(fake.number(10)).toBeLessThanOrEqual(10);

    const lessThanGreaterThan = fake.number(2, 10);
    expect(lessThanGreaterThan).toBeLessThanOrEqual(10);
    expect(lessThanGreaterThan).toBeGreaterThanOrEqual(2);

    expect(fake.seed(1).number()).toBe(fake.seed(1).number());
    expect(fake.seed(1).number()).not.toBe(fake.seed(1).unseed().number());
  });

  it('should generate strings', () => {
    const fake = new FakerCore();

    expect(typeof fake.string()).toBe('string');
    expect(fake.string()).toHaveLength(10);
    expect(fake.string(2)).toHaveLength(2);
    expect(fake.string()).not.toBe(fake.string());
    expect(fake.seed(1).string()).toBe(fake.seed(1).string());
    expect(fake.seed(1).string()).not.toBe(fake.seed(1).unseed().string());
  });

  it('should generate booleans', () => {
    const fake = new FakerCore();

    expect(typeof fake.boolean()).toBe('boolean');
    expect(fake.seed(1).boolean()).toBe(fake.seed(1).boolean());
  });

  it('should generate oneOf the options', () => {
    const spy = vi.fn();
    const fake = new FakerCore();

    fake.oneOf(spy);
    expect(spy).toHaveBeenCalledWith(fake);
    expect(fake.oneOf('string')).toBe('string');
    expect(fake.seed(1).oneOf(24, (fake) => fake.number(0, 42))).toBe(
      fake.seed(1).oneOf(24, (fake) => fake.number(0, 42)),
    );
  });
});
