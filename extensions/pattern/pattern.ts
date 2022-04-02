export function pattern(fake: Faker.Instance) {
  return (pattern = ''): string => {
    return pattern
      .split('')
      .map((char) => {
        if (char === '#') {
          return fake.number(9);
        } else if (char === '?') {
          return String.fromCharCode(fake.number(65, 90));
        } else if (char === '*') {
          return fake.boolean()
            ? fake.number(9)
            : String.fromCharCode(fake.number(65, 90));
        }

        return char;
      })
      .join('');
  };
}
