import React from 'react';
import Row from 'react-bootstrap/Row';
import { Bar } from 'react-chartjs-2';

import { testWeekData } from './testData';
import { calculatePoints } from './calculatePoints';
import Container from '../common/Container/Container';

const weekData = testWeekData.map(day => calculatePoints(day));
const sleepCatPointsByDay = weekData.map(day => day.points.sleepCatPoints);
const nutritionCatPointsByDay = weekData.map(day => day.points.nutritionPoints);
const hydrationCatPointsByDay = weekData.map(day => day.points.hydrationPoints);
const activityCatPointsByDay = weekData.map(day => day.points.ativitiesPoints);
const ratesByDay = weekData.map(day => day.dayRate);

const data = {
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Stars',
      type: 'line',
      data: ratesByDay,
      order: 0,
      backgroundColor: 'rgba(254, 241, 96, 1)',
      borderColor: '#343a40',
      hoverRadius: 15,
      radius: 10,
      showLine: false,
      yAxisID: 'y-axis-2',
    },
    {
      label: 'Sleep',
      data: sleepCatPointsByDay,
      backgroundColor: '#b388ff',
      borderColor: '#805acb',
      borderWidth: 1,

    },
    {
      label: 'Nutrition',
      data: nutritionCatPointsByDay,
      backgroundColor: '#8c9eff',
      borderColor: '#5870cb',
      borderWidth: 1,

    },
    {
      label: 'Hydration',
      data: hydrationCatPointsByDay,
      backgroundColor: '#82b1ff',
      borderColor: '#4d82cb',
      borderWidth: 1,
    },
    {
      label: 'Activities',
      data: activityCatPointsByDay,
      backgroundColor: '#80d8ff',
      borderColor: '#49a7cc',
      borderWidth: 1,
    }
    ],
  },
  options: {
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
        tickString: '-40, 40',
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
  }
};

class Overview extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Row className="p-3 justify-content-md-center">
            <h4>Week Overview</h4>
          </Row>
          <Row className=" justify-content-md-center">
            <Bar data={data.data} options={data.options} />
          </Row>
        </Container>
      </>
    );
  }
}

export default Overview;
