import {DateDataSource} from '@/data/data-sources/DateDataSource';
import {randomValueFromArray} from '@/data/utilities/randomValueFromArray';

const MIN_MS = 0;
const MAX_MS = 32503593600000;

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

    const time = fake.number(min, max);

    return new Date(time);
  };
}

export function futureDate(fake: Faker.Instance) {
  return (): Date => {
    const time = fake.number(Date.now(), MAX_MS);

    return new Date(time);
  };
}

export function pastDate(fake: Faker.Instance) {
  return (): Date => {
    const time = fake.number(MIN_MS, Date.now());

    return new Date(time);
  };
}

export function month(fake: Faker.Instance) {
  return (): string => {
    return randomValueFromArray(fake, DateDataSource.months());
  };
}

export function weekday(fake: Faker.Instance) {
  return (): string => {
    return randomValueFromArray(fake, DateDataSource.weekdays());
  };
}
