import {name, firstName, lastName, namePrefix, nameSuffix} from './name';
import faker from '../..';

faker.extend('name', name);
faker.extend('firstName', firstName);
faker.extend('lastName', lastName);
faker.extend('namePrefix', namePrefix);
faker.extend('nameSuffix', nameSuffix);

export default faker;
