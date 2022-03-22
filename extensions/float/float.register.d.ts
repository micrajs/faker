declare global {
  namespace Faker {
    interface Extensions {
      float: (maxOrMin?: number, max?: number, precision?: number) => number;
    }
  }
}

export {};
