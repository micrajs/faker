/**
 * It register the float extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {float} from '@micra/faker/extensions/float';
 *
 * fake.extend('float', float);
 * ```
 */
export function float(fake: Faker.Instance) {
  return (maxOrMin?: number, max?: number, precision = 0.01): number => {
    return fake.number(maxOrMin, max, precision);
  };
}
