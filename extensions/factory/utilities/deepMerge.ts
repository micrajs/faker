import type {DataObject} from '../types';

const isMergeableObject = (val: unknown) =>
  val &&
  typeof val === 'object' &&
  val.constructor.name === 'Object' &&
  Object.prototype.toString.call(val) !== '[object RegExp]' &&
  Object.prototype.toString.call(val) !== '[object Date]';

const emptyTarget = (val: DataObject) => (Array.isArray(val) ? [] : {});

const cloneIfNecessary = (value: DataObject) =>
  isMergeableObject(value) ? deepMerge(emptyTarget(value), value) : value;

const arrayMerge = (target: unknown[], source: unknown[]) =>
  target.length > source.length
    ? target.map((el: unknown, index: number) =>
        index < source.length ? source[index] : el,
      )
    : source.slice();

const mergeObject = (target: DataObject, source: DataObject) => {
  const destination: DataObject = target;

  Object.keys(source).forEach((key) => {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneIfNecessary(source[key] as DataObject);
    } else {
      destination[key] = deepMerge(
        target[key] as DataObject,
        source[key] as Faker.DeepPartial<DataObject>,
      );
    }
  });

  return destination;
};

export const deepMerge = <T>(target: T, source: Faker.DeepPartial<T>): T => {
  if (
    (target == null && source == null) ||
    typeof target !== typeof source ||
    Array.isArray(target) !== Array.isArray(source)
  ) {
    throw new Error('Cannot merge two distinct elements');
  }

  return Array.isArray(source)
    ? (arrayMerge(target as unknown as unknown[], source) as unknown as T)
    : (mergeObject(target, source) as T);
};
