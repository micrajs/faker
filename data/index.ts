import {FakerCore} from './classes/FakerCore';

export function Faker() {
  // TypeScript computes the types defined in the extensions error as FakerCore is missing the implementation provided by the extensions.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new FakerCore() as any as Faker.Instance;
}

export default Faker();
export * from './classes/FakerCore';
