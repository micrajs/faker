/// <reference types="../../faker.register" />
import {Mersenne} from '../utilities/mersenne';

interface Internal {
  seedValue: number | null;
  mersenne: {
    rand(max: number, min: number): number;
    seed(seed: number): void;
    unseed(): void;
  };
}

const INTERNAL = Symbol.for('FAKER.INTERNAL');

export class FakerCore implements Faker.Core {
  [INTERNAL]: Internal = {
    seedValue: null,
    mersenne: Mersenne(),
  };

  extend<K extends keyof Faker.Extensions>(
    extensions: Partial<Record<K, Faker.ExtensionFactory<K>>>,
  ): this {
    const self = this as unknown as Faker.Instance;
    Object.entries(extensions).forEach(([key, extension]) => {
      if (!self[key as K]) {
        self[key as K] = (extension as Faker.ExtensionFactory<K>)(
          this as unknown as Faker.Instance,
        );
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            `[Faker] Extension "${key}" already exists and will not be overwritten.`,
          );
        }
      }
    });

    return this;
  }

  seed(value: number): this {
    this[INTERNAL].mersenne.seed(value);
    return this;
  }

  unseed(): this {
    this[INTERNAL].mersenne.unseed();
    return this;
  }

  number(maxOrMin?: number, customMax?: number, precision = 1) {
    let min = 0;
    let max = 99999;

    if (typeof maxOrMin !== 'undefined' && typeof customMax === 'undefined') {
      max = maxOrMin;
    } else if (
      typeof maxOrMin !== 'undefined' &&
      typeof customMax !== 'undefined'
    ) {
      min = maxOrMin;
      max = customMax;
    }

    if (min > max) {
      [min, max] = [max, min];
    }

    if (max >= 0) {
      max += precision;
    }

    const randomNumber = Math.floor(
      this[INTERNAL].mersenne.rand(max / precision, min / precision),
    );

    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01
    return randomNumber / (1 / precision);
  }

  oneOf<T>(
    firstOrAll: T | Faker.Generator<T> | (T | Faker.Generator<T>)[],
    ...values: (T | Faker.Generator<T>)[]
  ): T {
    const all = Array.isArray(firstOrAll)
      ? firstOrAll
      : [firstOrAll, ...values];

    const arg = all[this.number(all.length - 1)];

    return typeof arg !== 'function'
      ? arg
      : (arg as Faker.Generator<T>)(this as unknown as Faker.Instance);
  }

  string(length = 10): string {
    const maxLength = Math.pow(2, 20);
    if (length >= maxLength) {
      length = maxLength;
    }

    const returnString: (string | number)[] = [];
    for (let i = 0; i < length; i++) {
      returnString.push(String.fromCharCode(this.number(33, 125)));
    }

    return returnString.join('');
  }

  boolean(): boolean {
    return !!this.number(1);
  }
}
