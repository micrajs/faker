import {name, firstName, lastName, namePrefix, nameSuffix} from '../name';
import {Faker} from '../../..';

describe('name extension tests', () => {
  it('should generate names', () => {
    const fake = Faker();
    fake.extend({name});

    expect(typeof fake.name()).toBe('string');
    expect(fake.name()).not.toBe(fake.name());
    expect(fake.seed(1).name()).toBe(fake.seed(1).name());
    expect(fake.seed(1).name()).not.toBe(fake.seed(1).unseed().name());
  });

  it('should generate first names', () => {
    const fake = Faker();
    fake.extend({firstName});

    expect(typeof fake.firstName()).toBe('string');
    expect(fake.firstName()).not.toBe(fake.firstName());
    expect(fake.seed(1).firstName()).toBe(fake.seed(1).firstName());
    expect(fake.seed(1).firstName()).not.toBe(
      fake.seed(1).unseed().firstName(),
    );
  });

  it('should generate last names', () => {
    const fake = Faker();
    fake.extend({lastName});

    expect(typeof fake.lastName()).toBe('string');
    expect(fake.lastName()).not.toBe(fake.lastName());
    expect(fake.seed(1).lastName()).toBe(fake.seed(1).lastName());
    expect(fake.seed(1).lastName()).not.toBe(fake.seed(1).unseed().lastName());
  });

  it('should generate name prefixes', () => {
    const fake = Faker();
    fake.extend({namePrefix});

    expect(typeof fake.namePrefix()).toBe('string');
    expect(fake.seed(1).namePrefix()).toBe(fake.seed(1).namePrefix());
  });

  it('should generate name suffixes', () => {
    const fake = Faker();
    fake.extend({nameSuffix});

    expect(typeof fake.nameSuffix()).toBe('string');
    expect(fake.seed(1).nameSuffix()).toBe(fake.seed(1).nameSuffix());
  });
});
