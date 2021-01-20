import { getDataForChart } from './components/Overview/getDataForChart';
import {
  THIS_WEEK,
  LAST_WEEK,
  THIS_MONTH,
  LAST_MONTH,
  THIS_YEAR,
  LAST_YEAR
} from './constants.js';

import starImg from './components/common/Icons/StarImg';
import smallStarImg from './components/common/Icons/SmallStarImg';

export const subtractTimeStrings = (startTimeString, finishTimeString) => {
  if (!startTimeString || !finishTimeString) {
    return null
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


export const getDataForLinearBarChart = (data, timePeriod) => {
  let pointStyle, showLine, xAxisLabels

  if (timePeriod === THIS_WEEK.value || timePeriod === LAST_WEEK.value) {
    pointStyle = starImg;
    showLine = false
  } else {
    pointStyle = smallStarImg;
    showLine = true
  }

  const chartDataPerDay = data.map(day => getDataForChart(day)); ///7, 30, or 565 datasets

  if (timePeriod === THIS_WEEK.value || timePeriod === LAST_WEEK.value || timePeriod === THIS_MONTH.value || timePeriod === LAST_MONTH.value) {

    xAxisLabels = data.map(dataSet => {
      const dateUTCFormat = new Date(dataSet.createdAt);
      return weekdayDDMMbyDate(dateUTCFormat);
    });

    const ratesByDay = chartDataPerDay.map(day => day.dayRate);
    const sleepCatPointsByDay = chartDataPerDay.map(day => day.points.sleepCatPoints);
    const nutritionCatPointsByDay = chartDataPerDay.map(day => day.points.nutritionPoints);
    const hydrationCatPointsByDay = chartDataPerDay.map(day => day.points.hydrationPoints);
    const activityCatPointsByDay = chartDataPerDay.map(day => day.points.ativitiesPoints);

    return (
      {
        labels: xAxisLabels,
        datasets: [{
          label: 'Stars',
          type: 'line',
          data: ratesByDay,
          order: 0,
          backgroundColor: 'rgba(254, 241, 96, 1)',
          borderColor: 'rgba(254, 241, 96, 1)',
          borderWidth: 1.5,
          pointStyle: pointStyle,
          showLine: showLine,
          fill: false,
          yAxisID: 'y-axis-2'
        },
        {
          label: 'Sleep',
          data: sleepCatPointsByDay,
          backgroundColor: '#b388ff',
          borderColor: '#805acb',
          borderWidth: 1
        },
        {
          label: 'Nutrition',
          data: nutritionCatPointsByDay,
          backgroundColor: '#8c9eff',
          borderColor: '#5870cb',
          borderWidth: 1
        },
        {
          label: 'Hydration',
          data: hydrationCatPointsByDay,
          backgroundColor: '#82b1ff',
          borderColor: '#4d82cb',
          borderWidth: 1
        },
        {
          label: 'Activities',
          data: activityCatPointsByDay,
          backgroundColor: '#80d8ff',
          borderColor: '#49a7cc',
          borderWidth: 1
        }]
      }
    );
  }

  if (timePeriod === THIS_YEAR.value || timePeriod === LAST_YEAR.value) {

    //declear en empty object, which will contain key value ppairs: monthIndex: []
    const groupedDataMonthly = {
      //11: [{}, {}]
      // 10: []
    };

    //sort days in chartDataArray based on the monthIndex
    chartDataPerDay.forEach(day => {
      if (groupedDataMonthly[day.monthIndex]) {
        groupedDataMonthly[day.monthIndex].push(day);
      }
      else {
        groupedDataMonthly[day.monthIndex] = [day];
      }
    });

    //now days are sorted by month in the groupedDataMonthly object
    // const data = {};

    //recieve keys from the groupedDataMonthly object
    const monthGroupIndexes = Object.keys(groupedDataMonthly);
    //sort the keys from groupedDataMonthly object
    monthGroupIndexes.sort((a, b) => {
      return a - b;
    });

    let averageMonthly = [];
    let starsMonthly = [];
    let labelsMontly = [];

    monthGroupIndexes.forEach(monthGroupIndex => {

      const noNaN = groupedDataMonthly[monthGroupIndex].filter(day => day.points.totalPointsByDay > 0)

      //calculate total points
      const total = noNaN.reduce((acc, day) => {
        return acc += day.points.totalPointsByDay
      }, 0);

      //calculate average => it is possible, that some of points are NaN, which leeds to average NaN; => before the reduce points are filtered
      const average = Math.ceil(total / groupedDataMonthly[monthGroupIndex].length)
      averageMonthly.push(average)

      //calculate average for the dayRates :
      const totalStars = groupedDataMonthly[monthGroupIndex].reduce((acc, day) => {
        return acc += day.dayRate
      }, 0);

      const averageStars = totalStars / groupedDataMonthly[monthGroupIndex].length;
      const averageStarsString = averageStars.toString()
      starsMonthly.push(averageStarsString.slice(0, 3))

      //get labels
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      labelsMontly.push(months[monthGroupIndex])
    })

    return (
      {
        labels: labelsMontly,
        datasets: [{
          label: 'Average star rate',
          type: 'line',
          data: starsMonthly,
          order: 0,
          backgroundColor: 'rgba(254, 241, 96, 1)',
          borderColor: 'rgba(254, 241, 96, 1)',
          borderWidth: 1.5,
          pointStyle: pointStyle,
          showLine: showLine,
          fill: false,
          yAxisID: 'y-axis-2'
        },
        {
          label: 'Average total points',
          data: averageMonthly,
          backgroundColor: '#b388ff',
          borderColor: '#805acb',
          borderWidth: 1
        }]
      }
    );
  }
};

export const getOptionsForLinearBarChart = (timePeriod) => {
  let isStacked, y1Ticks;

  if (timePeriod === THIS_WEEK.value || timePeriod === LAST_WEEK.value) {
    isStacked = false;
    y1Ticks = {
      min: -30,
      max: 36,
      stepSize: 10
    }
  } else {
    isStacked = true;
    y1Ticks = {
      min: -120,
      max: 126,
      stepSize: 30
    }
  }

  return (
    {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#6c757d'
        }
      },
      elements: {
        line: {
          tension: 0.2 // disables bezier curves
        }
      },
      scales: {
        xAxes: [{
          stacked: isStacked
        }],
        yAxes: [{
          stacked: isStacked,
          id: 'y-axis-1',
          display: true,
          position: 'left',
          ticks: y1Ticks,
          offset: false,
          gridLines: {
            display: true,
            z: 1,
            zeroLineColor: 'rgba(52,58,64,0.8)'
          },
          afterTickToLabelConversion: function (scaleInstance) {
            scaleInstance.ticks[0] = null;
            scaleInstance.ticksAsNumbers[0] = null;
          }
        },
        {
          id: 'y-axis-2',
          display: true,
          position: 'right',
          ticks: {
            min: 0,
            max: 5.7,
            stepSize: 1,
          },
          afterTickToLabelConversion: function (scaleInstance) {
            scaleInstance.ticks[0] = null;
            scaleInstance.ticksAsNumbers[0] = null;
          },
          offset: false,
          gridLines: {
            display: true,
            color: 'rgba(254, 241, 96, 1)',
            borderDash: [10, 20]
          }
        }]
      }
    }
  )
}

