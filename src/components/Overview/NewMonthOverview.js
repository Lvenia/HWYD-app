// import React from 'react';
// import { connect } from 'react-redux';
// import Row from 'react-bootstrap/Row';

// import { calculatePoints } from './calculatePoints';
// import { Bar } from 'react-chartjs-2';
// import SpinnerComponent from '../common/SpinnerComponent';
// import { chartOptions, weekdayDDMMbyDate } from '../../utils';
// import starImg from '../common/Icons/StarImg';

// const WeekOverview = ({ data, isLoading }) => {

//   if (isLoading) {
//     return <SpinnerComponent />
//   }

//   if (!data && !isLoading) {
//     return (
//       <Row className="m-3 justify-content-md-center" >
//         <h1 >There is no data for given period of time.</h1>
//         <h4 >Select another one!</h4>
//       </Row>
//     )
//   }
//   if (data.length) {

//     //get data for the Chart
//     const xAxisLabels = data.map(dataSet => {
//       const dateUTCFormat = new Date(dataSet.createdAt);

//       return weekdayDDMMbyDate(dateUTCFormat);
//     });

//     const weekData = data.map(day => calculatePoints(day));
//     const sleepCatPointsByDay = weekData.map(day => day.points.sleepCatPoints);
//     const nutritionCatPointsByDay = weekData.map(day => day.points.nutritionPoints);
//     const hydrationCatPointsByDay = weekData.map(day => day.points.hydrationPoints);
//     const activityCatPointsByDay = weekData.map(day => day.points.ativitiesPoints);
//     const ratesByDay = weekData.map(day => day.dayRate);

//     const chartData = {
//       data: {
//         labels: xAxisLabels,
//         datasets: [
//           {
//             label: 'Stars',
//             type: 'line',
//             data: ratesByDay,
//             order: 0,
//             backgroundColor: 'rgba(254, 241, 96, 1)',
//             borderColor: '#343a40',
//             pointStyle: starImg,
//             radius: 20,
//             showLine: false,
//             yAxisID: 'y-axis-2',
//           },
//           {
//             label: 'Sleep',
//             data: sleepCatPointsByDay,
//             backgroundColor: '#b388ff',
//             borderColor: '#805acb',
//             borderWidth: 1
//           },
//           {
//             label: 'Nutrition',
//             data: nutritionCatPointsByDay,
//             backgroundColor: '#8c9eff',
//             borderColor: '#5870cb',
//             borderWidth: 1

//           },
//           {
//             label: 'Hydration',
//             data: hydrationCatPointsByDay,
//             backgroundColor: '#82b1ff',
//             borderColor: '#4d82cb',
//             borderWidth: 1
//           },
//           {
//             label: 'Activities',
//             data: activityCatPointsByDay,
//             backgroundColor: '#80d8ff',
//             borderColor: '#49a7cc',
//             borderWidth: 1
//           }]
//       }
//     }
//     return (
//       <div>
//         <Bar data={chartData.data} options={chartOptions} />
//       </div>
//     );
//   }

//   return null;
// };

// const mapStateToProps = (state) => {
//   return {
//     data: state.overviewState.data,
//     isLoading: state.overviewState.isLoading
//   }
// }

// export default connect(mapStateToProps)(WeekOverview);
