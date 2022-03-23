export function randomLowerCase(fake: Faker.Instance) {
  return String.fromCharCode(fake.number(97, 122)); // a-z
}
