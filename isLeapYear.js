function isLeapYear(years) {
  const leapYear = years % 4;
  if (leapYear == 0) {
    return "is leap year";
  } else {
    return "is not leap year";
  }
}
const chackLeapYear = 2020;
const resultLeapYear = isLeapYear(chackLeapYear);
console.log(resultLeapYear);
