import {Factory} from './classes/Factory';
import {isFactoryDefinition} from './utilities/isFactoryDefinition';

export function factory(fake: Faker.Instance): Faker.Extensions['factory'] {
  return <T, V extends string | undefined = string>(
    definition: Faker.Generator<T> | Faker.FactoryDefinition<T, V>,
  ) => {
    if (typeof definition === 'function') {
      return new Factory<T>(fake, {
        factory: definition,
      });
    }

    if (isFactoryDefinition(definition)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return new Factory<T>(fake, definition) as any;
    }

    throw new Error('Invalid factory definition.');
  };
}
