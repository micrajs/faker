export function randomUpperCase(fake: Faker.Instance) {
  return String.fromCharCode(fake.number(65, 90)); // A-Z
}
