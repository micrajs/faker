/**
 * It register the hexadecimal extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {hexadecimal} from '@micra/faker/extensions/hexadecimal';
 *
 * fake.extend({hexadecimal});
 * ```
 */
export function hexadecimal(fake: Faker.Instance) {
  return (length = 1): string => {
    const parts: (string | number)[] = ['0x'];

    for (let i = 0; i < length; i += 1) {
      parts.push(
        fake.oneOf<string | number>(
          () => fake.number(9),
          () => String.fromCharCode(fake.number(65, 70)),
          () => String.fromCharCode(fake.number(97, 102)),
        ),
      );
    }

    return parts.join('');
  };
}
