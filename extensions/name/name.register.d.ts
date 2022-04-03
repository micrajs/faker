declare global {
  namespace Faker {
    type BinaryGender = 'male' | 'female';

    interface Extensions {
      /**
       * It generates a random full name.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {name} from '@micra/faker/extensions/name';
       *
       * fake.extend({name});
       * fake.name(); // 'John Smith'
       * ```
       */
      name(): string;
      /**
       * It generates a random full name based on a binary gender.
       *
       * @param binaryGender - Binary gender string.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {name} from '@micra/faker/extensions/name';
       *
       * fake.extend({name});
       * fake.name('female'); // 'Jane Doe'
       * ```
       */
      name(binaryGender: BinaryGender): string;
      name(binaryGender?: BinaryGender): string;

      /**
       * It generates a random first name.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {firstName} from '@micra/faker/extensions/name';
       *
       * fake.extend({firstName});
       * fake.firstName(); // 'John'
       * ```
       */
      firstName(): string;
      /**
       * It generates a random first name based on a binary gender.
       *
       * @param binaryGender - Binary gender
       *
       *  @example
       * ```ts
       * import fake from '@micra/faker';
       * import {firstName} from '@micra/faker/extensions/name';
       *
       * fake.extend({firstName});
       * fake.firstName('female'); // 'Jane'
       * ```
       */
      firstName(binaryGender: BinaryGender): string;
      firstName(binaryGender?: BinaryGender): string;

      /**
       * It generates a random last name.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {lastName} from '@micra/faker/extensions/name';
       *
       * fake.extend({lastName});
       * fake.lastName(); // 'Smith'
       * ```
       */
      lastName(): string;

      /**
       * It generates a random name suffix.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {nameSuffix} from '@micra/faker/extensions/name';
       *
       * fake.extend({nameSuffix});
       * fake.nameSuffix(); // 'Jr.'
       * ```
       */
      nameSuffix(): string;

      /**
       * It generates a random name prefix.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {namePrefix} from '@micra/faker/extensions/name';
       *
       * fake.extend({namePrefix});
       * fake.namePrefix(); // 'Mr.'
       */
      namePrefix(): string;
    }
  }
}

export {};
