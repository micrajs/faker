export function string(fake: Faker.Instance) {
  return (length = 10): string => {
    const maxLength = Math.pow(2, 20);
    if (length >= maxLength) {
      length = maxLength;
    }

    let returnString = '';
    for (let i = 0; i < length; i++) {
      returnString += String.fromCharCode(fake.number(33, 125));
    }

    return returnString;
  };
}
