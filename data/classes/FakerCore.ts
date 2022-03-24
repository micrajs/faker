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
    key: K,
    extensionFactory: Faker.ExtensionFactory<K>,
  ): this {
    const self = this as unknown as Faker.Extensions;
    if (!self[key]) {
      self[key] = extensionFactory(self as Faker.Instance);
    }

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
}
