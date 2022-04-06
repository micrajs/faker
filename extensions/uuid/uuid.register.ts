declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It generates a random uuid.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {uuid} from '@micra/faker/extensions/uuid';
       *
       * fake.extend({uuid});
       * fake.uuid(); // 'f8d8e8a4-f9a6-4d0b-b8a4-f8d8e8a4f9a6'
       * ```
       */
      uuid(): string;
    }
  }
}

export {};
