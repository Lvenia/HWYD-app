import React from 'react';
import { Bar } from 'react-chartjs-2';
import { weekdayDDMMbyDate } from '../../utils';
import { calculatePoints } from './calculatePoints';

const MixedBarLinearChart = ({
  data = {},
  stacked = false,
  chartTitle = 'Title',
  pointStyle = 'circle',
  y1Ticks = {},
  y2Ticks = {}
}) => {

  const xAxisLabels = data.map(dataSet => {
    const dateUTCFormat = new Date(dataSet.createdAt);

    return weekdayDDMMbyDate(dateUTCFormat);
  });

  const pointsPerDay = data.map(day => calculatePoints(day));

  const sleepCatPointsByDay = pointsPerDay.map(day => day.points.sleepCatPoints);
  const nutritionCatPointsByDay = pointsPerDay.map(day => day.points.nutritionPoints);
  const hydrationCatPointsByDay = pointsPerDay.map(day => day.points.hydrationPoints);
  const activityCatPointsByDay = pointsPerDay.map(day => day.points.ativitiesPoints);
  const ratesByDay = pointsPerDay.map(day => day.dayRate);

  const chartData = {
    data: {
      labels: xAxisLabels,
      datasets: [{
        label: 'Stars',
        type: 'line',
        data: ratesByDay,
        order: 0,
        backgroundColor: 'rgba(254, 241, 96, 1)',
        borderColor: '#343a40',
        pointStyle: pointStyle,
        radius: 20,
        showLine: false,
        yAxisID: 'y-axis-2',
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
    },
    options: {
      title: {
        display: true,
        text: chartTitle,
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
        xAxes: [{
          stacked: stacked
        }],
        yAxes: [{
          stacked: stacked,
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
          ticks: y2Ticks,
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
  }
  return (

    <div>
      <Bar data={chartData.data} options={chartData.options} />
    </div>
  );


};

export default MixedBarLinearChart;
