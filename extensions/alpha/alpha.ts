export function alpha(fake: Faker.Instance) {
  return (length = 10): string => {
    const maxLength = Math.pow(2, 20);
    if (length >= maxLength) {
      length = maxLength;
    }

    const chars = [
      () => String.fromCharCode(fake.number(65, 90)),
      () => String.fromCharCode(fake.number(97, 122)),
    ];

    let returnString = '';
    for (let i = 0; i < length; i++) {
      returnString += chars[fake.number(chars.length - 1)]();
    }

    return returnString;
  };
}
