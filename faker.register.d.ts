declare global {
  namespace Faker {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Extensions {}

    type Generator<T> = (faker: Faker.Instance) => T;

    interface Locales {
      en: 'en';
    }

    interface Internal {
      locale: keyof Locales;
      seedValue: number | null;
      mersenne: {
        rand(max: number, min: number): number;
        seed(seed: number): void;
        unseed(): void;
      };
    }

    type StaticExtension<K extends keyof Extensions> = (
      faker: Instance,
    ) => Extensions[K];

    interface Core {
      extend<K extends keyof Extensions>(
        key: K,
        value: StaticExtension<K>,
      ): this;
      seed(value: number): this;
      setLocale<K extends keyof Locales>(locale: K): this;
      unseed(): this;
      number: (maxOrMin?: number, max?: number, precision?: number) => number;
    }

    type Instance = Core & Extensions;
  }
}

export {};
