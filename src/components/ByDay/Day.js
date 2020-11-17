import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getAnswersByDay } from '../../actions';
import { subtractTimeStrings } from '../../utils'

import StarComponent from '../Quiz/StarComponent';
import Container from '../common/Container/Container';
import DayPickerComponent from './DayPickerComponent';
import QuizSummaryCard from './QuizSummaryCard';

import questions from '../Quiz/questions';
import { stars, SUMMARY_SLEEP, SUMMARY_NUTRITION, SUMMARY_HYDRATION } from '../../constants';

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

  renderSleepCard = () => {

    const { sleptWell, wentToBed, wokeUp } = this.props.answersByDay;

    const timeDifferece = subtractTimeStrings(wentToBed, wokeUp); // 0H 20m, 8H 10m

    const header = () => {
      if (sleptWell) {
        return `You have ${sleptWell ? '' : 'not'} slept well`
      } else {
        return 'Sleep details'
      };
    };

    let description = [];
    const qSleep = questions.filter(q => q.summaryCardCategory === SUMMARY_SLEEP);
    qSleep.map(q => {
      if (q.renderSummaryDetails) {
        description.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
      } if (q.name === 'wentToBed') {
        description.unshift(timeDifferece);
      }
    });

    return (
      <QuizSummaryCard
        headerText={header()}
        descriptionText={description.join(', ')}
      />
    );
  };

  renderNutritionCard = () => {

    const { mealRegularity, skippedMeal, junkFood } = this.props.answersByDay;

    const header = () => {
      if (mealRegularity === undefined || skippedMeal === undefined || junkFood === undefined) {
        return 'Nutrition details'
      }
      else {
        return `${(mealRegularity && !skippedMeal && !junkFood) ? 'You have nourished yourself well' : 'You can nourishe yourself better'}`
      }
    };

    let description = [];
    const qNutrition = questions.filter(q => q.summaryCardCategory === SUMMARY_NUTRITION);
    qNutrition.map(q => {
      description.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
    });

    return (
      <QuizSummaryCard
        headerText={header()}
        descriptionText={description.join(', ')}
      />
    );
  };

  renderHydrationCard = () => {

    const { waterGlasses } = this.props.answersByDay
    const header = () => {
      if (waterGlasses) {
        if (waterGlasses >= 6) {
          return 'Well hydrated'
        } else if (waterGlasses < 5) {
          return 'Poorly hydrated'
        } else {
          return 'Hydrated'
        }
      } else {
        return 'Hydration'
      }
    };

    let description = [];
    const qHydration = questions.filter(q => q.summaryCardCategory === SUMMARY_HYDRATION)


    qHydration.map(q => {
      description.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
    });

    return (
      <QuizSummaryCard
        headerText={header()}
        descriptionText={description.join(', ')}
      />
    );
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
              {this.renderSleepCard()}
              {this.renderNutritionCard()}
              {this.renderHydrationCard()}
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