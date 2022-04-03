declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It generates a random string of length 10 containing only letters.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {alpha} from '@micra/faker/extensions/alpha';
       *
       * fake.extend('alpha', alpha);
       * fake.alpha(); // "OgegCljhGy" string of length 10 containing only letters
       * ```
       */
      alpha(): string;
      /**
       * It generates a random string with a given length containing only letters.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {alpha} from '@micra/faker/extensions/alpha';
       *
       * fake.extend('alpha', alpha);
       * fake.alpha(5); // "nJaIp" string of length 5 containing only letters
       * ```
       */
      alpha(length: number): string;
      alpha(length?: number): string;
    }
  }
}

export {};
