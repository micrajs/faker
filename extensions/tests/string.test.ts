import {describe, it, expect} from 'vitest';
import {string} from '../string';
import {Faker} from '../..';

describe('string extension tests', () => {
  it('should generate strings', () => {
    const fake = Faker();
    fake.extend('string', string);

    expect(typeof fake.string()).toBe('string');
    expect(fake.string()).toHaveLength(10);
    expect(fake.string(2)).toHaveLength(2);
    expect(fake.string()).not.toBe(fake.string());
    expect(fake.seed(1).string()).toBe(fake.seed(1).string());
    expect(fake.seed(1).string()).not.toBe(fake.seed(1).unseed().string());
  });
});
