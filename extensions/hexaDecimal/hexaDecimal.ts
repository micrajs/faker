const elements = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

export function hexaDecimal(fake: Faker.Instance) {
  return (length = 1): string => {
    const parts: string[] = ['0x'];

    for (let i = 0; i < length; i += 1) {
      parts.push(elements[fake.number(elements.length - 1)]);
    }

    return parts.join('');
  };
}
