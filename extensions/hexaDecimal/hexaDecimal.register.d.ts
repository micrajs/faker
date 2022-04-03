declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It generates a random hexadecimal number.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {hexadecimal} from '@micra/faker/extensions/hexadecimal';
       *
       * fake.extend({hexadecimal});
       * fake.hexadecimal(); // string between 0x0 and 0xF
       * ```
       */
      hexadecimal(): string;
      /**
       * It generates a random hexadecimal number with a given length.
       *
       * @param length - The length of the generated string.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {hexadecimal} from '@micra/faker/extensions/hexadecimal';
       *
       * fake.extend({hexadecimal});
       * fake.hexadecimal(2); // "0x0F"
       * ```
       */
      hexadecimal(length: number): string;
      hexadecimal(length?: number): string;
    }
  }
}

export {};
