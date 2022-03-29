declare global {
  namespace Faker {
    type BinaryGender = 'male' | 'female';

    interface Extensions {
      name: (gender?: BinaryGender) => string;
      firstName: (gender?: BinaryGender) => string;
      lastName: () => string;
      nameSuffix: () => string;
      namePrefix: () => string;
    }
  }
}

export {};
