import {randomLowerCase} from '@/data/utilities/randomLowerCase';
import {randomUpperCase} from '@/data/utilities/randomUpperCase';

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
