import {uuid} from './uuid';
import faker from '../..';

faker.extend('uuid', uuid);

export default faker;
