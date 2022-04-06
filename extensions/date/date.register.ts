declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It generates a random date between 1970-01-01T00:00:00.000Z and 2999-12-31T00:00:00.000Z.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {date} from '@micra/faker/extensions/date';
       *
       * fake.extend({date});
       * fake.date(); // "2563-09-24T11:43:02.784Z"
       * ```
       */
      date(): Date;
      /**
       * It generates a random date between 1970-01-01T00:00:00.000Z and 2999-12-31T00:00:00.000Z.
       *
       * @param max - The maximum date.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {date} from '@micra/faker/extensions/date';
       *
       * fake.extend({date});
       * fake.date(new Date('2022-02-02')); // Date("2020-03-16T15:38:59.735Z") => Date between 1970-01-01 and 2022-02-02
       * ```
       */
      date(max: number | Date): Date;
      /**
       * It generates a random date between 1970-01-01T00:00:00.000Z and 2999-12-31T00:00:00.000Z.
       *
       * @param max - The maximum date.
       * @param min - The minimum date.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {date} from '@micra/faker/extensions/date';
       *
       * fake.extend({date});
       * fake.date(new Date('2022-02-02'), new Date('2023-02-02')); // Date("2023-01-28T06:54:47.670Z") => Date between 2022-02-02 and 2023-02-02
       * ```
       */
      date(min: number | Date, max: number | Date): Date;
      date(maxOrMin?: number | Date, max?: number | Date): Date;

      /**
       * It generates a random date between now and 2999-12-31T00:00:00.000Z.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {futureDate} from '@micra/faker/extensions/date';
       *
       * fake.extend({futureDate});
       * fake.futureDate(); // "2522-02-02T11:43:02.784Z"
       * ```
       */
      futureDate(): Date;

      /**
       * It generates a random date between 1970-01-01T00:00:00.000Z and now.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {pastDate} from '@micra/faker/extensions/date';
       *
       * fake.extend({futureDate});
       * fake.pastDate(); // "1984-05-06T12:44:02.854Z"
       * ```
       */
      pastDate(): Date;

      /**
       * It generates a random month name.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {month} from '@micra/faker/extensions/date';
       *
       * fake.extend({month});
       * fake.month(); // "January"
       * ```
       */
      month(): string;

      /**
       * It generates a random weekday name.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {weekday} from '@micra/faker/extensions/date';
       *
       * fake.extend({weekday});
       * fake.weekday(); // "Tuesday"
       * ```
       */
      weekday(): string;
    }
  }
}

export {};
