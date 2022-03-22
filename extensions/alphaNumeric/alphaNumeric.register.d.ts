declare global {
  namespace Faker {
    interface Extensions {
      alphaNumeric: (length?: number) => string;
    }
  }
}

export {};
