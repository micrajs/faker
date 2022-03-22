declare global {
  namespace Faker {
    interface Extensions {
      oneOf: <T>(...args: (T | Faker.Generator<T>)[]) => T;
    }
  }
}

export {};
