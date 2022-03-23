import {randomBoolean} from '@/data/utilities/randomBoolean';

export function boolean(fake: Faker.Instance) {
  return (): boolean => {
    return randomBoolean(fake);
  };
}
