export const subtractTimeStrings = (startTimeString, finishTimeString) => {
  if (!startTimeString || !finishTimeString) {
    return null;
  }

  if (typeof (startTimeString) !== 'string' || typeof (finishTimeString) !== 'string') {
    throw new Error('unexpected data type');
  }

  const [startHour, startMinutes] = startTimeString.split(':').map(Number);
  const [endHour, endMinutes] = finishTimeString.split(':').map(Number);
  let diffHours, diffMinutes;

  if (startHour > endHour) {

    const minutesToMidnight = 60 - startMinutes;
    const hoursToMidnight = 24 - 1 - startHour;
    const minutes = endMinutes + minutesToMidnight;

    if (minutes >= 60) {
      diffMinutes = minutes - 60;
      diffHours = endHour + hoursToMidnight + 1
    } else {
      diffMinutes = minutes;
      diffHours = endHour + hoursToMidnight
    }

  } else if (endHour > startHour) {

    if (endMinutes >= startMinutes) {
      diffMinutes = endMinutes - startMinutes;
      diffHours = endHour - startHour;
    } else {
      diffMinutes = 60 - startMinutes + endMinutes;
      diffHours = endHour - startHour - 1;
    }
  }
  return `${diffHours}H ${diffMinutes}m`;
};

export const ifKeyExists = (key, obj) => {
  const allowedKeys = Object.keys(obj)
  return allowedKeys.includes(key)
};

export const weekdayDDMMbyDate = (dateUTCFormat) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = dateUTCFormat.getDate();
  const month = dateUTCFormat.getMonth() + 1;
  const weekDayIndex = dateUTCFormat.getDay();
  const weekDay = weekDays[weekDayIndex];

  return `${weekDay}, ${day}/${month}`
};