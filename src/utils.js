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

export const chartOptions = {
  title: {
    display: false,
    text: 'Week Review',
    fontSize: 32,
    padding: 30,
    position: 'top',
    fontStyle: 'normal',
    fontColor: '#212529',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: '#6c757d'
    }
  },
  elements: {
    line: {
      tension: 0 // disables bezier curves
    }
  },
  scales: {
    
    yAxes: [{
      id: 'y-axis-1',
      display: true,
      position: 'left',
      ticks: {
        min: -30,
        max: 36,
      },
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
        max: 5.3,
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
};

export const weekdayDDMMbyDate = (dateUTCFormat) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = dateUTCFormat.getDate();
  const month = dateUTCFormat.getMonth() + 1;
  const weekDayIndex = dateUTCFormat.getDay();
  const weekDay = weekDays[weekDayIndex];

  return `${weekDay}, ${day}/${month}`
};
