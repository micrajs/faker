import {alpha} from '../alpha';
import {Faker} from '../../..';

describe('alpha extension tests', () => {
  it('should generate alphas', () => {
    const fake = Faker();
    fake.extend({alpha});
    fake.string(2);

    expect(typeof fake.alpha()).toBe('string');
    expect(fake.alpha()).toHaveLength(10);
    expect(fake.alpha(2)).toHaveLength(2);
    expect(fake.alpha()).not.toBe(fake.alpha());
    expect(fake.seed(1).alpha()).toBe(fake.seed(1).alpha());
    expect(fake.seed(1).alpha()).not.toBe(fake.seed(1).unseed().alpha());
  });
});
