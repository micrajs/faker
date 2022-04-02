import {months} from '@/data/data-sources/months';
import {weekdays} from '@/data/data-sources/weekdays';

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

    return new Date(fake.number(min, max));
  };
}

export function futureDate(fake: Faker.Instance) {
  return (): Date => {
    return new Date(fake.number(Date.now(), MAX_MS));
  };
}

export function pastDate(fake: Faker.Instance) {
  return (): Date => {
    return new Date(fake.number(MIN_MS, Date.now()));
  };
}

export function month(fake: Faker.Instance) {
  return (): string => {
    return fake.oneOf(months);
  };
}

export function weekday(fake: Faker.Instance) {
  return (): string => {
    return fake.oneOf(weekdays);
  };
}
