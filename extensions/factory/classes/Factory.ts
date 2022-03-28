import {deepMerge} from '../utilities/deepMerge';
import {pick} from '../utilities/pick';
import {omit} from '../utilities/omit';
import {resolveArguments} from '../utilities/resolveArguments';
import {isFullDefinition} from '../utilities/isFullDefinition';

type MakeArguments<T> =
  | []
  | [number]
  | [Faker.FactoryOverwrite<T>]
  | [number, Faker.FactoryOverwrite<T>];

export class Factory<T, V extends string | undefined = undefined>
  implements Faker.Factory<T>
{
  private instances: Partial<Record<string, Factory<T>>> = {};

  constructor(
    private faker: Faker.Instance,
    private definition: Faker.FactoryDefinition<T, V>,
  ) {
    if (isFullDefinition(definition)) {
      Object.keys(definition.variants).forEach((key) => {
        const variant = definition.variants[key];
        Object.defineProperty(this, key, {
          get: () => {
            if (!this.instances[key]) {
              this.instances[key] = new Factory<T, string>(this.faker, {
                factory: () => this.make(variant),
                onPersist: definition.onPersist,
                variants: omit(definition.variants, [key]),
              });
            }

            return this.instances[key];
          },
        });
      });
    }
  }

  make(): T;
  make(overwrite: Faker.FactoryOverwrite<T>): T;
  make(count: number): T[];
  make(count: number, overwrite: Faker.FactoryOverwrite<T>): T[];
  make(...args: MakeArguments<T>): T | T[] {
    const options = resolveArguments(args);
    const generate = () =>
      deepMerge(
        this.definition.factory(this.faker),
        options.isFunction ? options.overwrite(this.faker) : options.overwrite,
      );

    const results = options.wantsArray
      ? Array.from({length: options.count}, generate)
      : generate();

    this.faker.unseed();

    return results;
  }

  only<K extends keyof T>(keys: K[]): Pick<T, K>;
  only<K extends keyof T>(
    keys: K[],
    overwrite: Faker.FactoryOverwrite<T>,
  ): Pick<T, K>;
  only<K extends keyof T>(keys: K[], count: number): Pick<T, K>[];
  only<K extends keyof T>(
    keys: K[],
    count: number,
    overwrite: Faker.FactoryOverwrite<T>,
  ): Pick<T, K>[];
  only<K extends keyof T>(
    keys: K[],
    ...args: MakeArguments<T>
  ): Pick<T, K> | Pick<T, K>[] {
    const results = (this.make as (...args: MakeArguments<T>) => T | T[])(
      ...args,
    );

    return Array.isArray(results)
      ? results.map((result) => pick(result, keys))
      : pick(results, keys);
  }

  except<K extends keyof T>(keys: K[]): Omit<T, K>;
  except<K extends keyof T>(
    keys: K[],
    overwrite: Faker.FactoryOverwrite<T>,
  ): Omit<T, K>;
  except<K extends keyof T>(keys: K[], count: number): Omit<T, K>[];
  except<K extends keyof T>(
    keys: K[],
    count: number,
    overwrite: Faker.FactoryOverwrite<T>,
  ): Omit<T, K>[];
  except<K extends keyof T>(
    keys: K[],
    ...args: MakeArguments<T>
  ): Omit<T, K> | Omit<T, K>[] {
    const results = (this.make as (...args: MakeArguments<T>) => T | T[])(
      ...args,
    );

    return Array.isArray(results)
      ? results.map((result) => omit(result, keys))
      : omit(results, keys);
  }

  persist(): Promise<T>;
  persist(overwrite: Faker.FactoryOverwrite<T>): Promise<T>;
  persist(count: number): Promise<T[]>;
  persist(count: number, overwrite: Faker.FactoryOverwrite<T>): Promise<T[]>;
  async persist(...args: MakeArguments<T>): Promise<T[] | T> {
    const results = (this.make as (...args: MakeArguments<T>) => T | T[])(
      ...args,
    );

    if (this.definition.onPersist) {
      const onPersist = this.definition.onPersist;
      const onPersistResults = async (result: T) =>
        deepMerge(result, (await onPersist(result)) ?? {});

      return Array.isArray(results)
        ? await Promise.all(results.map(onPersistResults))
        : await onPersistResults(results);
    }

    return results;
  }

  seed(value: number): this {
    this.faker.seed(value);

    return this;
  }

  unseed(): this {
    this.faker.unseed();

    return this;
  }
}
