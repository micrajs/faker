import {isObjectOrFunction} from './isObjectOrFunction';

type FactoryOptions<T> =
  | {
      count: number;
      overwrite: Faker.PartialGenerator<T>;
      wantsArray: boolean;
      isFunction: true;
    }
  | {
      count: number;
      overwrite: Faker.DeepPartial<T>;
      wantsArray: boolean;
      isFunction: false;
    };

export function resolveArguments<T>(
  args:
    | []
    | [number]
    | [Faker.FactoryOverwrite<T>]
    | [number, Faker.FactoryOverwrite<T>],
) {
  const options: Partial<FactoryOptions<T>> = {
    count: 1,
    wantsArray: false,
  };

  if (args.length === 1) {
    if (typeof args[0] === 'number') {
      options.count = args[0];
      options.wantsArray = true;
      options.isFunction = false;
      options.overwrite = {};
    } else if (isObjectOrFunction(args[0])) {
      options.overwrite = args[0];
      options.isFunction = typeof args[0] === 'function';
    }
  } else if (args.length === 2) {
    options.wantsArray = true;
    options.count = args[0] > 0 ? args[0] : 1;
    options.isFunction = typeof args[1] === 'function';
    options.overwrite = isObjectOrFunction(args[1]) ? args[1] : {};
  } else {
    options.overwrite = {};
    options.isFunction = false;
  }

  return options as FactoryOptions<T>;
}
