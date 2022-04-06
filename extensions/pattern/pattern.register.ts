declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It generates a random string based on a pattern. The pattern can contain
       * # for numbers, ? for letters and * for either. The pattern can also be
       * escaped with a backslash. Any other character will be used as is.
       *
       * @param pattern - Pattern to be used to generate the string
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {pattern} from '@micra/faker/extensions/pattern';
       *
       * fake.extend({pattern});
       * fake.pattern('#?*escaped'); // '1a3escaped'
       * ```
       */
      pattern(pattern: string): string;
    }
  }
}

export {};
