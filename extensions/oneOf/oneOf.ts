export function oneOf(fake: Faker.Instance) {
  return <T>(...args: (T | ((fake: Faker.Instance) => T))[]): T => {
    const index = fake.number(args.length - 1);
    const arg = args[index];

    if (typeof arg === 'function') {
      return (arg as Faker.Generator<T>)(fake);
    }

    return arg;
  };
}
