import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getDayReviewAnswers } from '../../actions';
import { subtractTimeStrings, ifKeyExists } from '../../utils';

import StarComponent from '../Quiz/StarComponent';
import Container from '../common/Container/Container';
import SpinnerComponent from '../common/SpinnerComponent';
import DayPickerComponent from './DayPickerComponent';
import QuizSummaryCard from './QuizSummaryCard';
import QuizActivityBlock from './QuizActivityBlock.js';

import questions from '../Quiz/questions';
import {
  STARS,
  SUMMARY_SLEEP,
  SUMMARY_NUTRITION,
  SUMMARY_HYDRATION,
  CATEGORY_ACTIVITY
} from '../../constants';

class Day extends React.Component {

  state = {
    selectedDateUnformated: '',
    firstRender: true,
  }

  componentDidMount = async () => {
    const today = this.renderTodaysDate();
    await this.props.getDayReviewAnswers(today);
    this.setState({ firstRender: false });
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
    this.props.getDayReviewAnswers(this.formatDate(value));
  }

  renderDayDescription = rate => {
    const star = STARS.find(star => star.rate === rate);

    if (star) {
      return (
        <h1>
          It was {star.description[0] !== 'a' ? 'a' : 'an'} {star.description} day!
        </h1>
      );
    }

    if (!Object.keys(this.props.answersByDay).length) {
      return (
        <h1>
          {`No data for given day`}
        </h1>
      );
    }
  }

  renderStars() {
    return STARS.map(star => {
      return (
        <StarComponent
          readOnly={true}
          key={star.rate}
          starRate={star.rate}
          hoveredStarRate={this.props.answersByDay.dayRate}
        />
      );
    });
  }

  renderSleepCard = () => {
    const { sleptWell, wentToBed, wokeUp } = this.props.answersByDay;

    const timeDifferece = subtractTimeStrings(wentToBed, wokeUp);

    const header = () => {

      if (ifKeyExists('sleptWell', this.props.answersByDay)) {
        return `You have ${sleptWell ? '' : 'not'} slept well`
      }

      return 'Sleep details';
    };

    let descriptionText = [];

    const qSleep = questions.filter(q => q.summaryCardCategory === SUMMARY_SLEEP);

    qSleep.forEach(q => {
      if (ifKeyExists(q.name, this.props.answersByDay) && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
      }

      if (q.name === 'wentToBed' && timeDifferece) {
        descriptionText.unshift(timeDifferece);
      }
    });

    if (descriptionText.length < 1) {
      return
    }

    return (
      <QuizSummaryCard
        header={header()}
        description={descriptionText.join(', ')}
      />
    );
  }

  renderNutritionCard = () => {

    const { mealRegularity, skippedMeal, junkFood } = this.props.answersByDay;

    const header = () => {
      const mealRegularityExists = ifKeyExists('mealRegularity', this.props.answersByDay);
      const skippedMealExists = ifKeyExists('skippedMeal', this.props.answersByDay);
      const junkFoodExists = ifKeyExists('junkFood', this.props.answersByDay);

      if (mealRegularityExists && skippedMealExists && junkFoodExists) {
        return `${(mealRegularity && !skippedMeal && !junkFood) ? 'You have nourished yourself well' : 'You can nourishe yourself better'}`
      }

      return 'Nutrition details';
    };

    let descriptionText = [];
    const qNutrition = questions.filter(q => q.summaryCardCategory === SUMMARY_NUTRITION);

    qNutrition.forEach(q => {
      if (ifKeyExists(q.name, this.props.answersByDay) && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
      }
    });

    if (descriptionText.length < 1) {
      return
    }

    return (
      <QuizSummaryCard
        header={header()}
        description={descriptionText.join(', ')}
      />
    );
  }

  renderHydrationCard = () => {
    const { waterGlasses } = this.props.answersByDay;
    const waterGlassesExists = ifKeyExists('waterGlasses', this.props.answersByDay);

    const header = () => {
      if (waterGlassesExists) {
        if (waterGlasses >= 6) {
          return 'Well hydrated'
        } else if (waterGlasses < 4) {
          return 'Poorly hydrated'
        } else {
          return 'Hydrated'
        }
      }
      return 'Hydration'
    };

    let descriptionText = [];
    const qHydration = questions.filter(q => q.summaryCardCategory === SUMMARY_HYDRATION);

    qHydration.forEach(q => {
      if (ifKeyExists(q.name, this.props.answersByDay) && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(this.props.answersByDay[q.name]))
      }
    });

    if (descriptionText.length < 1) {
      return;
    }

    return (
      <QuizSummaryCard
        header={header()}
        description={descriptionText.join(', ')}
      />
    );
  };

  renderActivitiesCard = () => {

    const qActivities = questions.filter(q => q.questionCategory === CATEGORY_ACTIVITY);

    const activityNames = [];
    const activityDurations = [];

    qActivities.forEach(activity => {
      if (ifKeyExists(activity.name, this.props.answersByDay)) {
        activityDurations.push(this.props.answersByDay[activity.name].activityTime);
        activityNames.push(activity.question)
      }
      return
    })

    if (activityDurations.length < 1) {
      return;
    }

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
    );
  }

  renderResults = () => {
    if (this.props.isLoading) {
      return (
        <Container>
          <SpinnerComponent />
        </Container>
      );
    }

    if (!Object.keys(this.props.answersByDay).length) {
      return (
        <>
          <Row className=" m-3 justify-content-md-center align-items-center">
            <h2>Please pick another day</h2>
          </Row>
        </>
      );
    }

    return (
      <>
        {this.renderSleepCard()}
        {this.renderNutritionCard()}
        {this.renderHydrationCard()}
        {this.renderActivitiesCard()}
      </>
    );
  };

  render() {
    if (this.state.firstRender) {
      return null;
    }

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
            {this.renderResults()}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answersByDay: state.dayReviewState.data,
    isLoading: state.dayReviewState.isLoading,
  }
}

export default connect(mapStateToProps, { getDayReviewAnswers })(Day);
