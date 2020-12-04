import React from 'react';
import { monTest, testWeekData, sunTest, wedTest } from './testData';
import { calculatePoints} from './calculatePoints';

class Overview extends React.Component {
  render() {
    return (
      <div>
        <h4>Data Overview</h4>
        <h4>{calculatePoints(monTest)}</h4>
        <h4>{calculatePoints(wedTest)}</h4>
        <h4>{calculatePoints(sunTest)}</h4>
      </div>
    );
  }
}

export default Overview;