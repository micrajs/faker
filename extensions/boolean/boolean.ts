export function boolean(fake: Faker.Instance) {
  return (): boolean => {
    return !!fake.number(1);
  };
}
