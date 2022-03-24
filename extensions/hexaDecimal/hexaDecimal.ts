import {randomDigit} from '@/data/utilities/randomDigit';
import {randomValueFromArray} from '@/data/utilities/randomValueFromArray';

const chars = [
  randomDigit,
  (fake: Faker.Instance) => String.fromCharCode(fake.number(65, 70)),
  (fake: Faker.Instance) => String.fromCharCode(fake.number(97, 102)),
];

export function hexaDecimal(fake: Faker.Instance) {
  return (length = 1): string => {
    const parts: (string | number)[] = ['0x'];

    for (let i = 0; i < length; i += 1) {
      parts.push(randomValueFromArray(fake, chars)(fake));
    }

    return parts.join('');
  };
}
