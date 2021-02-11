import {
  pleasant,
  unpleasant,
} from './constants';


import {
  ACTIVITY_CAT_KEYS,
  SLEEP_CAT_QUESTIONS,
  NUTRITION_CAT_QUESTIONS,
  HYDRATION_CAT_QUESTIONS,
} from './components/Quiz/questions';

export const subtractTimeStrings = (startTimeString, finishTimeString) => {
  if (!startTimeString || !finishTimeString) {
    return null;
  }

  if (typeof (startTimeString) !== 'string' || typeof (finishTimeString) !== 'string') {
    throw new Error('unexpected data type');
  }

  const [startHour, startMinutes] = startTimeString.split(':').map(Number);
  const [endHour, endMinutes] = finishTimeString.split(':').map(Number);
  let diffHours;
  let diffMinutes;

  if (startHour > endHour) {
    const minutesToMidnight = 60 - startMinutes;
    const hoursToMidnight = 24 - 1 - startHour;
    const minutes = endMinutes + minutesToMidnight;

    if (minutes >= 60) {
      diffMinutes = minutes - 60;
      diffHours = endHour + hoursToMidnight + 1;
    } else {
      diffMinutes = minutes;
      diffHours = endHour + hoursToMidnight;
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
  const allowedKeys = Object.keys(obj);
  return allowedKeys.includes(key);
};

export const weekdayDDMMbyDate = (dateUTCFormat) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = dateUTCFormat.getDate();
  const month = dateUTCFormat.getMonth() + 1;
  const weekDayIndex = dateUTCFormat.getDay();
  const weekDay = weekDays[weekDayIndex];

  return `${weekDay}, ${day}/${month}`;
};

export function calculatePoints(dataByDay) {
  const result = {
    sleepCatPoints: 0,
    nutritionPoints: 0,
    hydrationPoints: 0,
    ativitiesPoints: 0,
    totalPointsByDay: 0,
  };

  SLEEP_CAT_QUESTIONS.forEach((question) => {
    if (question.grantPoints) {
      result.sleepCatPoints += question.grantPoints(dataByDay[question.name]);
    }
  });

  NUTRITION_CAT_QUESTIONS.forEach((question) => {
    if (question.grantPoints) {
      result.nutritionPoints += question.grantPoints(dataByDay[question.name]);
    }
  });

  HYDRATION_CAT_QUESTIONS.forEach((question) => {
    if (question.grantPoints) {
      result.hydrationPoints += question.grantPoints(dataByDay[question.name]);
    }
  });

  const allActivitiesTime = [];
  const pleasantActivitiesTime = [];
  const unpleasantActivitiesTime = [];

  ACTIVITY_CAT_KEYS.forEach((key) => {
    if (dataByDay[key]) {
      allActivitiesTime.push(dataByDay[key].activityTime);
      const isEnergyImpactPleasant = dataByDay[key].energyImpact === pleasant.value;
      const pleasanteActivityTime = isEnergyImpactPleasant ? dataByDay[key].activityTime : 0;
      pleasantActivitiesTime.push(pleasanteActivityTime);

      const isEnergyImpactUnpleasant = dataByDay[key].energyImpact === unpleasant.value;
      const unpleasantActivityTime = isEnergyImpactUnpleasant ? dataByDay[key].activityTime : 0;
      unpleasantActivitiesTime.push(unpleasantActivityTime);
    }
  });

  const totalActivityTime = allActivitiesTime.reduce((accumulator, cur) => {
    accumulator += cur;
    return accumulator;
  }, 0);

  const pleasantActivityTotal = pleasantActivitiesTime.reduce((accumulator, cur) => {
    accumulator += cur;
    return accumulator;
  }, 0);

  const unpleasantActivityTotal = unpleasantActivitiesTime.reduce((accumulator, cur) => {
    accumulator += cur;
    return accumulator;
  }, 0);

  const pleasUnpleasTimeDifference = pleasantActivityTotal - unpleasantActivityTotal;
  result.ativitiesPoints = Math.ceil((pleasUnpleasTimeDifference / totalActivityTime) * 3) * 10;

  const pointCatKeys = Object.keys(result);

  result.totalPointsByDay = pointCatKeys.reduce((accumulator, key) => accumulator + result[key], 0);

  return result;
}
