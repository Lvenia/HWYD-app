export const subtractTimeStrings = (startTimeString, finishTimeString) => {
  const [startHour, startMinutes] = startTimeString.split(':').map(Number);
  const [endHour, endMinutes] = finishTimeString.split(':').map(Number);

  //TODO: 22:30 - 6:45 => 8H 15m

  //22 > 6 => 24:00-22:30 => 1:30
  // 1:30 + 6:45 => 30+45 - 60 = 15m (1 h to add) => 1+6+(1h to add)


  const diffHours = endHour - startHour;
  const diffMinutes = endMinutes - startMinutes;

  return `${diffHours}H ${diffMinutes}m`;
}