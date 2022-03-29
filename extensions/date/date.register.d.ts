declare global {
  namespace Faker {
    interface Extensions {
      date: (maxOrMin?: number | Date, max?: number | Date) => Date;
      futureDate: () => Date;
      pastDate: () => Date;
      month: () => string;
      weekday: () => string;
    }
  }
}

export {};
