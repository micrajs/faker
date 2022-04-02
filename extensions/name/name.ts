import {femaleFirstNames} from '@/data/data-sources/femaleFirstNames';
import {maleFirstNames} from '@/data/data-sources/maleFirstNames';
import {firstNames} from '@/data/data-sources/firstNames';
import {nameSuffixes} from '@/data/data-sources/nameSuffixes';
import {namePrefixes} from '@/data/data-sources/namePrefixes';
import {lastNames} from '@/data/data-sources/lastNames';

export function name(fake: Faker.Instance): Faker.Extensions['name'] {
  return (gender): string => {
    if (gender === 'female') {
      return `${fake.oneOf(femaleFirstNames)} ${fake.oneOf(lastNames)}`;
    }

    if (gender === 'male') {
      return `${fake.oneOf(maleFirstNames)} ${fake.oneOf(lastNames)}`;
    }

    return fake.oneOf(
      () => [fake.oneOf(femaleFirstNames), fake.oneOf(lastNames)].join(' '),
      () => [fake.oneOf(maleFirstNames), fake.oneOf(lastNames)].join(' '),
      () => [fake.oneOf(firstNames), fake.oneOf(lastNames)].join(' '),
      () =>
        [
          fake.oneOf(namePrefixes),
          fake.oneOf(firstNames),
          fake.oneOf(lastNames),
        ].join(' '),
      () =>
        [
          fake.oneOf(firstNames),
          fake.oneOf(lastNames),
          fake.oneOf(nameSuffixes),
        ].join(' '),
      () =>
        [
          fake.oneOf(namePrefixes),
          fake.oneOf(firstNames),
          fake.oneOf(lastNames),
          fake.oneOf(nameSuffixes),
        ].join(' '),
    );
  };
}

export function firstName(fake: Faker.Instance): Faker.Extensions['firstName'] {
  return (gender): string => {
    if (gender === 'female') {
      return fake.oneOf(femaleFirstNames);
    }

    if (gender === 'male') {
      return fake.oneOf(maleFirstNames);
    }

    return fake.oneOf(firstNames);
  };
}

export function lastName(fake: Faker.Instance): Faker.Extensions['lastName'] {
  return (): string => {
    return fake.oneOf(lastNames);
  };
}

export function namePrefix(
  fake: Faker.Instance,
): Faker.Extensions['namePrefix'] {
  return (): string => {
    return fake.oneOf(namePrefixes);
  };
}

export function nameSuffix(
  fake: Faker.Instance,
): Faker.Extensions['nameSuffix'] {
  return (): string => {
    return fake.oneOf(nameSuffixes);
  };
}
