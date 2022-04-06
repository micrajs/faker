declare global {
  namespace Faker {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Extensions {}

    /**
     * Generators receive a Faker.Instance as the first argument and should return a given value.
     */
    type Generator<T> = (faker: Faker.Instance) => T;

    /**
     * It registers a new extension on the Faker instance. This factory receives
     * the Faker instance as a parameter and returns the extension
     * that will be set to the Faker instance.
     */
    type ExtensionFactory<K extends keyof Extensions> = (
      faker: Instance,
    ) => Instance[K];

    interface Core {
      /**
       * It generates a random integer between 0 and 99999 value.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.number(); // number between 0 and 99999
       * ```
       */
      number(): number;
      /**
       * It generates a random integer between 0 and a given `max` value.
       *
       * @param max - The maximum value.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.number(9); // number between 0 and 9
       * ```
       */
      number(max: number): number;
      /**
       * It generates a random integer between a `min` and a `max` value.
       *
       * @param min - The minimum value. Defaults to `0`.
       * @param max - The maximum value. Default: `99999`.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.number(2, 10); // number between 2 and 10
       * ```
       */
      number(min: number, max: number): number;
      /**
       * It generates a random integer between a `min` and a `max` value, with a given precision.
       *
       * @param min - The minimum value. Defaults to `0`.
       * @param max - The maximum value. Defaults to `99999`.
       * @param precision - Precision of the generated number. Defaults to `1`.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.number(2, 10, 0.1); // number between 2.0 and 10.0 with precision 0.1
       * ```
       */
      number(min: number, max: number, precision: number): number;
      /**
       * It generates a random integer between a `min` and a `max` value, with a given precision.
       *
       * @param maxOrMin - The minimum or maximum value. If this is the only argument passed, it will be the maximum value. Defaults to `99999`.
       * @param max - The minimum value. Defaults to `0`.
       * @param precision - Precision of the generated number. Defaults to `1`.
       */
      number(maxOrMin?: number, max?: number, precision?: number): number;

      /**
       * It generates a random string of length 10. It includes lowercase letters, uppercase letters, numbers and symbols.
       *
       * @param length - The length of the string. Defaults to `10`.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.string(); // "=:ZV2aOcp{" => string of length 10
       * ```
       */
      string(): string;
      /**
       * It generates a random string of a given length. It includes lowercase letters, uppercase letters, numbers and symbols.
       *
       * @param length - The length of the string. Defaults to `10`.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.string(5); // "a(zEL" => string of length 5
       * ```
       */
      string(length: number): string;
      /**
       * It generates a random string of a given length. It includes lowercase letters, uppercase letters, numbers and symbols.
       *
       * @param length - The length of the string. Defaults to `10`.
       */
      string(length?: number): string;

      /**
       * It picks a random element from a list of elements. If the first argument is an array,
       * it will be used as the list of elements. If the first argument is a value or a function,
       * the list of arguments will be used as the list.
       *
       * @param firstOrAll - A value T, a generator of T or an array of T.
       * @param ...values - The values to be used.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.oneOf(['a', 'b', 'c']); // 'a', 'b', or 'c'
       * ```
       */
      oneOf<T>(options: (T | Generator<T>)[]): T;
      /**
       * It picks a random element from a list of elements. If the first argument is an array,
       * it will be used as the list of elements. If the first argument is a value or a function,
       * the list of arguments will be used as the list.
       *
       * @param firstOrAll - A value T, a generator of T or an array of T.
       * @param ...values - The values to be used.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.oneOf('a', 'b', 'c');   // 'a', 'b', or 'c'
       * fake.oneOf((fake) => fake.number(2,10), (fake) => fake.number(20,100)); // number between 2-10 or 20-100
       * ```
       */
      oneOf<T>(...options: (T | Generator<T>)[]): T;
      /**
       * It picks a random element from a list of elements. If the first argument is an array,
       * it will be used as the list of elements. If the first argument is a value or a function,
       * the list of arguments will be used as the list.
       *
       * @param firstOrAll - A value T, a generator of T or an array of T.
       * @param ...values - The values to be used.
       */
      oneOf<T>(
        firstOrAll: T | Generator<T> | (T | Generator<T>)[],
        ...values: (T | Generator<T>)[]
      ): T;

      /**
       * It generates a random boolean value.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.boolean(); // true or false
       * ```
       */
      boolean(): boolean;

      /**
       * It sets the seed used to generate random numbers. Given a seed, it will always return the same sequence of numbers.
       *
       * @param value - The seed value to use.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * expect(fake.seed(1).number()).toBe(fake.seed(1).number()); // always returns the same sequence of numbers
       * ```
       */

      seed(value: number): this;

      /**
       * It unsets the seed used to generate random numbers.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * expect(fake.seed(1).unseed().number()).not.toBe(fake.seed(1).number()); // it removes the seed
       * ```
       */
      unseed(): this;

      /**
       * It extends the faker instance with the given extension. The extension will be added to the faker instance as a property on the given key.
       *
       * @param extensions - The extension to add.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {factory} from '@micra/faker/extensions/factory';
       *
       * fake.extend({factory}); // registers the factory extension
       * typeof fake.factory; // returns the factory function
       * ```
       */
      extend<K extends keyof Extensions>(
        extensions: Partial<Record<K, ExtensionFactory<K>>>,
      ): this;
    }

    /**
     * Faker.Instance is the main object that is used to generate fake data. It is the union of all the extensions that are registered with Faker's core.
     */
    type Instance = Core & Extensions;
  }
}

export {};
