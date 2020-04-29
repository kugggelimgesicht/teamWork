/**
 * @description format date
 * @param {Date} date comming date
 * @throws {Error} non-Date
 * @throws {Error} Invalid Date
 * @throws {Error}
 * @returns {string} formatted date
 */
function formatDate(date) {
  if (typeof date != "object") {
    throw new Error("non-object!");
  }
  if (!(date instanceof Date)) {
    throw new Error("Non-date");
  }
  if (date.toString() === "Invalid Date") {
    throw new Error("Invalid Date!");
  }

  if (date < new Date()) {
    if (new Date() - date <= 1000 * 59) {
      return Math.round((new Date() - date) / 1000) + " секунд назад";
    }
    if (new Date() - date > 1000 * 59 && new Date() - date <= 1000 * 59 * 60) {
      return Math.round((new Date() - date) / (1000 * 59)) + " минут назад";
    }
    if (
      new Date() - date > 1000 * 59 * 60 &&
      new Date() - date <= 1000 * 59 * 60 * 24
    ) {
      return (
        Math.round((new Date() - date) / (1000 * 59 * 60)) + " часов назад"
      );
    }
    if (
      new Date() - date > 1000 * 59 * 60 * 24 &&
      new Date() - date <= 1000 * 59 * 60 * 24 * 30
    ) {
      return (
        Math.round((new Date() - date) / (1000 * 59 * 60 * 24)) + " дней назад"
      );
    }
    if (
      new Date() - date > 1000 * 59 * 60 * 24 * 30 &&
      new Date() - date <= 1000 * 59 * 60 * 24 * 30 * 12
    ) {
      return (
        Math.round((new Date() - date) / (1000 * 59 * 60 * 24 * 30)) +
        " месяцев назад"
      );
    }
    if (new Date() - date > 1000 * 59 * 60 * 24 * 30 * 12) {
      return (
        Math.round((new Date() - date) / (1000 * 59 * 60 * 24 * 30 * 12)) +
        " лет назад"
      );
    }
  }

  if (date > new Date()) {
    if (date - new Date() <= 1000 * 59) {
      return "Через " + Math.round((date - new Date()) / 1000) + " секунд";
    }
    if (date - new Date() > 1000 * 59 && date - new Date() <= 1000 * 59 * 60) {
      return (
        "Через " + Math.round((date - new Date()) / (1000 * 59)) + " минут"
      );
    }
    if (
      date - new Date() > 1000 * 59 * 60 &&
      date - new Date() <= 1000 * 59 * 60 * 24
    ) {
      return (
        "Через " + Math.round((date - new Date()) / (1000 * 59 * 60)) + " часов"
      );
    }
    if (
      date - new Date() > 1000 * 59 * 60 * 24 &&
      date - new Date() <= 1000 * 59 * 60 * 24 * 30
    ) {
      return (
        "Через " +
        Math.round((date - new Date()) / (1000 * 59 * 60 * 24)) +
        " дней"
      );
    }
    if (
      date - new Date() > 1000 * 59 * 60 * 24 * 30 &&
      date - new Date() <= 1000 * 59 * 60 * 24 * 30 * 12
    ) {
      return (
        "Через " +
        Math.round((date - new Date()) / (1000 * 59 * 60 * 24 * 30)) +
        " месяцев"
      );
    }
    if (date - new Date() > 1000 * 59 * 60 * 24 * 30 * 12) {
      return (
        "Через " +
        Math.round((date - new Date()) / (1000 * 59 * 60 * 24 * 30 * 12)) +
        " лет"
      );
    }
  }
}

module.exports = formatDate;

// const v = new Date("2020-04-29");
// console.log(new Date() - v);

const seconds = new Date("2005-04-29 20:51:00");
console.log(seconds);
const now = new Date();
console.log(now);
console.log(now - seconds);
console.log(formatDate(seconds));
