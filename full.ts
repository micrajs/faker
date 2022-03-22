import faker from '@/data';
import {alpha} from '@/extensions/alpha';
import {alphaNumeric} from '@/extensions/alphaNumeric';
import {boolean} from '@/extensions/boolean';
import {float} from '@/extensions/float';
import {oneOf} from '@/extensions/oneOf';
import {string} from '@/extensions/string';
import {uuid} from '@/extensions/uuid';

faker.extend('alpha', alpha);
faker.extend('alphaNumeric', alphaNumeric);
faker.extend('boolean', boolean);
faker.extend('float', float);
faker.extend('oneOf', oneOf);
faker.extend('string', string);
faker.extend('uuid', uuid);

export * from '@/data';
