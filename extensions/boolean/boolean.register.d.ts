declare global {
  namespace Faker {
    interface Extensions {
      boolean: () => boolean;
    }
  }
}

export {};
