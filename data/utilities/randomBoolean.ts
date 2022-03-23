export function randomBoolean(fake: Faker.Instance) {
  return !!fake.number(1); // true or false
}
