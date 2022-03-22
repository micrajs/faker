export function float(fake: Faker.Instance) {
  return (maxOrMin?: number, max?: number, precision = 0.01): number => {
    return fake.number(maxOrMin, max, precision);
  };
}
