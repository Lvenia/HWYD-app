import React from 'react';
import { connect } from 'react-redux';
import { getAnswersByDay } from '../../actions';

import StarComponent from '../Quiz/StarComponent';


import Container from '../common/Container/Container';
import DayPickerComponent from './DayPickerComponent'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Day extends React.Component {

  state = {
    selectedDateUnformated: '',
  }

  componentDidMount() {
    const today = this.renderTodaysDate();

    this.props.getAnswersByDay(today);
  }

  formatDate = (dateUTC) => {
    const dateFormated = dateUTC.toISOString();
    const dayString = dateFormated.slice(0, 10);
    return dayString;
  }

  renderTodaysDate = () => {
    const date = new Date();
    return this.formatDate(date);
  }

  handleDayClick = (value) => {
    this.setState({
      selectedDateUnformated: value,
    })
  }

  renderDayDescription = (rate) => {

    const description = () => {
      switch (rate) {
        case 1:
          return 'a tough';
        case 2:
          return 'a challenging';
        case 3:
          return 'an acceptable';
        case 4:
          return 'a pleasant';
        case 5:
          return 'an amazing';
        default:
          return 'beautiful'
      }
    };

    return (
      <h1>
        It has been {description()} day!
      </h1>
    );
  };

  renderStars() {
    const stars = [{
      rate: 1,
      description: 'tough'
    },
    {
      rate: 2,
      description: 'challenging'
    },
    {
      rate: 3,
      description: 'acceptable'
    },
    {
      rate: 4,
      description: 'pleasant'
    },
    {
      rate: 5,
      description: 'amazing'
    }];

    return stars.map(star => {
      return (
        <StarComponent
          readOnly={true}
          key={star.rate}
          starRate={star.rate}
          hoveredStarRate={this.props.answersByDay.dayRate}
        />
      );
    })
  };


  render() {
    if (this.props.answersByDay) {
      return (
        <Container>
          <Row className="m-3 justify-content-md-center">
            {this.renderDayDescription(this.props.answersByDay.dayRate)}
          </Row>
          <Row className="m-3 justify-content-md-center">
            <Col xs={5}>
              <DayPickerComponent
                handleDayClick={this.handleDayClick}
                selectedDay={this.state.selectedDateUnformated || new Date()}
              />
            </Col>
            <Col xs={7}>
              <h4>Placeholder for stars</h4>
              <Row className="justify-content-md-center" >
                {this.renderStars()}
              </Row>
              <h4>Placeholder for sleep summary</h4>
              <h4>Placeholder for nutrition summary</h4>
              <h4>Placeholder for hydration summary</h4>
              <h4>Placeholder for activities summary</h4>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return `spiner`
    }

  }
}

const mapStateToProps = (state) => {
  return {
    answersByDay: state.byDayState.data
  }
}

export default connect(mapStateToProps, { getAnswersByDay })(Day);