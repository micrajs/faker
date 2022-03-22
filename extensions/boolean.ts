declare global {
  namespace Faker {
    interface Extensions {
      boolean: () => boolean;
    }
  }
}

export function boolean(fake: Faker.Instance) {
  return (): boolean => {
    return !!fake.number(1);
  };
}
