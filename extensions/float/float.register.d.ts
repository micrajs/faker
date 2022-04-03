declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It generates a random float between 0 and 99999 value.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.float(); // number between 0 and 99999
       * ```
       */
      float(): number;
      /**
       * It generates a random float between 0 and a given `max` value.
       *
       * @param max - The maximum value.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {float} from '@micra/faker/extensions/float';
       *
       * fake.extend('float', float);
       * fake.float(9); // number between 0 and 9
       * ```
       */
      float(max: number): number;
      /**
       * It generates a random float between a `min` and a `max` value.
       *
       * @param min - The minimum value. Defaults to `0`.
       * @param max - The maximum value. Default: `99999`.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.float(2, 10); // number between 2 and 10
       * ```
       */
      float(min: number, max: number): number;
      /**
       * It generates a random float between a `min` and a `max` value, with a given precision.
       *
       * @param min - The minimum value. Defaults to `0`.
       * @param max - The maximum value. Defaults to `99999`.
       * @param precision - Precision of the generated number. Defaults to `0.01`.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       *
       * fake.float(2, 10, 0.1); // number between 2.0 and 10.0 with precision 0.1
       * ```
       */
      float(min: number, max: number, precision: number): number;
      /**
       * It generates a random float between a `min` and a `max` value, with a given precision.
       *
       * @param maxOrMin - The minimum or maximum value. If this is the only argument passed, it will be the maximum value. Defaults to `99999`.
       * @param max - The minimum value. Defaults to `0`.
       * @param precision - Precision of the generated number. Defaults to `0.01`.
       */
      float(maxOrMin?: number, max?: number, precision?: number): number;
    }
  }
}

export {};
