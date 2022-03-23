declare global {
  namespace Faker {
    interface Extensions {
      pattern: (pattern: string) => string;
    }
  }
}

export {};
