import {randomValueFromArray} from '@/data/utilities/randomValueFromArray';

export function oneOf(fake: Faker.Instance) {
  return <T>(...args: (T | Faker.Generator<T>)[]): T => {
    const arg = randomValueFromArray(fake, args);

    return typeof arg !== 'function' ? arg : (arg as Faker.Generator<T>)(fake);
  };
}
