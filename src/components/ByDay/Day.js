import React from 'react';
// import { connect } from 'react-redux';

import Container from '../common/Container/Container';
import DayPickerComponent from './DayPickerComponent'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Day extends React.Component {

  state = {
    selectedDay: ''
  }

  //transfer data from the server to the redux state => when the component is mounted
  componentDidMount() {
    const today = this.renderTodaysDate();
    this.setState({ selectedDay: today })
  }

  formatDate = (dateUTC) => {
    const dateFormated = dateUTC.toISOString();
    const dayString = dateFormated.slice(0, 10);
    return dayString;
  }

  renderTodaysDate = () => {
    const date = new Date;
    return this.formatDate(date);
  }

  handleDayClick = (value) => {
    this.setState({
      selectedDateUnformated: value,
      selectedDay: this.formatDate(value)
    })
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Row>
          <Col xs={5}>
            <h4>It's been a good day </h4>

            <DayPickerComponent
              handleDayClick={this.handleDayClick}
              selectedDay={this.state.selectedDateUnformated || new Date}
            />

          </Col>
          <Col xs={7}>
            <h4>Placeholder for stars</h4>
            <h4>Placeholder for sleep summary</h4>
            <h4>Placeholder for nutrition summary</h4>
            <h4>Placeholder for hydration summary</h4>
            <h4>Placeholder for activities summary</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     answers: state.quizState.data
//   }
// }

// export default connect(mapStateToProps, { getTodaysAnswers })(Day);
export default Day;




//a containter containinng one row with two columns
//first column is a calendar with the onclick prop which sets the state with the day in format createdAt: "2020-11-10T14:53:59.100Z"

/* RESPONSE 2020-11-10 / FB
{
    "_id": "5faa9601f5eaa53c01a8c7ff",
    "userId": "5f9ef2d4133b9070e3783766",
    "dayRate": 4,
    "sleptWell": false,
    "wentToBed": "23:30",
    "wokeUp": "07:00",
    "sleepInterupted": true,
    "snoozing": true,
    "dayNap": false,
    "mealRegularity": true,
    "skippedMeal": false,
    "junkFood": false,
    "waterGlasses": 4,
    "work": {
        "_id": "5faa9601b1b19c770b330901",
        "activityTime": 3,
        "energyImpact": "uplifting"
    },
    "sport": {
        "_id": "5faa9601b1b19c770b330902",
        "activityTime": 0.5,
        "energyImpact": "uplifting"
    },
    "dailyTasks": {
        "_id": "5faa9601b1b19c770b330903",
        "activityTime": 0.5,
        "energyImpact": "uplifting"
    },
    "friends": {
        "_id": "5faa9601b1b19c770b330904",
        "activityTime": 0,
        "energyImpact": "neutral"
    },
    "family": {
        "_id": "5faa9601b1b19c770b330905",
        "activityTime": 0,
        "energyImpact": "uplifting"
    },
    "reading": {
        "_id": "5faa9601b1b19c770b330906",
        "activityTime": 0.5,
        "energyImpact": "uplifting"
    },
    "__v": 0,
    "updatedAt": "2020-11-10T13:30:41.930Z",
    "createdAt": "2020-11-10T13:30:41.930Z"
}
*/

//RESPONSE 2020-11-12 / FB / empty
//RESPONSE 2020-11-11 / FB / empty
