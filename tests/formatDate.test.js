const format = require("../src/formatDate");

test("Test formatDate Error non-object", () => {
  const date = "dfs";
  expect(() => format(date)).toThrow();
});

test("Test formatDate Error not a Date", () => {
  const date = new Array();
  expect(() => format(date)).toThrow();
});

test("Test formatDate Error Invalid Date", () => {
  const date = new Date("3dsa");
  expect(() => format(date)).toThrow();
});

test("Test formatDate", () => {
  //   const seconds = new Date("2020-04-29 21:43:00");
  //   const minutes = new Date("2020-04-29 21:00:00");
  const hours = new Date("2020-04-29 09:51:00");
  const days = new Date("2020-04-05 09:51:00");
  const months = new Date("2020-08-29 20:51:00");
  const years = new Date("2005-04-29 20:51:00");
  //   expect(format(seconds)).toBe("seconds");
  //   expect(format(minutes)).toBe("minutes");
  expect(format(hours)).toBe("12 часов назад");
  expect(format(days)).toBe("25 дней назад");
  expect(format(months)).toBe("Через 4 месяцев");
  expect(format(years)).toBe("15 лет назад");
});
