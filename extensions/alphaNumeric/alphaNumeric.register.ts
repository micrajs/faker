declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It generates a random string of length 10 containing letters and numbers.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {alphaNumeric} from '@micra/faker/extensions/alphaNumeric';
       *
       * fake.extend({alphaNumeric});
       * fake.alphaNumeric(); // "D798Wgy5nl" string of length 10 containing letters and numbers
       * ```
       */
      alphaNumeric(): string;
      /**
       * It generates a random string of a given length containing letters and numbers.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {alphaNumeric} from '@micra/faker/extensions/alphaNumeric';
       *
       * fake.extend({alphaNumeric});
       * fake.alphaNumeric(5); // "nad91" string of length 5 containing letters and numbers
       * ```
       */
      alphaNumeric(length: number): string;
      alphaNumeric(length?: number): string;
    }
  }
}

export {};
