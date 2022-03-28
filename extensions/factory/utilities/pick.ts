export function pick<T, K extends keyof T>(value: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    acc[key] = value[key];

    return acc;
  }, {} as Pick<T, K>);
}
