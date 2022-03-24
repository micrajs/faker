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
    ) => Extensions[K];

    interface Core {
      /**
       * It generates a random integer between 0 and 99999 value.
       */
      number(): number;
      /**
       * It generates a random integer between 0 and a given `max` value.
       *
       * @param max - The maximum value.
       */
      number(max: number): number;
      /**
       * It generates a random integer between a `min` and a `max` value.
       *
       * @param min - The minimum value. Defaults to `0`.
       * @param max - The maximum value. Default: `99999`.
       */
      number(min: number, max: number): number;
      /**
       * It generates a random integer between a `min` and a `max` value, with a given precision.
       *
       * @param min - The minimum value. Defaults to `0`.
       * @param max - The maximum value. Defaults to `99999`.
       * @param precision - Precision of the generated number. Defaults to `1`.
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
       * It sets the seed used to generate random numbers. Given a seed, it will always return the same sequence of numbers.
       *
       * @param value - The seed value to use.
       */

      seed(value: number): this;
      /**
       * It unsets the seed used to generate random numbers.
       */
      unseed(): this;

      /**
       * It extends the faker instance with the given extension. The extension will be added to the faker instance as a property on the given key.
       *
       * @param key - Name of the extension
       * @param factory - Function that returns the extension
       */
      extend<K extends keyof Extensions>(
        key: K,
        factory: ExtensionFactory<K>,
      ): this;
    }

    /**
     * Faker.Instance is the main object that is used to generate fake data. It is the union of all the extensions that are registered with Faker's core.
     */
    type Instance = Core & Extensions;
  }
}

export {};
