declare global {
  namespace Faker {
    interface Extensions {
      hexaDecimal: (length?: number) => string;
    }
  }
}

export {};
