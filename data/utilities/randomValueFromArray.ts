// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function randomValueFromArray<T extends any[]>(
  fake: Faker.Instance,
  arr: T,
): T[number] {
  return arr[fake.number(arr.length - 1)];
}
