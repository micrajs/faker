export function hexaDecimal(fake: Faker.Instance) {
  return (length = 1): string => {
    const parts: (string | number)[] = ['0x'];

    for (let i = 0; i < length; i += 1) {
      parts.push(
        fake.oneOf<string | number>(
          () => fake.number(9),
          () => String.fromCharCode(fake.number(65, 70)),
          () => String.fromCharCode(fake.number(97, 102)),
        ),
      );
    }

    return parts.join('');
  };
}
