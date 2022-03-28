export function isObjectOrFunction<T>(value: unknown): value is T {
  return (
    typeof value === 'function' ||
    (value != null && typeof value === 'object' && !Array.isArray(value))
  );
}
