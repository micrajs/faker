import {randomDigit} from '@/data/utilities/randomDigit';
import {randomLowerCase} from '@/data/utilities/randomLowerCase';
import {randomUpperCase} from '@/data/utilities/randomUpperCase';

/**
 * It register the alphaNumeric extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {alphaNumeric} from '@micra/faker/extensions/date';
 *
 * fake.extend({alphaNumeric});
 * ```
 */
export function alphaNumeric(fake: Faker.Instance) {
  return (length = 10): string => {
    const maxLength = Math.pow(2, 20);
    if (length >= maxLength) {
      length = maxLength;
    }

    return Array.from({length})
      .map(() =>
        fake.oneOf<Faker.Generator<string | number>>(
          randomUpperCase,
          randomLowerCase,
          randomDigit,
        ),
      )
      .join('');
  };
}
