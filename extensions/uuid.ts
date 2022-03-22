declare global {
  namespace Faker {
    interface Extensions {
      uuid: () => string;
    }
  }
}

export function uuid(fake: Faker.Instance) {
  return (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (placeholder: string) => {
        const random = fake.number(0, 15);
        const value = placeholder == 'x' ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      },
    );
  };
}
