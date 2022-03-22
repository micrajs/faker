declare global {
  namespace Faker {
    interface Extensions {
      string: (length?: number) => string;
    }
  }
}

export {};
