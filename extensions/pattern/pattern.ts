/**
 * It register the pattern extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {pattern} from '@micra/faker/extensions/pattern';
 *
 * fake.extend({pattern});
 * ```
 */
export function pattern(fake: Faker.Instance) {
  return (pattern = ''): string => {
    let result = '';
    const chars = pattern.split('');

    for (let index = 0; index < chars.length; index++) {
      const char = chars[index];

      if (char === '#' && pattern[index - 1] !== '\\') {
        result += fake.number(9);
      } else if (char === '?' && pattern[index - 1] !== '\\') {
        result += String.fromCharCode(fake.number(65, 90));
      } else if (char === '*' && pattern[index - 1] !== '\\') {
        result += fake.boolean()
          ? fake.number(9)
          : String.fromCharCode(fake.number(65, 90));
      } else if (char === '\\') {
        continue;
      } else {
        result += char;
      }
    }

    return result;
  };
}
