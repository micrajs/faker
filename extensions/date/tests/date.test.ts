import {date, futureDate, pastDate, weekday, month} from '../date';
import {Faker} from '../../..';

describe('date extension tests', () => {
  it('should generate dates', () => {
    const fake = Faker();
    fake.extend({date});

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
    fake.extend({pastDate});

    expect(fake.pastDate()).instanceOf(Date);
    expect(fake.pastDate() < new Date()).toBeTruthy();
  });

  it('should generate future dates', () => {
    const fake = Faker();
    fake.extend({futureDate});

    expect(fake.futureDate()).instanceOf(Date);
    expect(fake.futureDate() > new Date()).toBeTruthy();
  });

  it('should generate months', () => {
    const fake = Faker();
    fake.extend({month});

    expect(typeof fake.month()).toBe('string');
    expect(fake.seed(1).month()).toBe(fake.seed(1).month());
  });

  it('should generate weekdays', () => {
    const fake = Faker();
    fake.extend({weekday});

    expect(typeof fake.weekday()).toBe('string');
    expect(fake.seed(1).weekday()).toBe(fake.seed(1).weekday());
  });
});
