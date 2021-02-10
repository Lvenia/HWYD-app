import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { subtractTimeStrings, ifKeyExists } from '../../utils';
import StarComponent from '../Quiz/StarComponent';
import {
  Container,
  Heading,
  Paragraph,
  Row,
} from '../common/Layout/Layout';
import SpinnerComponent from '../common/SpinnerComponent';
import DayPickerComponent from './DayPickerComponent';
import QuizSummaryCard from './QuizSummaryCard';
import QuizActivityBlock from './QuizActivityBlock';
import questions from '../Quiz/questions';
import {
  STARS,
  SUMMARY_SLEEP,
  SUMMARY_NUTRITION,
  SUMMARY_HYDRATION,
  CATEGORY_ACTIVITY,
} from '../../constants';

class Day extends React.Component {
  state = {
    selectedDateUnformated: '',
    firstRender: true,
  }

  componentDidMount = async () => {
    const today = this.renderTodaysDate();
    const { getDayReviewAnswers } = this.props;
    await getDayReviewAnswers(today);
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
    const { getDayReviewAnswers } = this.props;
    getDayReviewAnswers(this.formatDate(value));
  }

  renderDayDescription = (rate) => {
    const star = STARS.find((el) => el.rate === rate);

    if (star) {
      return (
        <Heading
          style={{ textTransform: 'capitalize' }}
        >
          It was
          {' '}
          {star.description[0] !== 'a' ? 'a' : 'an'}
          {' '}
          {star.description}
          {' '}
          day!
        </Heading>
      );
    }
    const { answersByDay } = this.props;

    if (!Object.keys(answersByDay).length) {
      return (
        <Heading
          style={{ textTransform: 'capitalize' }}
        >
          No data for given day...
        </Heading>
      );
    }
  }

  renderStars() {
    const { answersByDay } = this.props;
    return STARS.map((star) => (
      <StarComponent
        readOnly
        key={star.rate}
        starRate={star.rate}
        hoveredStarRate={answersByDay.dayRate}
      />
    ));
  }

  renderSleepCard = () => {
    const { answersByDay } = this.props;
    const { sleptWell, wentToBed, wokeUp } = answersByDay;
    const timeDifferece = subtractTimeStrings(wentToBed, wokeUp);

    const header = () => {
      if (ifKeyExists('sleptWell', answersByDay)) {
        return `You have ${sleptWell ? '' : 'not'} slept well`;
      }

      return 'Sleep details';
    };

    const descriptionText = [];

    const qSleep = questions.filter((q) => q.summaryCardCategory === SUMMARY_SLEEP);

    qSleep.forEach((q) => {
      if (ifKeyExists(q.name, answersByDay) && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(answersByDay[q.name]));
      }

      if (q.name === 'wentToBed' && timeDifferece) {
        descriptionText.unshift(timeDifferece);
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
  }

  renderNutritionCard = () => {
    const { answersByDay } = this.props;
    const { mealRegularity, skippedMeal, junkFood } = answersByDay;

    const header = () => {
      const mealRegularityExists = ifKeyExists('mealRegularity', answersByDay);
      const skippedMealExists = ifKeyExists('skippedMeal', answersByDay);
      const junkFoodExists = ifKeyExists('junkFood', answersByDay);

      if (mealRegularityExists && skippedMealExists && junkFoodExists) {
        return `${(mealRegularity && !skippedMeal && !junkFood) ? 'You have nourished yourself well' : 'You have nourished yourself poorly'}`;
      }

      return 'Nutrition details';
    };

    const descriptionText = [];
    const qNutrition = questions.filter((q) => q.summaryCardCategory === SUMMARY_NUTRITION);

    qNutrition.forEach((q) => {
      if (ifKeyExists(q.name, answersByDay) && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(answersByDay[q.name]));
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
  }

  renderHydrationCard = () => {
    const { answersByDay } = this.props;
    const { waterGlasses } = answersByDay;
    const waterGlassesExists = ifKeyExists('waterGlasses', answersByDay);

    const header = () => {
      if (waterGlassesExists) {
        if (waterGlasses >= 6) {
          return 'Well hydrated';
        } if (waterGlasses < 4) {
          return 'Poorly hydrated';
        }
        return 'Hydrated';
      }
      return 'Hydration';
    };

    const descriptionText = [];
    const qHydration = questions.filter((q) => q.summaryCardCategory === SUMMARY_HYDRATION);

    qHydration.forEach((q) => {
      if (ifKeyExists(q.name, answersByDay) && q.renderSummaryDetails) {
        descriptionText.push(q.renderSummaryDetails(answersByDay[q.name]));
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
    const { answersByDay } = this.props;
    const qActivities = questions.filter((q) => q.questionCategory === CATEGORY_ACTIVITY);

    const activityNames = [];
    const activityDurations = [];

    qActivities.forEach((activity) => {
      if (ifKeyExists(activity.name, answersByDay)) {
        activityDurations.push({
          duration: answersByDay[activity.name].activityTime,
          key: activity.name,
        });
        activityNames.push(activity.question);
      }
    });

    if (activityDurations.length < 1) {
      return;
    }

    return (
      <>
        <QuizSummaryCard
          header="You have spent your time on"
          description={(
            <QuizActivityBlock
              activityNames={activityNames}
              activityDurations={activityDurations}
            />
          )}
        />
      </ >
    );
  }

  renderResults = () => {
    const { isLoading, answersByDay } = this.props;
    if (isLoading) {
      return <SpinnerComponent />;
    }

    if (!Object.keys(answersByDay).length) {
      return (
        <Paragraph>...please pick another date</Paragraph>
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
    const { firstRender, selectedDateUnformated } = this.state;
    const { answersByDay } = this.props;
    const { dayRate } = answersByDay;
    if (firstRender) {
      return null;
    }

    return (
      <Container>
        {this.renderDayDescription(dayRate)}
        <Row
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
          }}
        >
          {this.renderStars()}
        </Row>

        <Row
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap-reverse',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            margin: '15px 0px',
          }}
        >

          <DayPickerComponent
            handleDayClick={this.handleDayClick}
            selectedDay={selectedDateUnformated || new Date()}
          />

          <div
            style={{
              display: 'flex',
              flex: '2 50%',
              flexDirection: 'column',
              margin: '0px 10px',
            }}
          >
            {this.renderResults()}
          </div>

        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  answersByDay: state.dayReviewState.data,
  isLoading: state.dayReviewState.isLoading,
});

export default connect(
  mapStateToProps,
  { getDayReviewAnswers: actions.getDayReviewAnswers },
)(Day);
