import type {DataObject} from '../types';

export function omit<T, K extends keyof T>(value: T, keys: K[]): Omit<T, K> {
  return Object.keys(value)
    .filter((key) => !keys.includes(key as K))
    .reduce((acc: Omit<T, K>, key) => {
      (acc as DataObject)[key] = value[key as keyof T];

      return acc;
    }, {} as Omit<T, K>);
}
