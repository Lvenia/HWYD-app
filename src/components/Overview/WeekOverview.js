import React, { useState } from 'react';
import { connect } from 'react-redux';
import { calculatePoints } from './calculatePoints';
import { STAR_SRC } from '../../constants';
import { Bar } from 'react-chartjs-2';
import SpinnerComponent from '../common/SpinnerComponent';


const WeekOverview = ({ data }) => {

  const [imgWidth, setImgWidth] = useState(46);
  const [imgLength, setImgLength] = useState(50);

  // move loader here

  // check if it is not loading and if there is no data available for the period
  if (!data) {
    return <h1>No data recieved..</h1>
  }

  if (data.length) {
    console.log(data)
    const weekData = data.map(day => calculatePoints(day));

    const dateLabels = data.map(set => {
      const mounthDay = set.createdAt.slice(5, 10);
      const [mounth, day] = mounthDay.split('-');
      return `${day}/${mounth}`
    });

    //get data for the Chart
    const sleepCatPointsByDay = weekData.map(day => day.points.sleepCatPoints);
    const nutritionCatPointsByDay = weekData.map(day => day.points.nutritionPoints);
    const hydrationCatPointsByDay = weekData.map(day => day.points.hydrationPoints);
    const activityCatPointsByDay = weekData.map(day => day.points.ativitiesPoints);
    const ratesByDay = weekData.map(day => day.dayRate);
    //setting the pointer
    // New component with div wrapper
    let starImg = new Image();
    starImg.width = imgWidth;
    starImg.length = imgLength;
    starImg.src = STAR_SRC;
    // starImg.onmouseover = () => {
    //   setImgWidth(92);
    //   setImgLength(100);
    // }

    const chartData = {
      data: {
        labels: dateLabels, //pas the array with labels
        datasets: [
          {
            label: 'Stars',
            type: 'line',
            data: ratesByDay,
            order: 0,
            backgroundColor: 'rgba(254, 241, 96, 1)',
            borderColor: '#343a40',
            pointStyle: starImg,
            // hoverRadius: 20,
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
          }] //dataSet for each category
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
    }
    return (
      <div>
        <Bar data={chartData.data} options={chartData.options} />
      </div>
    );
  }

  return <SpinnerComponent />
};

const mapStateToProps = (state) => {
  return {
    data: state.overviewState.data
  }
}

export default connect(mapStateToProps)(WeekOverview);

























// import React from 'react';
// import { connect } from 'react-redux';
// import { getAnswersByWeek } from '../../actions';
// // import Row from 'react-bootstrap/Row';
// import { Bar } from 'react-chartjs-2';
// import { calculatePoints } from './calculatePoints';



// class WeekOverview extends React.Component {


//   // componentDidMount() {
//   //   const thisWeekData = this.props.getAnswersByWeek('thisWeek');

//   // }

//   renderChart = (dataByWeek) => {

//     if (!dataByWeek.length) {
//       return null
//     }

//     const weekData = dataByWeek.map(day => calculatePoints(day));
//     // const sleepCatPointsByDay = weekData.map(day => day.points.sleepCatPoints);
//     // const nutritionCatPointsByDay = weekData.map(day => day.points.nutritionPoints);
//     // const hydrationCatPointsByDay = weekData.map(day => day.points.hydrationPoints);
//     // const activityCatPointsByDay = weekData.map(day => day.points.ativitiesPoints);
//     // const ratesByDay = weekData.map(day => day.dayRate);

//     //if dataByWeek array is not empty and if isLoading is false than render chart
//     if (dataByWeek.length > 0 && !this.props.isLoading) {
//       return (
//         <div>
//           <h1>Chart</h1>
//         </div>
//       )
//     }

//   }

//   //component did mount => send request to the serwer /get thisweek/lastWEEK
//   //wait for the response
//   //show loader while waiting


//   render() {
//     console.log(this.props)



//     const { selectedPeriod, dataByWeek } = this.props;

//     if (!selectedPeriod) {
//       return (
//         <div>
//           {this.renderChart(dataByWeek)}
//         </div>
//       )
//     }

//     return (
//       <div>
//         {this.renderChart(dataByWeek)}
//       </div>
//     )
//   }
// };

// const mapStateToProps = (state, ownProps) => {
//   return {
//     dataByWeek: state.byWeekState.data,
//     isLoading: state.byWeekState.isLoading,
//   }
// }

// export default connect(mapStateToProps, { getAnswersByWeek })(WeekOverview)