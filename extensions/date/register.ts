import {date, futureDate, pastDate, weekday, month} from './date';
import faker from '../..';

faker.extend({
  date,
  futureDate,
  pastDate,
  weekday,
  month,
});

export default faker;
