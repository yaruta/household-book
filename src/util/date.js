export function getWeekNumber(date) {
  const currentDate = typeof date === "object" ? date : new Date(date);
  const januaryFirst = new Date(currentDate.getFullYear(), 0, 1);
  const weekNumberOfJanuaryFirst = januaryFirst.getDay() < 4 ? 1 : 52;
  const weeksFromJanFirst = Math.ceil(
    (currentDate.getTime() - januaryFirst.getTime()) / (24 * 3600 * 1000) / 7
  );
  let currentWeek = weeksFromJanFirst;
  if (weekNumberOfJanuaryFirst === 52) {
    currentWeek = weekNumberOfJanuaryFirst - 1;
  }
  return currentWeek;
}

