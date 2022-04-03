import {femaleFirstNames} from '@/data/data-sources/femaleFirstNames';
import {maleFirstNames} from '@/data/data-sources/maleFirstNames';
import {firstNames} from '@/data/data-sources/firstNames';
import {nameSuffixes} from '@/data/data-sources/nameSuffixes';
import {namePrefixes} from '@/data/data-sources/namePrefixes';
import {lastNames} from '@/data/data-sources/lastNames';

/**
 * It register the name extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {name} from '@micra/faker/extensions/name';
 *
 * fake.extend({name});
 * ```
 */
export function name(fake: Faker.Instance): Faker.Extensions['name'] {
  return (gender?: Faker.BinaryGender): string => {
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

/**
 * It register the firstName extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {firstName} from '@micra/faker/extensions/name';
 *
 * fake.extend({firstName});
 * ```
 */
export function firstName(fake: Faker.Instance): Faker.Extensions['firstName'] {
  return (gender?: Faker.BinaryGender): string => {
    if (gender === 'female') {
      return fake.oneOf(femaleFirstNames);
    }

    if (gender === 'male') {
      return fake.oneOf(maleFirstNames);
    }

    return fake.oneOf(firstNames);
  };
}

/**
 * It register the lastName extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {lastName} from '@micra/faker/extensions/name';
 *
 * fake.extend({lastName});
 * ```
 */
export function lastName(fake: Faker.Instance): Faker.Extensions['lastName'] {
  return (): string => {
    return fake.oneOf(lastNames);
  };
}

/**
 * It register the namePrefix extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {namePrefix} from '@micra/faker/extensions/name';
 *
 * fake.extend({namePrefix});
 * ```
 */
export function namePrefix(
  fake: Faker.Instance,
): Faker.Extensions['namePrefix'] {
  return (): string => {
    return fake.oneOf(namePrefixes);
  };
}

/**
 * It register the nameSuffix extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {nameSuffix} from '@micra/faker/extensions/name';
 *
 * fake.extend({nameSuffix});
 * ```
 */
export function nameSuffix(
  fake: Faker.Instance,
): Faker.Extensions['nameSuffix'] {
  return (): string => {
    return fake.oneOf(nameSuffixes);
  };
}
