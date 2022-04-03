import {months} from '@/data/data-sources/months';
import {weekdays} from '@/data/data-sources/weekdays';

const MIN_MS = 0;
const MAX_MS = 32503593600000;

/**
 * It register the date extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {date} from '@micra/faker/extensions/date';
 *
 * fake.extend('date', date);
 * ```
 */
export function date(fake: Faker.Instance) {
  return (maxOrMin?: number | Date, customMax?: number | Date): Date => {
    let min = MIN_MS;
    let max = MAX_MS;

    if (typeof maxOrMin !== 'undefined' && typeof customMax === 'undefined') {
      max = typeof maxOrMin === 'number' ? maxOrMin : maxOrMin.getTime();
    } else if (
      typeof maxOrMin !== 'undefined' &&
      typeof customMax !== 'undefined'
    ) {
      min = typeof maxOrMin === 'number' ? maxOrMin : maxOrMin.getTime();
      max = typeof customMax === 'number' ? customMax : customMax.getTime();
    }

    if (min > max) {
      [min, max] = [max, min];
    }

    return new Date(fake.number(min, max));
  };
}

/**
 * It register the futureDate extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {futureDate} from '@micra/faker/extensions/date';
 *
 * fake.extend('futureDate', futureDate);
 * ```
 */
export function futureDate(fake: Faker.Instance) {
  return (): Date => {
    return new Date(fake.number(Date.now(), MAX_MS));
  };
}

/**
 * It register the pastDate extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {pastDate} from '@micra/faker/extensions/date';
 *
 * fake.extend('pastDate', pastDate);
 * ```
 */
export function pastDate(fake: Faker.Instance) {
  return (): Date => {
    return new Date(fake.number(MIN_MS, Date.now()));
  };
}

/**
 * It register the month extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {month} from '@micra/faker/extensions/date';
 *
 * fake.extend('month', month);
 * ```
 */
export function month(fake: Faker.Instance) {
  return (): string => {
    return fake.oneOf(months);
  };
}

/**
 * It register the weekday extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {weekday} from '@micra/faker/extensions/date';
 *
 * fake.extend('weekday', weekday);
 * ```
 */
export function weekday(fake: Faker.Instance) {
  return (): string => {
    return fake.oneOf(weekdays);
  };
}
