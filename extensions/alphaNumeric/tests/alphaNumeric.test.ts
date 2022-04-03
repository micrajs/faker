import {alphaNumeric} from '..';
import {Faker} from '../../..';

describe('alphaNumeric extension tests', () => {
  it('should generate alphaNumerics', () => {
    const fake = Faker();
    fake.extend({alphaNumeric});

    expect(typeof fake.alphaNumeric()).toBe('string');
    expect(fake.alphaNumeric()).toHaveLength(10);
    expect(fake.alphaNumeric(2)).toHaveLength(2);
    expect(fake.alphaNumeric()).not.toBe(fake.alphaNumeric());
    expect(fake.seed(1).alphaNumeric()).toBe(fake.seed(1).alphaNumeric());
    expect(fake.seed(1).alphaNumeric()).not.toBe(
      fake.seed(1).unseed().alphaNumeric(),
    );
  });
});
