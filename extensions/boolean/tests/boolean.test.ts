import {describe, it, expect} from 'vitest';
import {boolean} from '../../boolean';
import {Faker} from '../../..';

describe('boolean extension tests', () => {
  it('should generate booleans', () => {
    const fake = Faker();
    fake.extend('boolean', boolean);

    expect(typeof fake.boolean()).toBe('boolean');
    expect(fake.seed(1).boolean()).toBe(fake.seed(1).boolean());
  });
});
