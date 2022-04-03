import {name, firstName, lastName, namePrefix, nameSuffix} from './name';
import faker from '../..';

faker.extend({
  name,
  firstName,
  lastName,
  namePrefix,
  nameSuffix,
});

export default faker;
