import {date, futureDate, pastDate} from '../date';
import {Faker} from '../../..';

describe('date extension tests', () => {
  it('should generate dates', () => {
    const fake = Faker();
    fake.extend('date', date);

    expect(fake.date()).instanceOf(Date);
    expect(fake.date(10) <= new Date(10)).toBeTruthy();

    const lessThanGreaterThan = fake.date(2, 10);
    expect(lessThanGreaterThan <= new Date(10)).toBeTruthy();
    expect(lessThanGreaterThan >= new Date(2)).toBeTruthy();

    expect(fake.seed(1).date().getTime()).toBe(fake.seed(1).date().getTime());
    expect(fake.seed(1).date().getTime()).not.toBe(
      fake.seed(1).unseed().date().getTime(),
    );
  });

  it('should generate past dates', () => {
    const fake = Faker();
    fake.extend('pastDate', pastDate);

    expect(fake.pastDate()).instanceOf(Date);
    expect(fake.pastDate() < new Date()).toBeTruthy();
  });

  it('should generate future dates', () => {
    const fake = Faker();
    fake.extend('futureDate', futureDate);

    expect(fake.futureDate()).instanceOf(Date);
    expect(fake.futureDate() > new Date()).toBeTruthy();
  });
});
