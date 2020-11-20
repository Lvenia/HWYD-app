import React, { useDebugValue } from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getAnswersByDay } from '../../actions';
import { subtractTimeStrings } from '../../utils'

import StarComponent from '../Quiz/StarComponent';
import Container from '../common/Container/Container';
import SpinnerComponent from '../common/SpinnerComponent';
import DayPickerComponent from './DayPickerComponent';
import QuizSummaryCard from './QuizSummaryCard';
import QuizActivityBlock from './QuizActivityBlock.js';
import AppButton from '../AppButton';

import questions from '../Quiz/questions';
import { stars, SUMMARY_SLEEP, SUMMARY_NUTRITION, SUMMARY_HYDRATION, CATEGORY_ACTIVITY } from '../../constants';

class Day extends React.Component {

  state = {
    selectedDateUnformated: '',
  }

  componentDidMount() {
    const today = this.renderTodaysDate();
    this.props.getAnswersByDay(today);
  }

  formatDate = (dateUTC) => {
    if (!dateUTC) return null;

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
    });
    this.props.getAnswersByDay(this.formatDate(value));
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

    const timeDifferece = subtractTimeStrings(wentToBed, wokeUp);

    const header = () => {
      if (sleptWell) {
        return `You have ${sleptWell ? '' : 'not'} slept well`
      } else {
        return 'Sleep details'
      };
    };

    let descriptionText = [];

    const qSleep = questions.filter(q => q.summaryCardCategory === SUMMARY_SLEEP);
    qSleep.map(q => {
      // if (this.props.answersByDay[q.name] !== undefined && q.renderSummaryDetails) {
      if (this.props.answersByDay[q.name] && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
      } if (q.name === 'wentToBed' && timeDifferece !== null) {
        descriptionText.unshift(timeDifferece);
      }
    });

    return (
      <QuizSummaryCard
        header={header()}
        description={descriptionText.join(', ')}
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

    let descriptionText = [];
    const qNutrition = questions.filter(q => q.summaryCardCategory === SUMMARY_NUTRITION);
    qNutrition.map(q => {
      if (this.props.answersByDay[q.name] && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
      }
    });

    return (
      <QuizSummaryCard
        header={header()}
        description={descriptionText.join(', ')}
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

    let descriptionText = [];
    const qHydration = questions.filter(q => q.summaryCardCategory === SUMMARY_HYDRATION)


    qHydration.map(q => {
      if (this.props.answersByDay[q.name] && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
      }
    });

    return (
      <QuizSummaryCard
        header={header()}
        description={descriptionText.join(', ')}
      />
    );
  };

  renderActivitiesCard = () => {

    const qActivities = questions.filter(q => q.questionCategory === CATEGORY_ACTIVITY);
    const alowedActivityKeys = qActivities.map(q => q.name);

    const answerKeys = Object.keys(this.props.answersByDay);

    const activityNames = [];
    const activityDurations = [];
    answerKeys.forEach(key => {
      if (alowedActivityKeys.includes(key)) {
        activityDurations.push(this.props.answersByDay[key].activityTime);
        const questionName = qActivities.find(q => q.name === key).question;
        activityNames.push(questionName);
      }
    });

    return (
      <div>
        <QuizSummaryCard
          header={'Activities'}
          description={
            <QuizActivityBlock
              activityNames={activityNames}
              activityDurations={activityDurations}
            />
          }
        >
        </QuizSummaryCard>

      </div >
    )
  }

  render() {

    if (Object.keys(this.props.answersByDay).length > 0 && this.props.isLoading === false) {
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
              {this.renderActivitiesCard()}
            </Col>
          </Row>
        </Container>

      );
    } else if (this.props.isLoading) {
      //////////////////////////
      return (
        <Container>
          <SpinnerComponent />
        </Container>
      )
    } else {
      const formattedDate = this.formatDate(this.state.selectedDateUnformated);

      return (
        <Container>
          <Row className="m-3 justify-content-md-center align-items-center">
            <h1>
              {`There is no data regarding ${formattedDate}`}
            </h1>
          </Row>
          <Row className=" m-3 justify-content-md-center align-items-center">
            {this.renderStars(5)}
          </Row>
          <Row className="justify-content-md-center" >
            <AppButton
              label={'Select another date'}
              handleClick={() => this.props.history.go('/day')}
            />
          </Row>
        </Container>
      )
      ///////////////////////////////////
    }
  }
}

const mapStateToProps = (state) => {
  return {
    answersByDay: state.byDayState.data,
    isLoading: state.byDayState.isLoading,

  }
}

export default connect(mapStateToProps, { getAnswersByDay })(Day);