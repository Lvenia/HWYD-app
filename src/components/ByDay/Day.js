import React from 'react';
import { connect } from 'react-redux';
import { getAnswersByDay } from '../../actions';
import { stars } from '../../constants';

import StarComponent from '../Quiz/StarComponent';
import QuizSummaryCards from './QuizSummaryCards';

import Container from '../common/Container/Container';
import DayPickerComponent from './DayPickerComponent'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import questions from '../Quiz/questions';






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

  renderDayDescription = rate => {

    const star = stars.find(star => star.rate === rate);
    if (star) {
      return <h1>It was {star.description[0] !== 'a' ? 'a' : 'an'} {star.description} day!</h1>
    }
  };

  renderStars() {

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

    if (Object.keys(this.props.answersByDay).length > 0) {

      return (
        <Container>

          <Row className="m-3 justify-content-md-center">
            {this.renderDayDescription(this.props.answersByDay.dayRate)}
          </Row>
          <Row className="justify-content-md-center" >
            {this.renderStars()}
          </Row>

          <Row className="m-3 justify-content-md-center">

            <Col xs={5}>
              <DayPickerComponent
                handleDayClick={this.handleDayClick}
                selectedDay={this.state.selectedDateUnformated || new Date()}
              />
            </Col>

            <Col xs={7}>

              <QuizSummaryCards
                state={this.props.answersByDay}
              />
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <h1>Loading...</h1>
    }

  }
}

const mapStateToProps = (state) => {
  return {
    answersByDay: state.byDayState.data,
    isLoading: state.byDayState.isLoading
  }
}

export default connect(mapStateToProps, { getAnswersByDay })(Day);