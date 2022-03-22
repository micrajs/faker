declare global {
  namespace Faker {
    interface Extensions {
      uuid: () => string;
    }
  }
}

export {};
