// import React from 'react';
// import { testWeekData} from './testData';
// import { calculatePoints } from './calculatePoints';
// import { Bar, Chart } from 'react-chartjs-2';
// import Container from '../common/Container/Container';

// const weekData = testWeekData.map(day => calculatePoints(day));
// const weekPointsByDay = weekData.map(day => day.points.totalPointsByDay);
// console.log(weekPointsByDay)

// //set Yaxis min value to 0 <=> edit default values
// Chart.scaleService.updateScaleDefaults('linear', {
//   ticks: {
//     min: -120,
//     max: 120
//   }
// });


// const data = {
//   data: {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'],
//     datasets: [{
//       label: 'total points',
//       data: weekPointsByDay,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(25, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//         'rgba(25, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }],
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'Custom Chart Title'
//     },
//     legend: {
//       display: false,
//       labels: {
//         fontColor: 'rgb(255, 206, 86)'
//       }
//     }
//   }
// };

// class TotalPointsWeekOverview extends React.Component {
//   render() {
//     return (
//       <Container>
//         <h4>TotalPointsWeekOverview</h4>
//         <Bar data={data.data} options={data.options} />
//       </Container>
//     );
//   }
// }

// export default TotalPointsWeekOverview;