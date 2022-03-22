import {uuid} from '..';
import {Faker} from '../../..';

describe('uuid extension tests', () => {
  it('should generate uuids', () => {
    const fake = Faker();
    fake.extend('uuid', uuid);

    expect(typeof fake.uuid()).toBe('string');
    expect(fake.uuid()).not.toBe(fake.uuid());
    expect(fake.seed(1).uuid()).toBe(fake.seed(1).uuid());
    expect(fake.seed(1).uuid()).not.toBe(fake.seed(1).unseed().uuid());
  });
});
