/**
 * Calculates the week number of a given date.
 * @param {Date|string} date - The date for which the week number is calculated.
 * @returns {number} The week number of the given date.
 */

export function getWeekNumber(date) {
  const currentDate = typeof date === "object" ? date : new Date(date); // Ensure the date is a Date object
  const januaryFirst = new Date(currentDate.getFullYear(), 0, 1); // First day of the year
  const weekNumberOfJanuaryFirst = januaryFirst.getDay() < 4 ? 1 : 52; // Determines if the first week of the year starts with January 1st
  const weeksFromJanFirst = Math.ceil(
    (currentDate.getTime() - januaryFirst.getTime()) / (24 * 3600 * 1000) / 7
  ); // Calculate the number of weeks from January 1st to the given date
  
  // Adjust week number if the first week is considered week 52
  let currentWeek = weeksFromJanFirst;
  if (weekNumberOfJanuaryFirst === 52) {
    currentWeek = weekNumberOfJanuaryFirst - 1;
  }
  return currentWeek;
}

