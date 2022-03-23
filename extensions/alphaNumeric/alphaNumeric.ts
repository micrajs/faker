import {randomDigit} from '@/data/utilities/randomDigit';
import {randomLowerCase} from '@/data/utilities/randomLowerCase';
import {randomUpperCase} from '@/data/utilities/randomUpperCase';

const chars = [randomUpperCase, randomLowerCase, randomDigit];

export function alphaNumeric(fake: Faker.Instance) {
  return (length = 10): string => {
    const maxLength = Math.pow(2, 20);
    if (length >= maxLength) {
      length = maxLength;
    }

    const returnString: (string | number)[] = [];
    for (let i = 0; i < length; i++) {
      returnString.push(chars[fake.number(chars.length - 1)](fake));
    }

    return returnString.join('');
  };
}
