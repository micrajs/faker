export const DateDataSource = {
  getMonths: () => [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  getWeekdays: () => [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  getMonthsAbbreviation: () =>
    DateDataSource.getMonths().map((month) => month.substring(0, 3)),
  getWeekdaysAbbreviation: () =>
    DateDataSource.getWeekdays().map((weekday) => weekday.substring(0, 3)),
  getWeekdaysShort: () =>
    DateDataSource.getWeekdays().map((weekday) => weekday.substring(0, 2)),
  getWeekdaysMin: () =>
    DateDataSource.getWeekdays().map((weekday) => weekday.substring(0, 1)),
  getWeekdaysIndex: () =>
    DateDataSource.getWeekdays().map((_weekday, index) => index),
};
