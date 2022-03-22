import {describe, it, expect} from 'vitest';
import {float} from '..';
import {Faker} from '../../..';

describe('float extension tests', () => {
  it('should generate float', () => {
    const fake = Faker();
    fake.extend('float', float);
    console.log(fake.float());

    expect(typeof fake.float()).toBe('number');
    expect(fake.float(10)).toBeLessThanOrEqual(10);

    const lessThanGreaterThan = fake.float(2, 10);
    expect(lessThanGreaterThan).toBeLessThanOrEqual(10);
    expect(lessThanGreaterThan).toBeGreaterThanOrEqual(2);

    expect(fake.seed(1).float()).toBe(fake.seed(1).float());
    expect(fake.seed(1).float()).not.toBe(fake.seed(1).unseed().float());
  });
});
