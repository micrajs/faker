import {NameDataSource} from '@/data/data-sources/NameDataSource';
import {randomValueFromArray} from '@/data/utilities/randomValueFromArray';

const fullNameStructures = [
  (fake: Faker.Instance) =>
    `${randomValueFromArray(
      fake,
      NameDataSource.femaleFirstName(),
    )} ${randomValueFromArray(fake, NameDataSource.lastName())}`,
  (fake: Faker.Instance) =>
    `${randomValueFromArray(
      fake,
      NameDataSource.maleFirstName(),
    )} ${randomValueFromArray(fake, NameDataSource.lastName())}`,
  (fake: Faker.Instance) =>
    `${randomValueFromArray(
      fake,
      NameDataSource.prefix(),
    )} ${randomValueFromArray(
      fake,
      NameDataSource.firstName(),
    )} ${randomValueFromArray(fake, NameDataSource.lastName())}`,
  (fake: Faker.Instance) =>
    `${randomValueFromArray(
      fake,
      NameDataSource.firstName(),
    )} ${randomValueFromArray(
      fake,
      NameDataSource.lastName(),
    )} ${randomValueFromArray(fake, NameDataSource.suffix())}`,
  (fake: Faker.Instance) =>
    `${randomValueFromArray(
      fake,
      NameDataSource.firstName(),
    )} ${randomValueFromArray(fake, NameDataSource.lastName())}`,
  (fake: Faker.Instance) =>
    `${randomValueFromArray(
      fake,
      NameDataSource.firstName(),
    )} ${randomValueFromArray(fake, NameDataSource.lastName())}`,
];

export function name(fake: Faker.Instance): Faker.Extensions['name'] {
  return (gender): string => {
    if (gender === 'female') {
      return fullNameStructures[0](fake);
    }

    if (gender === 'male') {
      return fullNameStructures[1](fake);
    }

    return randomValueFromArray(fake, fullNameStructures)(fake);
  };
}

export function firstName(fake: Faker.Instance): Faker.Extensions['firstName'] {
  return (gender): string => {
    if (gender === 'female') {
      return randomValueFromArray(fake, NameDataSource.femaleFirstName());
    }

    if (gender === 'male') {
      return randomValueFromArray(fake, NameDataSource.maleFirstName());
    }

    return randomValueFromArray(fake, NameDataSource.firstName());
  };
}

export function lastName(fake: Faker.Instance): Faker.Extensions['lastName'] {
  return (): string => {
    return randomValueFromArray(fake, NameDataSource.lastName());
  };
}

export function namePrefix(
  fake: Faker.Instance,
): Faker.Extensions['namePrefix'] {
  return (): string => {
    return randomValueFromArray(fake, NameDataSource.prefix());
  };
}

export function nameSuffix(
  fake: Faker.Instance,
): Faker.Extensions['nameSuffix'] {
  return (): string => {
    return randomValueFromArray(fake, NameDataSource.suffix());
  };
}
