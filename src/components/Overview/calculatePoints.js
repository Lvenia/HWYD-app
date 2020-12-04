import {
  ACTIVITY_CAT_KEYS,
  SLEEP_CAT_QUESTIONS,
  NUTRITION_CAT_QUESTIONS,
  HYDRATION_CAT_QUESTIONS,
} from '../Quiz/questions';

import { pleasant, unpleasant } from '../../constants';

export function calculatePoints(dataByDay) {
  console.log(dataByDay);

  let points = {
    sleepCatPoints: 0,
    nutritionPoints: 0,
    hydrationPoints: 0,
    ativitiesPoints: 0
  }

  SLEEP_CAT_QUESTIONS.forEach(question => {
    if (question.grantPoints) {
      points.sleepCatPoints += question.grantPoints(dataByDay[question.name])
    };
  });

  NUTRITION_CAT_QUESTIONS.forEach(question => {
    if (question.grantPoints) {
      points.nutritionPoints += question.grantPoints(dataByDay[question.name])
    };
  });

  HYDRATION_CAT_QUESTIONS.forEach(question => {
    if (question.grantPoints) {
      points.hydrationPoints += question.grantPoints(dataByDay[question.name])
    };
  });

  let allActivitiesTime = [];
  let pleasantActivitiesTime = [];
  let unpleasantActivitiesTime = [];

  ACTIVITY_CAT_KEYS.forEach(key => {
    if (dataByDay[key]) {
      allActivitiesTime.push(dataByDay[key].activityTime);

      pleasantActivitiesTime.push(dataByDay[key].energyImpact === pleasant.value ? dataByDay[key].activityTime : 0);

      unpleasantActivitiesTime.push(dataByDay[key].energyImpact === unpleasant.value ? dataByDay[key].activityTime : 0);
    }
  });

  const totalActivityTime = allActivitiesTime.reduce((accumulator, cur) => {
    return accumulator + cur
  }, 0);

  const pleasantActivityTotal = pleasantActivitiesTime.reduce((accumulator, cur) => {
    return accumulator + cur
  }, 0);

  const unpleasantActivityTotal = unpleasantActivitiesTime.reduce((accumulator, cur) => {
    return accumulator + cur
  }, 0);

  points.ativitiesPoints = Math.ceil((pleasantActivityTotal - unpleasantActivityTotal) / totalActivityTime * 3) * 10;

  const pointCatKeys = Object.keys(points);

  const totalPointsByDay = pointCatKeys.reduce((accumulator, key) => {
    return accumulator + points[key]
  }, 0)

  console.log(`total ${totalPointsByDay}`)
  console.log(points)

};
