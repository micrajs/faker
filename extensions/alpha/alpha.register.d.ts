declare global {
  namespace Faker {
    interface Extensions {
      alpha: (length?: number) => string;
    }
  }
}

export {};
