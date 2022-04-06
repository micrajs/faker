declare global {
  namespace Faker {
    interface Extensions {
      /**
       * It creates a new factory that can be used to generate random values of the specified type.
       *
       * @param generator - The generator function that will be used to generate the object.
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {factory} from '@micra/faker/extensions/factory';
       *
       * fake.extend({factory});
       *
       * interface User {
       *  name: string;
       *  age: number;
       * }
       *
       * const factory = fake.factory<User>((fake) => ({
       *  name: fake.string(),
       *  age: fake.number(),
       * }));
       * ```
       */
      factory<T>(generator: Generator<T>): Factory<T>;
      /**
       * It creates a new factory that can be used to generate random values of the specified type.
       *
       * @param definition - The options of a given factory, excluding variants.
       * @link Faker.PartialFactoryDefinition
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {factory} from '@micra/faker/extensions/factory';
       *
       * fake.extend({factory});
       *
       * interface User {
       *  name: string;
       *  age: number;
       * }
       *
       * const factory = fake.factory<User>({
       *  factory: (fake) => ({
       *   name: fake.string(),
       *   age: fake.number(),
       *  })
       *  onPersist: async (user) => {
       *    // do something with the user
       *  },
       * });
       * ```
       */
      factory<T>(definition: PartialFactoryDefinition<T>): Factory<T>;
      /**
       * It creates a new factory that can be used to generate random values of the specified type.
       *
       * @param definition - The options of a given factory, including variants.
       * @see Faker.FullFactoryDefinition
       *
       * @example
       * ```ts
       * import fake from '@micra/faker';
       * import {factory} from '@micra/faker/extensions/factory';
       *
       * fake.extend({factory});
       *
       * interface User {
       *  name: string;
       *  age: number;
       * }
       *
       * type UserFactoryVariants = 'john';
       *
       * const factory = fake.factory<User, UserFactoryVariants>({
       *  factory: (fake) => ({
       *   name: fake.string(),
       *   age: fake.number(),
       *  })
       *  variants: {
       *   john: () => ({name: 'John'}),
       *  },
       * });
       * ```
       */
      factory<T, V extends string>(
        definition: FullFactoryDefinition<T, V>,
      ): ExtendedFactory<T, V>;
    }

    /**
     * Recursive type that represents a factory that is extended by its variants.
     */
    type ExtendedFactory<T, V extends string> = Factory<T> & {
      [Var in V]: ExtendedFactory<T, Exclude<V, Var>>;
    };

    /**
     * A factory is a function that generates a partial value of a given type.
     */
    type PartialGenerator<T> = (fake: Instance) => DeepPartial<T>;

    /**
     * It defines the options of a given factory.
     *
     * @see Faker.FullFactoryDefinition
     * @see Faker.PartialFactoryDefinition
     */
    type FactoryDefinition<
      T,
      V extends string | undefined = undefined,
    > = V extends string
      ? FullFactoryDefinition<T, V>
      : PartialFactoryDefinition<T>;

    /**
     * It defines the options of a given factory, excluding variants.
     */
    type PartialFactoryDefinition<T> = {
      /**
       * The generator function that will be used to generate the object.
       */
      factory: Generator<T>;
      /**
       * The function that will be called when the data is persisted.
       */
      onPersist?: (data: T) => Promise<DeepPartial<T> | void>;
    };

    /**
     * It defines the options of a given factory, including variants.
     */
    type FullFactoryDefinition<T, V extends string> = {
      /**
       * The generator function that will be used to generate the data.
       */
      factory: Generator<T>;
      /**
       * The variants of the factory.
       */
      variants: Record<V, PartialGenerator<T>>;
      /**
       * The function that will be called when the data is persisted.
       */
      onPersist?: (data: T) => Promise<DeepPartial<T> | void>;
    };

    /**
     * Defines the data that will be used to overwrite the generated data. It can be either a partial of T or a function that returns a partial of T.
     */
    type FactoryOverwrite<T> = DeepPartial<T> | PartialGenerator<T>;

    /**
     * It generates structured fake data based on a given definition.
     */
    interface Factory<T> {
      /**
       * It generates a new instance of the factory and returns it.
       */
      make(): T;
      /**
       * It generates a new instance of the factory and returns it after merging with the overwritten definition.
       *
       * @param overwrite - The data to overwrite the factory with.
       */
      make(overwrite: FactoryOverwrite<T>): T;
      /**
       * It generates a given number of instances of the factory and returns it.
       *
       * @param count - The number of instances to generate.
       */
      make(count: number): T[];
      /**
       * It generates a given number of instances of the factory and returns it after merging with the overwritten definition.
       *
       * @param count - The number of instances to generate.
       * @param overwrite - The data to overwrite the factory with.
       */
      make(count: number, overwrite: FactoryOverwrite<T>): T[];

      /**
       * It generates a new instance of the factory and returns only the selected properties.
       *
       * @param keys - The keys to return from the factory.
       */
      only<K extends keyof T>(keys: K[]): Pick<T, K>;
      /**
       * It generates a new instance of the factory and returns only the selected properties after merging with the overwritten definition.
       *
       * @param keys - The keys to return from the factory.
       * @param overwrite - The data to overwrite the factory with.
       */
      only<K extends keyof T>(
        keys: K[],
        overwrite: FactoryOverwrite<T>,
      ): Pick<T, K>;
      /**
       * It generates a given number of instances of the factory and returns only the selected properties.
       *
       * @param keys - The keys to return from the factory.
       * @param count - The number of instances to generate.
       */
      only<K extends keyof T>(keys: K[], count: number): Pick<T, K>[];
      /**
       * It generates a given number of instances of the factory and returns only the selected properties after merging with the overwritten definition.
       *
       * @param keys - The keys to return from the factory.
       * @param count - The number of instances to generate.
       * @param overwrite - The data to overwrite the factory with.
       */
      only<K extends keyof T>(
        keys: K[],
        count: number,
        overwrite: FactoryOverwrite<T>,
      ): Pick<T, K>[];

      /**
       * It generates a new instance of the factory and returns all properties except the selected ones.
       *
       * @param keys - The keys to exclude from the factory.
       */
      except<K extends keyof T>(keys: K[]): Omit<T, K>;
      /**
       * It generates a new instance of the factory and returns all properties except the selected ones after merging with the overwritten definition.
       *
       * @param keys - The keys to exclude from the factory.
       * @param overwrite - The data to overwrite the factory with.
       */
      except<K extends keyof T>(
        keys: K[],
        overwrite: FactoryOverwrite<T>,
      ): Omit<T, K>;
      /**
       * It generates a given number of instances of the factory and returns all properties except the selected ones.
       *
       * @param keys - The keys to exclude from the factory.
       * @param count - The number of instances to generate.
       */
      except<K extends keyof T>(keys: K[], count: number): Omit<T, K>[];
      /**
       * It generates a given number of instances of the factory and returns all properties except the selected ones after merging with the overwritten definition.
       *
       * @param keys - The keys to exclude from the factory.
       * @param count - The number of instances to generate.
       * @param overwrite - The data to overwrite the factory with.
       */
      except<K extends keyof T>(
        keys: K[],
        count: number,
        overwrite: FactoryOverwrite<T>,
      ): Omit<T, K>[];

      /**
       * It generates a new instance of the factory and returns it, executing the `onPersist` options if it exists. This is useful for generating a new instances of the factory and persisting it to databases. The response from the `onPersist` function is merged onto the generated data. This allows it to account for any data generated by the database (e.g. timestamps and IDs).
       */
      persist(): Promise<T>;
      /**
       * It generates a new instance of the factory and returns it after merging with the overwritten definition. Before returning, it executes the `onPersist` options if it exists. This is useful for generating a new instances of the factory and persisting it to databases. The response from the `onPersist` function is merged onto the generated data. This allows it to account for any data generated by the database (e.g. timestamps and IDs).
       *
       * @param overwrite - The data to overwrite the generated data with.
       */
      persist(overwrite: FactoryOverwrite<T>): Promise<T>;
      /**
       * It generates given number of instances of the factory and returns it, executing the `onPersist` options if it exists. This is useful for generating a new instances of the factory and persisting it to databases. The response from the `onPersist` function is merged onto the generated data. This allows it to account for any data generated by the database (e.g. timestamps and IDs).
       *
       * @param count - The number of instances to generate.
       */
      persist(count: number): Promise<T[]>;
      /**
       * It generates a given number of instances of the factory and returns it after merging with the overwritten definition. Before returning, it executes the `onPersist` options if it exists. This is useful for generating a new instances of the factory and persisting it to databases. The response from the `onPersist` function is merged onto the generated data. This allows it to account for any data generated by the database (e.g. timestamps and IDs).
       *
       * @param count - The number of instances to generate.
       * @param overwrite - The data to overwrite the generated data with.
       */
      persist(count: number, overwrite: FactoryOverwrite<T>): Promise<T[]>;

      /**
       * It sets the seed used to generate random numbers. Given a seed, it will always return the same sequence of numbers.
       *
       * @param value - The seed value to use.
       */

      seed(value: number): this;

      /**
       * It unsets the seed used to generate random numbers.
       */
      unseed(): this;
    }

    type DeepPartial<T> = {
      [P in keyof T]?: Partial<T[P]> | DeepPartial<T[P]>;
    };
  }
}

export {};
