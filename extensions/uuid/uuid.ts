/**
 * It register the uuid extension to the Faker instance.
 *
 * @param fake Faker instance
 *
 * @example
 * ```ts
 * import fake from '@micra/faker';
 * import {uuid} from '@micra/faker/extensions/uuid';
 *
 * fake.extend({uuid});
 * ```
 */
export function uuid(fake: Faker.Instance) {
  return (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (placeholder: string) => {
        const random = fake.number(0, 15);
        const value = placeholder == 'x' ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      },
    );
  };
}
