import {randomBoolean} from '@/data/utilities/randomBoolean';
import {randomDigit} from '@/data/utilities/randomDigit';
import {randomUpperCase} from '@/data/utilities/randomUpperCase';

export function pattern(fake: Faker.Instance) {
  return (pattern = ''): string => {
    return pattern
      .split('')
      .map((char) => {
        if (char === '#') {
          return randomDigit(fake);
        } else if (char === '?') {
          return randomUpperCase(fake);
        } else if (char === '*') {
          return randomBoolean(fake)
            ? randomUpperCase(fake)
            : randomDigit(fake);
        }

        return char;
      })
      .join('');
  };
}
