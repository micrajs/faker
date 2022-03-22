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
});
