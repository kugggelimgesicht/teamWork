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

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  let diff = Math.abs(date - new Date());
  let milliseconds = "";

  switch (true) {
    case diff <= minute:
      milliseconds = Math.round(diff / second) + " секунд";
      console.log("1");
      break;
    case diff > minute && diff <= hour:
      milliseconds = Math.round(diff / minute) + " минут";
      console.log("2");
      break;
    case diff > hour && diff <= day:
      milliseconds = Math.round(diff / hour) + " часов";
      console.log("3");
      break;
    case diff > day && diff <= month:
      milliseconds = Math.round(diff / day) + " дней";
      console.log("4");
      break;
    case diff > month && diff <= year:
      milliseconds = Math.round(diff / month) + " месяцев";
      console.log("5");
      break;
    case diff > year:
      milliseconds = Math.round(diff / year) + " лет";
      console.log("6");
      break;
  }

  if (date < new Date()) {
    return milliseconds + " назад";
  } else if (date > new Date()) {
    return "Через " + milliseconds;
  } else {
    return "Прямо сейчас";
  }
}

// module.exports = formatDate;

const seconds = new Date("2020-04-30 13:06:00");
console.log(seconds);
const now = new Date();
console.log(now);
console.log(seconds - now);
console.log(formatDate(seconds));
