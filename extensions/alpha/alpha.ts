import {randomLowerCase} from '@/data/utilities/randomLowerCase';
import {randomUpperCase} from '@/data/utilities/randomUpperCase';

/**
 * It register the alpha extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {alpha} from '@micra/faker/extensions/date';
 *
 * fake.extend({alpha});
 * ```
 */
export function alpha(fake: Faker.Instance) {
  return (length = 10): string => {
    const maxLength = Math.pow(2, 20);
    if (length >= maxLength) {
      length = maxLength;
    }

    return Array.from({length})
      .map(() => fake.oneOf(randomUpperCase, randomLowerCase))
      .join('');
  };
}
