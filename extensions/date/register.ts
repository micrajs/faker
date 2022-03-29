import {date, futureDate, pastDate, weekday, month} from './date';
import faker from '../..';

faker.extend('date', date);
faker.extend('futureDate', futureDate);
faker.extend('pastDate', pastDate);
faker.extend('weekday', weekday);
faker.extend('month', month);

export default faker;
